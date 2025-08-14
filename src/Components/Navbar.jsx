import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen, FaHome, FaUser, FaBriefcase, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/experience", label: "Experience", icon: <FaBriefcase /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaFolderOpen /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled
          ? "py-2 shadow-md bg-white/30 backdrop-blur-md"
          : "py-4 bg-[var(--color-background)]"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-heading text-lg font-bold">
          <FaBookOpen className="text-2xl" />
          Fahim Ahmed
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                    : "text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
