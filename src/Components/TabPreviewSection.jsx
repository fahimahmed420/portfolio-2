import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBriefcase, FaAward, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import {
  Code, Database, Layers, Code2, Target, BookOpen, Monitor, Server, Wrench, Palette,
  Briefcase, Building2, GraduationCap, User, School, Coffee,Lightbulb
} from "lucide-react";
import TargetCursor from "./ui/TargetCursor";

const iconMap = {
  user: FaUser,
  briefcase: FaBriefcase,
  award: FaAward,
  folder: FaFolderOpen,
  envelope: FaEnvelope,
};

const tabs = [
  {
    label: "About Me",
    icon: "user",
    link: "about",
    content: (
      <div className="text-gray-700 w-full">
        <h3 className="text-lg font-semibold mb-2">About Me</h3>
        <p className="mb-4">
          Full-Stack Developer passionate about crafting web applications with modern technologies.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-600" />
            <span>Specialized in React, Node.js & scalable web apps</span>
          </li>
          <li className="flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            <span>Dedicated to clean code, UX, and best practices</span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span>Always exploring new tools and technologies</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Experience",
    icon: "briefcase",
    link: "experience",
    content: (
      <div className="text-gray-700 w-full">
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        <p className="mb-4">
          Hands-on projects and collaborations that shaped my expertise.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            <span>Built multiple React & Node.js projects</span>
          </li>
          <li className="flex items-center gap-2">
            <Database className="w-5 h-5 text-green-600" />
            <span>Worked with MongoDB & Firebase</span>
          </li>
          <li className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600" />
            <span>Focused on scalable and maintainable code</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Skills",
    icon: "award",
    link: "skills",
    content: (
      <div className="text-gray-700 w-full">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <p className="mb-4">
          Discover my technical competencies, tools I master, and areas of specialization.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-600" />
            <span><span className="font-medium">Frontend:</span> React, JavaScript (ES6+), Tailwind CSS</span>
          </li>
          <li className="flex items-center gap-2">
            <Server className="w-5 h-5 text-green-600" />
            <span><span className="font-medium">Backend:</span> Node.js, Express.js</span>
          </li>
          <li className="flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-600" />
            <span><span className="font-medium">Database:</span> MongoDB, Mongoose</span>
          </li>
          <li className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-orange-600" />
            <span><span className="font-medium">Tools & Workflow:</span> Git, GitHub, REST APIs, JWT/Auth</span>
          </li>
          <li className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-pink-600" />
            <span><span className="font-medium">Design:</span> Figma (UI/UX prototyping)</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Projects",
    icon: "folder",
    link: "projects",
    content: (
      <div className="text-gray-700 w-full">
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        <p className="mb-4">
          A selection of projects showcasing my skills and problem-solving approach.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span><span className="font-medium">WorkSphereX:</span> Marketplace for freelancers & clients with secure checkout</span>
          </li>
          <li className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-green-600" />
            <span><span className="font-medium">HotelEr:</span> Full-stack hotel booking system (React, Node, MongoDB)</span>
          </li>
          <li className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <span><span className="font-medium">EduManage:</span> E-learning platform with courses, roles & progress tracking</span>
          </li>
          <li className="flex items-center gap-2">
            <User className="w-5 h-5 text-orange-600" />
            <span><span className="font-medium">Developer Portfolio:</span> Modern portfolio with animations & dynamic pages</span>
          </li>
          <li className="flex items-center gap-2">
            <School className="w-5 h-5 text-pink-600" />
            <span><span className="font-medium">CampusPilot:</span> Student dashboard with schedule, budget, and Q&A tools</span>
          </li>
        </ul>
      </div>

    ),
  },
  {
    label: "Contact",
    icon: "envelope",
    link: "contact",
    content: (
      <div className="text-gray-700 w-full">
        <h3 className="text-lg font-semibold mb-2">Contact</h3>

        <div className="space-y-2">
          <p className="flex items-center gap-2 ml-0">
            Always happy to chat about
          </p>
          <p className="flex items-center gap-2 ml-0">
            <Code2 className="w-5 h-5 text-blue-600" />
            code
          </p>
          <p className="flex items-center gap-2 ml-4">
            <Coffee className="w-5 h-5 text-green-500" />
            coffee
          </p>
          <p className="flex items-center gap-2 ml-8">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            or cool project ideas
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Let's connect and build something amazing together!
        </p>
      </div>
    ),
  },
];

export default function TabPreviewSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4">
       <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 border-b border-gray-300 pb-3 mb-6">
        {tabs.map((tab, idx) => {
          const Icon = iconMap[tab.icon];
          return (
            <a
              key={idx}
              href={tab.link}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className="flex items-center cursor-target space-x-2 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200 text-sm sm:text-base"
            >
              <Icon className="text-lg sm:text-xl" />
              <span className="font-medium">{tab.label}</span>
            </a>
          );
        })}
      </div>

      {/* Preview Area with expand animation */}
      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {hoverIndex !== null ? (
            <motion.div
              key={hoverIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {tabs[hoverIndex].content}
            </motion.div>
          ) : (
            <motion.p
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500 text-center p-4 text-sm sm:text-base"
            >
              Hover over a tab to see a preview
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
