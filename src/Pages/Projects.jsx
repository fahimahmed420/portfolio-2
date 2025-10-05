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

  // Track visible section
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
      {/* Left Counter (only visible on xl+) */}
      <div className="hidden 2xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col space-y-4 z-10 items-center">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToProject(i)}
            className={`h-[4px] w-8 transition-all cursor-target ${
              activeIndex === i ? "bg-black w-12" : "bg-gray-400"
            }`}
          ></button>
        ))}

        {/* Scroll hint arrows */}
        {activeIndex === 0 && (
          <div className="absolute -bottom-60 flex items-center">
            <span className="text-sm text-gray-500 rotate-90 inline-flex items-center">
              Scroll Down ───────────────▷
            </span>
          </div>
        )}

        {activeIndex === projects.length - 1 && (
          <div className="absolute -top-60 flex items-center">
            <span className="text-sm text-gray-500 -rotate-90 inline-flex items-center">
              Scroll Up ───────────────▷
            </span>
          </div>
        )}
      </div>

      {/* Right Rotated Links (only on xl+) */}
      <div className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-6 z-10">
        {projects[activeIndex] && (
          <>
            <a
              href={projects[activeIndex].sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary rotate-90 origin-right text-secondary cursor-target"
            >
              Git
            </a>
            <a
              href={projects[activeIndex].liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary rotate-90 origin-right text-secondary cursor-target"
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
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                  {project.title}
                </h2>

                {/* Git/Live links (visible on <xl screens only) */}
                <div className="flex 2xl:hidden space-x-3 text-sm">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md border border-gray-300 text-secondary hover:bg-black hover:text-white transition"
                  >
                    Git
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md border border-gray-300 text-secondary hover:bg-black hover:text-white transition"
                  >
                    Live
                  </a>
                </div>
              </div>

              <p className="max-w-md text-secondary">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md text-primary cursor-target"
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

      {/* ===================== */}
      {/* Small Screen Navigation */}
      {/* ===================== */}

      {/* Bottom horizontal bar */}
      <div className="flex 2xl:hidden overflow-x-auto space-x-4 px-5 py-2 fixed bottom-0 w-full bg-white shadow-md z-20">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToProject(i)}
            className={`h-2 w-6 rounded-full transition-all ${
              activeIndex === i ? "bg-black w-12" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
