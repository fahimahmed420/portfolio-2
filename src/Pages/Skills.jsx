import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const categoryIcons = {
  Programming: "💻",
  Design: "🎨",
  Tools: "🛠️",
  Other: "📚",
};

const getBarColor = (level) => {
  switch (level) {
    case "Beginner":
      return "from-gray-300 to-gray-400";
    case "Intermediate":
      return "from-green-400 to-green-600";
    case "Advanced":
      return "from-orange-400 to-orange-600";
    case "Expert":
      return "from-purple-400 to-purple-600";
    default:
      return "from-blue-400 to-blue-600";
  }
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [chartView, setChartView] = useState(false);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading skills.json:", err));
  }, []);

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills = useMemo(() => {
    let result = filter === "All" ? skills : skills.filter((s) => s.category === filter);
    if (search) result = result.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === "proficiency") result = [...result].sort((a, b) => b.proficiency - a.proficiency);
    if (sortBy === "experience") result = [...result].sort((a, b) => a.experience.localeCompare(b.experience));
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [skills, filter, search, sortBy]);

  return (
    <div className="min-h-screen bg-background pt-16 max-w-7xl mx-auto px-5 lg:px-8 py-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg w-full md:w-1/3"
        />

        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-lg shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoryIcons[cat] || "📂"} {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="name">Sort by Name</option>
          <option value="proficiency">Sort by Proficiency</option>
          <option value="experience">Sort by Experience</option>
        </select>

        <button
          onClick={() => setChartView(!chartView)}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {chartView ? "Card View" : "Chart View"}
        </button>
      </div>

      {/* Chart View */}
      {chartView && (
        <div className="w-full h-96 mb-8">
          <ResponsiveContainer>
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar name="Proficiency" dataKey="proficiency" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Skill Cards */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-48"></div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-elevation-1 p-6 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Header */}
              <h3 className="font-heading text-lg font-semibold text-primary">{skill.name}</h3>
              <p className="text-text-secondary text-sm">{skill.experience}</p>

              {/* Proficiency */}
              <div className="flex justify-between text-sm mt-3 mb-1">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
                <div
                  className={`bg-gradient-to-r ${getBarColor(skill.level)} h-3 rounded-full transition-all`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-sm font-medium text-primary mb-2">{skill.level}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {skill.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-muted/50 rounded-full border text-text-secondary cursor-help"
                    title={`Badge: ${badge}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Expand Button */}
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                aria-expanded={expanded === index}
                className="text-blue-600 text-sm font-medium mt-2 hover:underline"
              >
                {expanded === index ? "Hide Details ▲" : "Show Details ▼"}
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-sm text-text-secondary space-y-2 bg-white p-4 rounded-lg shadow-inner"
                  >
                    <p>{skill.description}</p>
                    <div>
                      <strong className="text-primary">Projects:</strong>
                      <ul className="list-disc list-inside ml-2">
                        {skill.projects.map((project, i) => (
                          <li key={i}>
                            <a
                              href={project.link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {project.name || project}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
