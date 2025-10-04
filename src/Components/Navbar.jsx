import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen, FaHome, FaUser, FaBriefcase, FaTools, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TargetCursor from "./ui/TargetCursor";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${isScrolled
        ? "py-2 shadow-md bg-white/30 backdrop-blur-md"
        : "py-4 bg-[var(--color-background)]"
        }`}
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-heading text-lg font-bold cursor-target">
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
                `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all cursor-target ${isActive
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-gray-700 hover:text-[var(--color-primary)] transition cursor-target"
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
            className="lg:hidden overflow-hidden bg-white shadow-md "
          >
            <div className="flex flex-col px-5 py-3 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${isActive
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
