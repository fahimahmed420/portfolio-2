import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBriefcase, FaAward, FaFolderOpen, FaEnvelope } from "react-icons/fa";

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
        <ul className="space-y-2 list-disc list-inside">
          <li>💻 Specialized in React, Node.js & scalable web apps</li>
          <li>🎯 Dedicated to clean code, UX, and best practices</li>
          <li>📚 Always exploring new tools and technologies</li>
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
        <ul className="space-y-2 list-disc list-inside">
          <li>🚀 Built multiple React & Node.js projects</li>
          <li>💻 Worked with MongoDB & Firebase</li>
          <li>📈 Focused on scalable and maintainable code</li>
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
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <span className="font-medium">Frontend:</span> React, Vue.js, TypeScript
          </li>
          <li>
            <span className="font-medium">Backend:</span> Node.js, Python, PostgreSQL
          </li>
          <li>
            <span className="font-medium">Design:</span> Figma, Adobe Creative Suite
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
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <span className="font-medium">Portfolio Dashboard:</span> React, Tailwind
          </li>
          <li>
            <span className="font-medium">E-commerce App:</span> Node.js, MongoDB
          </li>
          <li>
            <span className="font-medium">Chat Application:</span> React, Firebase
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
        <p className="mb-4">
          Let's connect for collaborations, opportunities, or just a chat!
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Email: <span className="font-medium">fahim@example.com</span></li>
          <li>
            LinkedIn:{" "}
            <a href="#" className="text-blue-600 hover:underline">
              linkedin.com/in/fahim
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function TabPreviewSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4">
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
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200 text-sm sm:text-base"
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
