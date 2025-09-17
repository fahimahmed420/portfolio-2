import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip as RechartsTooltip,
} from "recharts";
import CustomSortDropdown from "../Components/CustomSortDropdown";

const getBarColor = (level) => {
  switch (level) {
    case "Beginner":
      return "bg-gray-400";
    case "Intermediate":
      return "bg-green-500";
    case "Advanced":
      return "bg-orange-500";
    case "Expert":
      return "bg-purple-600";
    default:
      return "bg-blue-500";
  }
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills.json:", err));
  }, []);

  const filteredSkills = useMemo(() => {
    let result =
      filter === "All" ? skills : skills.filter((s) => s.category === filter);

    if (search) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "proficiency") result = [...result].sort((a, b) => b.proficiency - a.proficiency);
    if (sortBy === "experience") result = [...result].sort((a, b) => a.experience.localeCompare(b.experience));

    return result;
  }, [skills, filter, search, sortBy]);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  useEffect(() => {
    document.title = "Skills | Fahim Ahmed";
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-5 lg:px-8 py-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
          My Skills
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm lg:text-base">
          Explore my professional skills. I focus on building high-quality, responsive, and user-friendly applications. Filter, search, or sort to explore my expertise.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap gap-3 p-2 border border-gray-200 rounded-lg justify-center w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md ${filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat === "All" && "🗂️ "} {cat === "Technical" && "💻 "} {cat === "Language" && "📝 "} {cat === "Management" && "📋 "}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search + Sorting */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 md:px-4 py-2 border border-gray-200 rounded-lg w-full md:w-1/3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <CustomSortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            style={{ zIndex: filteredSkills.length - index }}
            className="bg-gray-50 rounded-xl p-4 md:p-6 transition border border-gray-200 transform hover:-translate-y-1 hover:shadow-lg relative"
          >
            <h3 className="font-heading text-base md:text-lg font-semibold text-primary mb-1 md:mb-2 flex items-center gap-2">
              {skill.icon} {skill.name}
            </h3>
            <p className="text-text-secondary text-xs md:text-sm mb-2">{skill.experience}</p>

            <div className="flex justify-between text-xs md:text-sm mt-2 mb-1">
              <span>Proficiency</span>
              <span>{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 md:h-3 mb-2">
              <div
                className={`${getBarColor(skill.level)} h-2 md:h-3 rounded-full transition-all`}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
            <p className="text-xs md:text-sm font-medium text-primary mb-2">{skill.level}</p>

            <div className="flex flex-wrap gap-2 mb-2">
              {skill.badges.map((badge, i) => (
                <span
                  key={i}
                  title={`Badge: ${badge}`}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full border text-gray-600 cursor-help"
                >
                  {badge}
                </span>
              ))}
            </div>

            <button
              onClick={() => toggleExpand(index)}
              className="text-blue-600 text-xs md:text-sm font-medium mt-1 hover:underline"
            >
              {expanded === index ? "Hide Details ▲" : "Show Details ▼"}
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 md:mt-4 text-xs md:text-sm text-text-secondary space-y-2 bg-white p-3 md:p-4 rounded-lg shadow-inner"
                >
                  <p>{skill.description}</p>
                  <div>
                    <strong className="text-primary">Projects:</strong>
                    <ul className="list-disc list-inside ml-2">
                      {skill.projects.map((project, i) => (
                        <li key={i}>
                          {typeof project === "string" ? (
                            project
                          ) : (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {project.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Radar Chart */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Skills Proficiency Overview
        </h2>
        <p className="text-center text-text-secondary text-sm md:text-base mb-6 max-w-2xl mx-auto">
          A visual overview of my skills and their proficiency levels.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full h-80 md:h-96"
        >
          <ResponsiveContainer>
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar
                name="Proficiency"
                dataKey="proficiency"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
              <RechartsTooltip />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
