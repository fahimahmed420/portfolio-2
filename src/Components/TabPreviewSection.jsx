import React, { useState } from "react";
import { FaUser, FaBriefcase, FaAward, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const tabs = [
  { label: "About Me", icon: <FaUser />, text: "I am a passionate developer with a love for creating web applications." },
  { label: "Experience", icon: <FaBriefcase />, text: "I have worked on multiple projects using React, Node.js, and MongoDB." },
  { label: "Skills", icon: <FaAward />, text: "Proficient in JavaScript, React, Tailwind CSS, and backend technologies." },
  { label: "Projects", icon: <FaFolderOpen />, text: "Explore my portfolio showcasing web apps, dashboards, and more." },
  { label: "Contact", icon: <FaEnvelope />, text: "Get in touch with me via email or LinkedIn for collaborations." },
];

export default function TabPreviewSection() {
  const [hoverText, setHoverText] = useState("Hover over a tab to see a preview");

  return (
    <div className="">
      {/* Tabs */}
      <div className="flex justify-center gap-10 border-b border-gray-300 pb-3">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoverText(tab.text)}
            onMouseLeave={() => setHoverText("Hover over a tab to see a preview")}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            <span>{tab.icon}</span>
            <span className="text-sm font-medium">{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Preview Area */}
      <div className="flex items-center justify-center h-40 text-gray-500 text-lg">
        {hoverText}
      </div>
    </div>
  );
}
