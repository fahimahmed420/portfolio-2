import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.reverse()))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div className="pt-16 max-w-7xl mx-auto px-5 lg:px-8 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-100 rounded-xl border-gray-200 border hover:shadow-lg overflow-hidden cursor-pointer relative group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image with blur on hover */}
            <div className="relative">
              <img
                src={project.images[0] || "/fallback-black.png"}
                alt={project.title}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:blur-sm"
                onError={(e) => (e.currentTarget.src = "/fallback-black.png")}
              />
              <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveLink, "_blank");
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Live Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="bg-white text-black px-4 py-2 rounded"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Card content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-1 line-clamp-1">{project.description}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>Duration: {project.duration}</span>
                <span
                  className={`px-2 py-1 rounded text-white ${project.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.slice(0, 5).map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show All button */}
      {projects.length > visibleProjects && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleProjects(projects.length)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Show All
          </button>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Navbar */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-800 transition text-xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-4 space-y-6">
              {/* Main image with live demo button */}
              <div className="relative rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={selectedProject.images?.[0] || "/fallback-black.png"}
                  alt={selectedProject.title}
                  className="w-full object-cover max-h-[500px]"
                  onError={(e) => (e.currentTarget.src = "/fallback-black.png")}
                />
                <button
                  onClick={() => window.open(selectedProject.liveLink, "_blank")}
                  className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
                >
                  Live Demo
                </button>
              </div>


              {/* Overview */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">Overview</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
                <div className="flex gap-4 text-gray-500 text-sm">
                  <span>
                    <strong>Duration:</strong> {selectedProject.duration}
                  </span>
                  <span>
                    <strong>Status:</strong>
                    <span
                      className={`ml-1 px-2 py-0.5 rounded text-white ${selectedProject.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                    >
                      {selectedProject.status}
                    </span>
                  </span>
                </div>
              </div>

              {/* Admin Role (if available) */}
              {selectedProject.hasAdminRole && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Admin Credentials</h3>
                  <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 space-y-1">
                    <p>
                      <strong>Email:</strong> {selectedProject.adminEmail}
                    </p>
                    <p>
                      <strong>Password:</strong> {selectedProject.adminPassword}
                    </p>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Challenges Overcome</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {selectedProject.challengesFaced.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Future Plans */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Future Plans</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {selectedProject.futurePlans.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Gallery</h3>
                <div className="flex gap-3 overflow-x-auto p-2">
                  {selectedProject.pages.map((page, idx) => (

                    <motion.img
                      key={idx}
                      src={page.link}
                      alt={page.name}
                      className="w-48 h-32 object-cover rounded-lg flex-shrink-0 cursor-pointer border border-gray-200"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setPreviewImage(page.link)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPreviewImage(null)}
        >
          <motion.img
            src={previewImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setPreviewImage(null)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
