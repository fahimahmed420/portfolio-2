import React, { useState } from 'react';
import { FaBriefcase, FaCode, FaCertificate, FaLaptopCode } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';

// The main App component that renders the entire timeline.
export default function Timeline() {
  // Sample data for the timeline. You can add or remove items here.
  const timelineData = [
    {
      id: 1,
      icon: <FaBriefcase />,
      title: "Senior Full-Stack Developer at TechCorp",
      year: "2024",
      description: "Leading a team of 6 developers in building next-generation SaaS platforms",
      category: "Career",
      location: "San Francisco, CA",
      details: [
        "Architected microservices infrastructure serving 100K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted technical interviews"
      ],
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Full-Stack Developer at StartupXYZ",
      year: "2022",
      description: "Built the core platform from MVP to Series A funding",
      category: "Career",
      location: "Remote",
      details: [
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Created a responsive frontend with React and TypeScript",
        "Integrated third-party services for payments and analytics"
      ],
    },
    {
      id: 3,
      icon: <FaCertificate />,
      title: "AWS Solutions Architect Certification",
      year: "2021",
      description: "Achieved professional certification in cloud architecture",
      category: "Education",
      details: [
        "Studied and mastered core AWS services including EC2, S3, and VPC",
        "Gained hands-on experience in building scalable and secure cloud solutions",
      ],
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Frontend Developer at DesignStudio",
      year: "2020",
      description: "Developed and maintained user-facing web applications",
      category: "Career",
      details: [
        "Collaborated with designers to translate mockups into functional web pages",
        "Optimized application performance, reducing page load times by 40%",
        "Implemented state management using Redux and Context API"
      ],
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header section of the timeline */}
        <div className="flex items-center gap-4 mb-10">
          <div className="text-3xl text-neutral-500">
            <FaBriefcase />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-neutral-800">Life Timeline</h1>
            <p className="text-neutral-500 text-sm">Key milestones & transitions</p>
          </div>
        </div>

        {/* The main timeline container with the vertical line */}
        <div className="relative">
          {/* Vertical line. The absolute positioning and height create the timeline line. */}
          <div className="absolute left-[13px] top-0 bottom-0 w-1 bg-neutral-200 rounded-full"></div>

          {/* Map through the timeline data to render each item */}
          {timelineData.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// A component for each individual item in the timeline.
const TimelineItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the expanded state of the details section.
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-8">
      {/* Container for the icon on the timeline */}
      <div className="absolute top-0 -left-1 z-10 p-2 bg-white text-blue-600 rounded-full border-4 border-neutral-100 shadow-md">
        {item.icon}
      </div>

      {/* The timeline card content. The hover effect is added here. */}
      <div className="ml-10 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer">
        <div className="flex justify-between items-start" onClick={toggleOpen}>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
            <p className="text-sm text-neutral-500">{item.year}</p>
          </div>
          {/* Chevron icon to indicate expand/collapse state */}
          <div className="text-neutral-500 transition-transform duration-300">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>

        <p className="mt-4 text-neutral-600">{item.description}</p>
        
        {/* Additional information tags like category and location */}
        <div className="mt-4 flex gap-2 text-xs font-medium">
          <span className="bg-neutral-200 text-neutral-600 px-2 py-1 rounded-full">{item.category}</span>
          {item.location && (
            <span className="bg-neutral-200 text-neutral-600 px-2 py-1 rounded-full">{item.location}</span>
          )}
        </div>

        {/* Expandable details section. Renders only if isOpen is true. */}
        <div className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            {item.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">&rarr;</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
