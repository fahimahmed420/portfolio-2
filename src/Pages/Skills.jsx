import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiPostman, SiFirebase, SiExpress, 
  SiFlask, SiBootstrap, SiJquery, SiTailwindcss, SiFramer, SiGreensock 
} from "react-icons/si";
import { VscDatabase } from "react-icons/vsc";

const SkillBadge = ({ icon, label }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow text-sm text-gray-800 hover:text-black hover:shadow-md transition"
  >
    {icon} {label}
  </motion.span>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-6">
      <h1 className="text-5xl font-bold mb-12">Skills</h1>

      {/* Most Used Stack */}
      <div className="bg-gray-200 rounded-2xl shadow p-6 mb-12 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">My Go-To Tech Stack</h2>
        <p className="text-gray-700">
          I primarily build full-stack applications using{" "}
          <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Node.js</span>,{" "}
          <span className="font-medium">Express.js</span>, and{" "}
          <span className="font-medium">MongoDB</span>.
        </p>
      </div>

      {/* Main Skill Categories */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Languages & Tools */}
        <div className="bg-gray-200 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Languages & Tools</h2>
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
        <div className="bg-gray-200 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Frameworks & Libraries</h2>
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
        <div className="bg-gray-200 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Core CS Concepts</h2>
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
      <div className="bg-gray-200 rounded-2xl shadow p-6 mt-12 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Currently Learning</h2>
        <p className="text-gray-700">
          Exploring <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">GraphQL</span>, and{" "}
          <span className="font-medium">Docker Compose</span> to expand my full-stack capabilities.
        </p>
      </div>

      {/* Closing statement */}
      <p className="mt-16 text-center text-gray-600 max-w-2xl italic">
        Constantly evolving, one skill at a time.
      </p>
    </div>
  );
};

export default Skills;
