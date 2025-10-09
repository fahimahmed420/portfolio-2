import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaHome,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaPalette,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TargetCursor from "./ui/TargetCursor";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const themeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Apply theme to <html>
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaFolderOpen /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const themes = [
    { name: "light", color: "#f8fafc" },
    { name: "dark", color: "#1e293b" },
    { name: "purple", color: "#6d28d9" },
    { name: "green", color: "#16a34a" },
    { name: "orange", color: "#f97316" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 shadow 
        ${isScrolled
          ? "py-2 shadow-md bg-[var(--bg-light)]/80 backdrop-blur-md"
          : "py-4 bg-[var(--bg-light)]"
        }`}
    >
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[var(--primary-text)] font-heading text-lg font-bold cursor-target">
          <FaBookOpen className="text-2xl" />
          Fahim Ahmed
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all cursor-target
                 ${isActive
                    ? "bg-[var(--bg-primary)] text-[var(--primary-text)]"
                    : "text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-[var(--bg-primary)]"
                 }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          {/* 🎨 Theme Selector */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setIsThemeOpen((prev) => !prev)}
              className="p-2 rounded-md hover:bg-[var(--bg-light)] transition cursor-target"
            >
              <FaPalette className="text-xl text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition" />
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 flex gap-2 bg-[var(--bg-primary)] shadow-md rounded-lg p-2 z-50">
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => {
                      setTheme(t.name);
                      setIsThemeOpen(false);
                    }}
                    className="w-6 h-6 rounded-full border-2 border-gray-300 hover:scale-110 transition cursor-target"
                    style={{ backgroundColor: t.color }}
                    title={t.name}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition cursor-target"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[var(--bg-primary)] shadow-md"
          >
            <div className="flex flex-col px-5 py-3 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all
                     ${isActive
                        ? "bg-[var(--bg-light)] text-[var(--primary-text)]"
                        : "text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-[var(--bg-light)]"
                     }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}

              {/* 🎨 Theme Picker on Mobile */}
              <div className="flex items-center gap-2 mt-3" ref={themeRef}>
                <button
                  onClick={() => setIsThemeOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--bg-light)] cursor-target hover:opacity-90 transition"
                >
                  <FaPalette className="text-lg text-[var(--secondary-text)]" /> Theme
                </button>
                {isThemeOpen && (
                  <div className="flex gap-2 bg-[var(--bg-primary)] shadow-md rounded-lg p-2">
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => {
                          setTheme(t.name);
                          setIsThemeOpen(false);
                        }}
                        className="w-6 h-6 cursor-target rounded-full border-2 border-gray-300 hover:scale-110 transition"
                        style={{ backgroundColor: t.color }}
                        title={t.name}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
