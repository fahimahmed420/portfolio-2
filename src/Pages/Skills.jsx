import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiPostman, SiFirebase, SiExpress, 
  SiFlask, SiBootstrap, SiJquery, SiTailwindcss, SiFramer, SiGreensock 
} from "react-icons/si";
import { VscDatabase } from "react-icons/vsc";

const SkillBadge = ({ icon, label }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 bg-primary px-4 py-2 cursor-target rounded-md shadow-sm text-sm md:text-base
     opacity-90 hover:opacity-100 text-primary hover:shadow-md transition"
  >
    {icon} {label}
  </motion.span>
);

const Skills = () => {

  useEffect(() => {
    document.title = "Skills | Fahim Ahmed";
  }, []);

  return (
    <div className="min-h-screen bg-primary text-primary flex flex-col items-center px-5 pt-16 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Skills</h1>

      {/* Most Used Stack */}
      <div className="bg-light rounded-2xl shadow p-6 md:p-8 mb-12 max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary  mb-3">My Go-To Tech Stack</h2>
        <p className="text-secondary text-sm md:text-base">
          I primarily build full-stack applications using{" "}
          <span className="font-medium text-primary">React</span>,{" "}
          <span className="font-medium text-primary">Node.js</span>,{" "}
          <span className="font-medium text-primary">Express.js</span>, and{" "}
          <span className="font-medium text-primary">MongoDB</span>.
        </p>
      </div>

      {/* Main Skill Categories */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto lg:px-8">
        
        {/* Languages & Tools */}
        <div className="bg-light rounded-xl p-4 md:p-6 shadow">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Languages & Tools</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={<FaPython />} label="Python" />
            <SkillBadge icon={<VscDatabase />} label="SQL" />
            <SkillBadge icon={null} label="C++" />
            <SkillBadge icon={<FaJava />} label="Java" />
            <SkillBadge icon={<SiTypescript />} label="Typescript" />
            <SkillBadge icon={<SiJavascript />} label="JavaScript" />
            <SkillBadge icon={<FaGitAlt />} label="Git" />
            <SkillBadge icon={<SiPostman />} label="Postman" />
            <SkillBadge icon={<FaDocker />} label="Docker" />
            <SkillBadge icon={<SiFirebase />} label="Firebase" />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="bg-light rounded-xl p-4 md:p-6 shadow">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Frameworks & Libraries</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={<FaReact />} label="React" />
            <SkillBadge icon={<FaNodeJs />} label="Node.js" />
            <SkillBadge icon={<SiExpress />} label="Express.js" />
            <SkillBadge icon={<SiFlask />} label="Flask" />
            <SkillBadge icon={<SiBootstrap />} label="Bootstrap" />
            <SkillBadge icon={<SiJquery />} label="jQuery" />
            <SkillBadge icon={<SiTailwindcss />} label="TailwindCSS" />
            <SkillBadge icon={<SiFramer />} label="Framer Motion" />
            <SkillBadge icon={<SiGreensock />} label="GSAP" />
          </div>
        </div>

        {/* Core CS Concepts */}
        <div className="bg-light rounded-xl p-4 md:p-6 shadow">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Core CS Concepts</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={null} label="DSA" />
            <SkillBadge icon={null} label="DBMS" />
            <SkillBadge icon={null} label="OOP" />
            <SkillBadge icon={null} label="Operating Systems" />
            <SkillBadge icon={null} label="System Design" />
          </div>
        </div>
      </div>

      {/* Currently Learning */}
      <div className="bg-light rounded-2xl shadow p-6 md:p-8 mt-12 max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-3">Currently Learning</h2>
        <p className="text-secondary text-sm md:text-base">
          Exploring <span className="font-medium text-primary">Next.js</span>,{" "}
          <span className="font-medium text-primary">GraphQL</span>, and{" "}
          <span className="font-medium text-primary">Docker Compose</span> to expand my full-stack capabilities.
        </p>
      </div>

      {/* Closing statement */}
      <p className="mt-16 text-center text-secondary max-w-2xl italic text-sm md:text-base">
        Constantly evolving, one skill at a time.
      </p>

      {/* Right Fixed Links */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-16 z-10">
        <motion.a
          href="https://github.com/fahimahmed420"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-primary rotate-90 origin-right text-secondary cursor-target flex items-center"
        >
          <FaGithub className="mr-1"/> GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/-fahim-ahmed/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-primary rotate-90 origin-right text-secondary cursor-target flex items-center "
        >
          <FaLinkedin className="mr-1"/> LinkedIn
        </motion.a>
      </div>
    </div>
  );
};

export default Skills;
