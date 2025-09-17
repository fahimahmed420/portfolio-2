import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Components/AppImage";
import Button from "../Components/ui/Button";
import {
  LuAward,
  LuUsers,
  LuCalendar,
  LuTrendingUp,
  LuLinkedin,
  LuGithub,
  LuTwitter,
  LuDribbble,
  LuCode,
  LuCoffee,
  LuUser,
  LuBriefcase,
  LuFolderOpen,
  LuMail,
  LuArrowRight,
  LuDownload,
  LuExternalLink,
} from "react-icons/lu";
import TabPreviewSection from "../Components/TabPreviewSection";

const iconMap = {
  Award: LuAward,
  Users: LuUsers,
  Calendar: LuCalendar,
  TrendingUp: LuTrendingUp,
  Linkedin: LuLinkedin,
  Github: LuGithub,
  Twitter: LuTwitter,
  Dribbble: LuDribbble,
  Code: LuCode,
  Coffee: LuCoffee,
  User: LuUser,
  Briefcase: LuBriefcase,
  FolderOpen: LuFolderOpen,
  Mail: LuMail,
  ArrowRight: LuArrowRight,
  Download: LuDownload,
  ExternalLink: LuExternalLink,
};

const Home = () => {
  const navigate = useNavigate();
  const [recentProjects, setRecentProjects] = useState([]);

  const profileData = {
    name: "Fahim Ahmed",
    currentTitle: "Full-Stack Developer & UI/UX Designer",
    tagline:
      "Aspiring full-stack developer with 8 months of hands-on experience in building dynamic web applications. I am passionate about creating user-friendly, responsive, and visually appealing interfaces while mastering backend development to deliver robust, efficient solutions.",
    profileImage: "https://i.ibb.co/mrc8BGvS/IMG-1593.jpg",
    highlights: [
      {
        icon: "Calendar",
        title: "8 Months Learning Experience",
        description:
          "Gained practical experience in building full-stack web applications using React, Node.js, Express, and MongoDB.",
      },
      {
        icon: "Award",
        title: "3+ Completed Projects",
        description:
          "Delivered full-stack projects including portfolio sites, e-commerce platforms, and small team collaborations.",
      },
      {
        icon: "Users",
        title: "Collaborative & Adaptable",
        description:
          "Able to work effectively in teams, adapt to new technologies, and maintain a positive and solution-oriented attitude.",
      },
      {
        icon: "TrendingUp",
        title: "Continuous Growth",
        description:
          "Focused on improving performance and code quality through learning best practices and optimization techniques.",
      },
    ],
    socialLinks: [
      { platform: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/-fahim-ahmed/", },
      { platform: "GitHub", icon: "Github", url: "https://github.com/fahimahmed420" },
      { platform: "Twitter", icon: "Twitter", url: "https://x.com/Fahim_Ahmed_420" },
      { platform: "Facebook", icon: "Dribbble", url: "https://www.facebook.com/fahimahmed420/", },
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
        "People say nothing about me,cause most of them doesn't even know me.",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Fahim_Ahmed_Resume.pdf";
    link.download = "fahim-ahmed_Resume.pdf";
    link?.click();
  };

  const handleContactClick = () => navigate("/contact-connect-hub");
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
    <div className="min-h-screen bg-background">
      <main className="pt-16 max-w-7xl mx-auto px-5 lg:px-8 py-8">
        {/* HERO SECTION */}
        <section className="bg-gray-100 rounded-xl shadow-elevation-2 overflow-hidden mb-12 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="relative">
                {/* profile image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-elevation-2 ring-4 ring-background">
                  <Image
                    src={profileData.profileImage}
                    alt={`${profileData.name} - headshot`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* social links orbit */}
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  {profileData.socialLinks.map((link, i) => {
                    const IconComp = iconMap[link.icon];
                    const angle = (i / profileData.socialLinks.length) * 360 - 90; // position around circle
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
                        {/* counter-rotate the icon so it stays upright */}
                        <div className="p-2 bg-white rounded-full shadow-md hover:bg-accent/10 transition animate-counter-spin">
                          <IconComp size={18} className="text-accent" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                  {profileData.name}
                </h1>
                <p className="font-body text-lg text-secondary font-medium">
                  {profileData.currentTitle}
                </p>
                <p className="font-caption text-text-secondary max-w-md">
                  {profileData.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button
                  variant="default"
                  iconName="Download"
                  iconPosition="left"
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  iconName="Mail"
                  iconPosition="left"
                  onClick={handleContactClick}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* highlights */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-primary mb-6">
                Professional Highlights
              </h2>
              <div className="grid gap-4">
                {profileData.highlights.map((h, i) => {
                  const IconComp = iconMap[h.icon];
                  return (
                    <div
                      key={i}
                      className="flex items-start space-x-4 p-4 bg-muted rounded-lg"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <IconComp size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-primary text-sm">
                          {h.title}
                        </h3>
                        <p className="font-caption text-text-secondary text-sm">
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
        <section className="bg-gray-100 rounded-xl shadow-elevation-1 p-6 mb-12">
          <h2 className="font-heading text-xl font-semibold text-primary mb-6">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, i) => {
              const IconComp = iconMap[stat.icon];
              return (
                <div
                  key={i}
                  className="text-center space-y-3 p-4 rounded-lg bg-muted/50 transition transform hover:-translate-y-1 cursor-cell"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComp size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold">
                      {stat.value}
                    </div>
                    <div className="font-caption text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* NOTEBOOK TABS */}
        <section className="bg-gray-100 rounded-xl shadow-elevation-1 p-6 mb-12">
          <TabPreviewSection />
        </section>

        {/* RECENT WORK */}
        <section className="bg-gray-100 rounded-xl shadow-elevation-1 p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-semibold text-primary">
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
                className="group bg-muted/50 rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
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
                    <h3 className="font-body font-semibold text-primary text-sm">
                      {p.title}
                    </h3>
                    <ExternalIcon size={14} />
                  </div>
                  <p className="font-caption text-xs">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gray-100 rounded-xl shadow-elevation-1 p-6 mb-12">
          <h2 className="font-heading text-xl font-semibold text-primary mb-6">
            What People Say
          </h2>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-muted/50 rounded-lg p-6 space-y-4 mb-4"
            >
              <p className="font-caption">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <Image src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-body font-semibold">{t.name}</h4>
                  <p className="font-caption text-xs">
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
