import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Components/AppImage";
import Button from "../Components/ui/Button";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  LuAward,
  LuUsers,
  LuCalendar,
  LuTrendingUp,
  LuLinkedin,
  LuGithub,
  LuTwitter,
  LuCode,
  LuCoffee,
  LuUser,
  LuBriefcase,
  LuFolderOpen,
  LuMail,
  LuArrowRight,
  LuDownload,
  LuExternalLink,
  LuFacebook,
  LuGraduationCap,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import TabPreviewSection from "../Components/TabPreviewSection";
import TextType from "../Components/ui/TextType";

const iconMap = {
  Award: LuAward,
  Users: LuUsers,
  Calendar: LuCalendar,
  TrendingUp: LuTrendingUp,
  Linkedin: LuLinkedin,
  Github: LuGithub,
  Twitter: LuTwitter,
  Facebook: LuFacebook,
  Code: LuCode,
  Coffee: LuCoffee,
  User: LuUser,
  Briefcase: LuBriefcase,
  FolderOpen: LuFolderOpen,
  Mail: LuMail,
  ArrowRight: LuArrowRight,
  ExternalLink: LuExternalLink,
  GraduationCap: LuGraduationCap,
};

const Home = () => {
  const navigate = useNavigate();
  const [recentProjects, setRecentProjects] = useState([]);

  const profileData = {
    name: "Fahim Ahmed",
    currentTitle: "Full-Stack Developer (MERN) | CSE Graduate",
    tagline:
      "Full-stack developer skilled in the MERN stack with a strong foundation in computer science. Completed Programming Hero Level-1 (MERN) and currently pursuing Level-2 to advance in modern web technologies. Passionate about building scalable, user-focused applications and continuously improving through hands-on projects.",
    profileImage: "https://i.ibb.co/mrc8BGvS/IMG-1593.jpg",
    highlights: [
      {
        icon: "Calendar",
        title: "Programming Hero Journey",
        description:
          "Completed Level-1 (MERN Stack Development) and enrolled in Level-2 (Full-Stack Development, 2025).",
      },
      {
        icon: "GraduationCap",
        title: "BSc in Computer Science & Engineering",
        description:
          "Graduated from City University with a focus on software development, algorithms, and cloud computing.",
      },
      {
        icon: "Award",
        title: "Hands-On Projects",
        description:
          "Developed full-stack applications including portfolio sites, e-commerce platforms, and collaborative projects.",
      },
      {
        icon: "TrendingUp",
        title: "Continuous Growth",
        description:
          "Dedicated to learning advanced frameworks, improving code quality, and staying updated with industry best practices.",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/-fahim-ahmed/", },
      { platform: "GitHub", icon: "Github", url: "https://github.com/fahimahmed420" },
      { platform: "Twitter", icon: "Twitter", url: "https://x.com/Fahim_Ahmed_420" },
      { platform: "Facebook", icon: "Facebook", url: "https://www.facebook.com/fahimahmed420/", },
    ],
  };

  const quickStats = [
    { icon: "Code", value: "10+", label: "Projects Completed" },
    { icon: "Users", value: "0", label: "Happy Clients" },
    { icon: "Award", value: "0", label: "Awards Won" },
    { icon: "Coffee", value: "0", label: "Cups of Coffee" },
  ];

  const testimonials = [
    {
      name: "Fahim Ahmed",
      position: "Mern Stack Developer",
      company: "Bekar",
      avatar: "https://i.ibb.co.com/mrc8BGvS/IMG-1593.jpg",
      content:
        "Excited to share client feedback here soon! Currently working on building real-world projects and sharpening my skills.",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Fahim_Ahmed_Resume.pdf";
    link.download = "fahim-ahmed_Resume.pdf";
    link?.click();
  };

  const handleContactClick = () => {
    const phoneNumber = "8801774433063";
    const message = "Hello Fahim, I came across your portfolio and would like to connect.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const handleViewAllProjects = () => navigate("/projects");

  useEffect(() => {
    document.title = "Portfolio Home | Fahim Ahmed";

    // fetch last 3 projects from public/projects.json
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const lastThree = data.slice(-3).reverse();
        setRecentProjects(lastThree);
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const ExternalIcon = iconMap["ExternalLink"];

  return (
    <div className="min-h-screen">
      <main className="pt-16 max-w-7xl mx-auto px-5 lg:px-8 py-8">
        {/* HERO SECTION */}
        <section className="bg-white rounded-xl shadow-elevation-2 overflow-hidden mb-12 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="relative">
                {/* profile name marquee in circle */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-elevation-2 ring-4 ring-background flex flex-col justify-center items-center bg-gray-200 relative">
                  {/* Line 1 */}
                  <div className="w-full whitespace-nowrap flex animate-marquee-slow">
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                  </div>

                  {/* Line 2 */}
                  <div className="w-full whitespace-nowrap flex animate-marquee-reverse">
                    <p className="text-gray-300 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                    <p className="text-gray-300 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                  </div>

                  {/* Line 3 */}
                  <div className="w-full whitespace-nowrap flex animate-marquee">
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                  </div>

                  {/* Line 4 */}
                  <div className="w-full whitespace-nowrap flex animate-marquee-reverse-slow">
                    <p className="text-gray-300 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                    <p className="text-gray-300 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                  </div>

                  {/* Line 5 */}
                  <div className="w-full whitespace-nowrap flex animate-marquee-fast">
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                    <p className="text-gray-400 font-bold px-2">
                      Fahim Ahmed • Fahim Ahmed • Fahim Ahmed • Fahim Ahmed •
                    </p>
                  </div>
                </div>


                {/* social links orbit */}
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  {profileData.socialLinks.map((link, i) => {
                    const IconComp = iconMap[link.icon];
                    const angle = (i / profileData.socialLinks.length) * 360 - 90;
                    const radius = 85;

                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        <div className="p-2 bg-white cursor-target rounded-full shadow-md hover:bg-accent/10 transition animate-counter-spin">
                          <IconComp size={18} className="text-accent" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mt-4">
                  {profileData.name}
                </h1>
                <p className="text-lg text-secondary font-medium">
                  {profileData.currentTitle}
                </p>
                <p className="text-text-secondary max-w-md">
                  <TextType
                    text={profileData.tagline}
                    typingSpeed={50}
                    pauseDuration={1500}
                  />
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="default" onClick={handleDownloadResume}>
                  <LuDownload className="mr-1" size={18} />
                  Download Resume
                </Button>
                {/* WhatsApp Button with Tooltip */}
                <div className="relative inline-block group">
                  <Button
                    className="bg-green-600 hover:bg-green-800"
                    onClick={handleContactClick}
                  >
                    <FaWhatsapp size={18} className="mr-1" />
                    Chat on WhatsApp
                  </Button>

                  {/* Tooltip below */}
                  <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-full left-1/2 -translate-x-1/2 mt-2 w-44 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                    <div className="relative p-2 bg-gray-900/95 text-white text-sm rounded-md shadow-lg text-center">
                      For Quick Response
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900/95 rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* highlights */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Professional Highlights
              </h2>
              <div className="grid gap-4">
                {profileData.highlights.map((h, i) => {
                  const IconComp = iconMap[h.icon];
                  return (
                    <div
                      key={i}
                      className="flex items-start space-x-4 p-4 bg-light rounded-lg"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComp size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm">
                          {h.title}
                        </h3>
                        <p className="text-secondary text-sm">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>



        {/* QUICK STATS */}
        <section className="bg-light rounded-xl shadow-elevation-1 p-6 mb-12">
          <h2 className="text-xl font-semibold text-primary mb-6">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, i) => {
              const IconComp = iconMap[stat.icon];
              return (
                <div
                  key={i}
                  className="text-center cursor-target space-y-3 p-4 rounded-lg bg-muted/50 transition transform hover:-translate-y-1 cursor-cell"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComp size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* NOTEBOOK TABS */}
        <section className="bg-light rounded-xl shadow-elevation-1 p-6 mb-12">
          <TabPreviewSection />
        </section>

        {/* RECENT WORK */}
        <section className="bg-light rounded-xl shadow-elevation-1 p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-primary">
              Recent Work
            </h2>
            <Button
              variant="ghost"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleViewAllProjects}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((p, i) => (
              <a
                key={i}
                href={p.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-target bg-muted/50 rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={p.images}
                    alt={`${p.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={225}
                    onError={(e) => (e.currentTarget.src = "/fallback-black.png")}
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-primary text-sm">
                      {p.title}
                    </h3>
                    <ExternalIcon size={14} />
                  </div>
                  <p className="text-xs">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-light rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-primary mb-6">
            What People Say
          </h2>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg p-6 space-y-4 mb-4"
            >
              <p className="text-primary">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <Image src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-xs">
                    {t.position} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
