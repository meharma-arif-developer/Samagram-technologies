import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import BrandLogo from "./BrandLogo";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`nav-glass fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-2xl shadow-black/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" aria-label="Samagram Technologies Home">
          <BrandLogo />
        </a>

        {/* Desktop Pill Links */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-2 py-1.5 rounded-full text-sm text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 btn-copper text-white text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          Start a Project <FiArrowUpRight className="text-base" />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl p-2 rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#080D1B] border-t border-white/10 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-[#E09A56] font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-1.5 btn-copper text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
          >
            Start a Project <FiArrowUpRight />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
