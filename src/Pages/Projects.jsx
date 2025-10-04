import React, { useEffect, useState, useRef } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.reverse()))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  useEffect(() => {
    document.title = "Projects | Fahim Ahmed";
  }, []);

  // Track which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    projectRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      projectRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [projects]);

  const scrollToProject = (index) => {
    projectRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory bg-white relative">
      {/* Left Counter */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToProject(i)}
            className={`h-[2px] w-8 transition-all ${
              activeIndex === i ? "bg-blue-500 w-12" : "bg-black"
            }`}
          ></button>
        ))}
      </div>

      {/* Right Links (per project, update dynamically) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-10">
        {projects[activeIndex] && (
          <>
            <a
              href={projects[activeIndex].sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary rotate-90 origin-right text-secondary"
            >
              Git
            </a>
            <a
              href={projects[activeIndex].liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary rotate-90 origin-right text-secondary"
            >
              Live
            </a>
          </>
        )}
      </div>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          data-index={index}
          className="h-screen snap-start flex items-center"
        >
          <div className="pt-16 max-w-7xl mx-auto px-5 lg:px-8 py-8 w-full flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                {project.title}
              </h2>
              <p className="max-w-md text-secondary">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-lg shadow-lg max-h-[450px]"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
