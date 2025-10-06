import React, { useEffect } from "react";
import Image from "../Components/AppImage";
import { LuMapPin, LuCalendar, LuMail, LuPhone } from "react-icons/lu";
import Timeline from "../Components/Timeline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  const profile = {
    name: "Fahim Ahmed",
    title: "Full-Stack Developer (MERN) & Learner",
    image: "https://i.ibb.co.com/mrc8BGvS/IMG-1593.jpg",
    location: "Dhaka, Bangladesh",
    experience: "Programming Hero – Level-1 Graduate, Level-2 Enrolled",
    email: "fahim.ahmed.portfolio@gmail.com",
    phone: "+880 1774433063",
    coreValues: [
      "Consistency",
      "Problem-Solving",
      "Collaboration",
      "Continuous Learning",
    ],
  };

  useEffect(() => {
    document.title = "About | Fahim Ahmed";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center relative">
      {/* Right Fixed Links */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-16 z-10">
        <motion.a
          href="https://github.com/fahimahmed420"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-primary rotate-90 origin-right text-secondary cursor-pointer flex items-center"
        >
          <FaGithub className="mr-1" /> GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/-fahim-ahmed/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-primary rotate-90 origin-right text-secondary cursor-pointer flex items-center"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </motion.a>
      </div>

      <div className="max-w-7xl px-4 md:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-80 bg-gray-100 p-6 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] flex flex-col gap-6 rounded-lg">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg mb-4">
              <Image
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center">
              {profile.name}
            </h2>
            <p className="text-xs sm:text-sm text-secondary font-medium text-center">
              {profile.title}
            </p>
          </div>

          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-secondary">
              <LuMapPin /> <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <LuCalendar /> <span>{profile.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary break-all">
              <LuMail /> <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <LuPhone /> <span>{profile.phone}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">Core Values</h3>
            <ul className="flex flex-wrap gap-2">
              {profile.coreValues.map((val, i) => (
                <li
                  key={i}
                  className="bg-white text-primary px-2 py-1 rounded-md shadow-sm text-xs sm:text-sm md:text-base"
                >
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <main className="p-6 sm:p-8 space-y-8 bg-gray-100 shadow rounded-lg">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
                My Story
              </h2>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                I'm Fahim Ahmed, a passionate Full-Stack Developer with hands-on
                experience in the MERN stack. I completed{" "}
                <strong>Programming Hero Level-1</strong> and am currently
                enrolled in <strong>Level-2 </strong> to advance my skills in
                modern web technologies. I hold a{" "}
                <strong>
                  BSc in Computer Science & Engineering
                </strong>{" "}
                from City University. My goal is to build scalable, user-focused
                applications while continuously growing as a developer.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                What Drives Me
              </h2>
              <p className="italic text-secondary text-sm sm:text-base">
                "Technology should not only solve problems but also inspire
                growth. My motivation comes from seeing people benefit from the
                solutions I build, whether it’s simplifying a task, improving
                efficiency, or creating opportunities."
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                Professional Philosophy
              </h2>
              <ul className="list-disc pl-5 text-secondary text-sm sm:text-base space-y-1">
                <li>
                  Learning by building real-world projects is the best way to
                  grow
                </li>
                <li>
                  User experience and performance should always come first
                </li>
                <li>
                  Clean, reusable, and maintainable code saves future effort
                </li>
                <li>
                  Teamwork and collaboration bring the best out of any project
                </li>
              </ul>
            </section>
          </main>

          {/* Timeline under content */}
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
