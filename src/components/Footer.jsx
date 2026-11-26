import React, { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiArrowUp,
  FiSend,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import "./footer.css";

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [istTime, setIstTime] = useState("");

  // Live India Standard Time (IST) clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setIstTime(formatted);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Selected Work", href: "#projects" },
    { name: "How We Work", href: "#process" },
    { name: "Start a Project", href: "#contact" },
  ];

  const serviceLinks = [
    "Custom Software Engineering",
    "Cloud & DevOps",
    "Mobile Applications",
    "Data & AI Solutions",
    "UI/UX & Product Design",
    "Maintenance & Support",
  ];

  return (
    <footer className="footer-surface text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top Row: Brand + Newsletter Bar */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <BrandLogo />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Software that is complete by design. Building our own SaaS
              products and custom digital platforms across web, mobile, cloud,
              and AI.
            </p>
          </div>

          {/* Newsletter / Updates Box */}
          <div className="w-full lg:max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56] mb-2">
              Stay Updated
            </p>
            <p className="text-sm text-slate-400 mb-3">
              Product launches, engineering notes, and new SaaS releases.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-4 py-2.5 rounded-full">
                <FiCheckCircle /> Subscribed! Thanks for joining.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E09A56]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 btn-copper text-white text-sm font-semibold px-5 py-2.5 rounded-full shrink-0"
                >
                  Join <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Row: 4-Column Professional Navigation */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Social & Live Time */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              We respond within one business day with a clear, honest plan and
              next steps.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/samagramtechnologies"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-pill w-10 h-10 rounded-xl flex items-center justify-center text-slate-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/919670710231"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-pill w-10 h-10 rounded-xl flex items-center justify-center text-slate-200"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:contact@samagram.app"
                aria-label="Email"
                className="social-pill w-10 h-10 rounded-xl flex items-center justify-center text-slate-200"
              >
                <FiMail />
              </a>
              <a
                href="https://samagram.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="social-pill w-10 h-10 rounded-xl flex items-center justify-center text-slate-200"
              >
                <FiGlobe />
              </a>
            </div>

            {/* Live IST Clock */}
            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
              <FiClock className="text-[#E09A56]" />
              <span>Lucknow, IST · {istTime}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#E09A56] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#E09A56] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FiMail className="text-[#E09A56] mt-1 shrink-0" />
                <a
                  href="mailto:contact@samagram.app"
                  className="hover:text-white transition"
                >
                  contact@samagram.app
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#E09A56] mt-1 shrink-0" />
                <a
                  href="tel:+919670710231"
                  className="hover:text-white transition"
                >
                  +91 96707 10231
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#E09A56] mt-1 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start gap-3">
                <FiGlobe className="text-[#E09A56] mt-1 shrink-0" />
                <a
                  href="https://samagram.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  samagram.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Samagram Technologies Private Limited.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#E09A56] font-semibold transition"
            >
              Back to Top <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
