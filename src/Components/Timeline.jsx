import React, { useState } from 'react';
import { FaBriefcase, FaCode, FaLaptopCode, FaBook, FaGraduationCap } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Timeline() {
 const timelineData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Full-Stack Developer",
    year: "2025 ( Nov-Apr )",
    description: "Enrolled in Programming Hero Level-2 (Full-Stack Development) course",
    category: "Course",
    location: "Remote",
    details: [
      "Learning advanced concepts in Next.js, Redux, and backend optimization",
      "Building real-world SaaS projects with authentication and payment integration",
      "Collaborating with peers in team projects to simulate industry workflows",
    ],
  },
  {
    id: 2,
    icon: <FaCode />,
    title: "MERN-Stack Developer",
    year: "2025 ( Jan-Aug )",
    description: "Completed Programming Hero Level-1 (MERN-Stack Development) course",
    category: "Course",
    location: "Remote",
    details: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Developed REST APIs and integrated them with dynamic frontends",
      "Worked on authentication, CRUD operations, and deployment to cloud platforms",
    ],
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    title: "City University",
    year: "2019-2024",
    description: "Completed Bachelor of Science (BSc) in Computer Science & Engineering",
    category: "Education",
    details: [
      "Studied core subjects like Data Structures, Algorithms, DBMS, and Networking",
      "Worked on academic projects in web development and cloud computing",
      "Participated in workshops and seminars to strengthen technical skills",
    ],
  },
  {
    id: 4,
    icon: <FaBook />,
    title: "Meastro Crown Collage",
    year: "2016-2018",
    description: "Completed Higher Secondary Certificate (HSC) in Science",
    category: "Education",
    details: [
      "Focused on Mathematics, Physics, and Computer Science",
      "Built a strong foundation for problem-solving and analytical skills",
      "Prepared for university entrance and higher education in CSE",
    ],
  },
];

  return (
    <div className="bg-light rounded-lg p-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header section of the timeline */}
        <div className="flex items-center gap-4 mb-10">
          <div className="text-3xl text-neutral-500">
            <FaBriefcase />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-primary">Life Timeline</h1>
            <p className="text-secondary text-sm">Key milestones & transitions</p>
          </div>
        </div>

        {/* The main timeline container with the vertical line */}
        <div className="relative">
          {/* Vertical line. The absolute positioning and height create the timeline line. */}
          <div className="absolute left-[13px] top-0 bottom-0 w-1 bg-[var(--bg-primary)] rounded-full"></div>

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
    <div className="relative p-6">
      {/* Container for the icon on the timeline */}
      <div className="absolute top-0 -left-1 z-10 p-2 bg-primary text-primary 
      rounded-full border-4 border-[var(--text-primary)] shadow-md">
        {item.icon}
      </div>

      {/* The timeline card content. The hover effect is added here. */}
      <div className="ml-10 p-6 bg-primary rounded-xl transition transform
       hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="flex justify-between cursor-target items-start" onClick={toggleOpen}>
          <div>
            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-secondary">{item.year}</p>
          </div>
          {/* Chevron icon to indicate expand/collapse state */}
          <div className="text-primary transition-transform duration-300">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>

        <p className="mt-4 text-secondary">{item.description}</p>

        {/* Additional information tags like category and location */}
        <div className="mt-4 flex gap-2 text-sm md:text-base">
          <span className="bg-light text-primary px-2 py-1 rounded-md shadow">{item.category}</span>
          {item.location && (
            <span className="bg-light text-primary px-2 py-1 rounded-md shadow">{item.location}</span>
          )}
        </div>

        {/* Expandable details section. Renders only if isOpen is true. */}
        <div className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="list-disc list-inside space-y-2 text-secondary">
            {item.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">&rarr;</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
