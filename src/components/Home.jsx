import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiCloud,
  FiSmartphone,
  FiCpu,
  FiLayout,
  FiShield,
  FiCheckCircle,
  FiX,
  FiSend,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";
import "./home.css";

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Software Engineering",
    message: "",
  });

  // 1. Company Stats
  const stats = [
    { value: "4+", label: "SaaS Products Live" },
    { value: "80+", label: "Projects Shipped" },
    { value: "12+", label: "Years Building" },
    { value: "20", label: "Featured Solutions" },
  ];

  // 2. Why Samagram Pillars
  const pillars = [
    {
      num: "01",
      title: "Product-led",
      desc: "We invest in and run our own SaaS platforms, proving our engineering on our own products before recommending anything to you.",
    },
    {
      num: "02",
      title: "Service-strong",
      desc: "We partner with your team from first prototype to production at scale across web, mobile, cloud, and AI.",
    },
    {
      num: "03",
      title: "Senior by default",
      desc: "Straight answers and sound engineering. Clean, tested, maintainable code we would be happy to inherit.",
    },
    {
      num: "04",
      title: "Complete by design",
      desc: "Strategy, design, engineering, and support from one dependable partner so nothing falls between the cracks.",
    },
  ];

  // 3. Services
  const services = [
    {
      icon: <FiCode />,
      title: "Custom Software Engineering",
      desc: "End-to-end web and platform development built to scale. Clean, maintainable, complete by design.",
    },
    {
      icon: <FiCloud />,
      title: "Cloud & DevOps",
      desc: "Reliable cloud architecture, CI/CD pipelines, and infrastructure automation on AWS, Azure, and GCP.",
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Applications",
      desc: "Native and cross-platform apps with delightful UX and robust offline-first foundations.",
    },
    {
      icon: <FiCpu />,
      title: "Data & AI Solutions",
      desc: "Data pipelines, dashboards, and pragmatic AI integrations that turn information into decisions.",
    },
    {
      icon: <FiLayout />,
      title: "UI/UX & Product Design",
      desc: "Research-led interface design and design systems that make complex products feel effortless.",
    },
    {
      icon: <FiShield />,
      title: "Maintenance & Support",
      desc: "Proactive monitoring, security hardening, and ongoing support so your systems stay healthy.",
    },
  ];

  // 4. Featured Projects with Real High-Resolution Images
  const projects = [
    {
      initials: "PI",
      category: "Web Platforms",
      tag: "Fintech",
      platform: "Web Platform",
      name: "Phoenix Investment Bank",
      url: "uat.thephoenixbank.com",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      desc: "Digital banking and investment platform built around QR-code payments for fast, secure money transfers.",
      capabilities: [
        "QR-code based payments",
        "Account management & digital wallets",
        "Investment tracking",
        "Compliance reporting & audit trail",
      ],
      link: "https://uat.thephoenixbank.com",
    },
    {
      initials: "L",
      category: "AI & Apps",
      tag: "Legal Tech · AI",
      platform: "Web + AI",
      name: "LexMate",
      url: "www.lexmate.net",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
      desc: "AI-powered legal document assistant using NLP to automate contract drafting and review for law firms.",
      capabilities: [
        "Automated contract drafting",
        "AI document review",
        "Clause extraction",
        "Compliance checking",
      ],
      link: "https://www.lexmate.net",
    },
    {
      initials: "SG",
      category: "Web Platforms",
      tag: "Logistics",
      platform: "Web Platform",
      name: "SF Global Logistics",
      url: "www.sfgloballogistics.com",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      desc: "Comprehensive international shipping and freight forwarding platform built for multi-currency global trade.",
      capabilities: [
        "Real-time shipment visibility",
        "Multi-modal transport management",
        "Customs documentation workflows",
        "Automated client invoicing",
      ],
      link: "https://www.sfgloballogistics.com",
    },
    {
      initials: "N",
      category: "AI & Apps",
      tag: "Health · AI",
      platform: "Android App",
      name: "NutriVault",
      url: "Google Play · Android",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
      desc: "Smart nutrition app combining a rich food database with AI-powered camera meal scanning and macro tracking.",
      capabilities: [
        "AI camera-based food recognition",
        "Personalised meal planning",
        "Real-time macro tracking",
        "Health goals & recommendations",
      ],
      link: "https://samagram.app",
    },
    {
      initials: "V",
      category: "AI & Apps",
      tag: "AI · Productivity",
      platform: "Android App",
      name: "VoxaAI",
      url: "Google Play · Android",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
      desc: "Advanced speech-to-text app with speaker diarization, AI summaries, and interactive transcript chat.",
      capabilities: [
        "Speaker diarization",
        "Live recording & audio upload",
        "AI-powered summaries",
        "Chat with your transcripts",
      ],
      link: "https://samagram.app",
    },
    {
      initials: "SS",
      category: "Web Platforms",
      tag: "Energy · Solar",
      platform: "Web Platform",
      name: "Solarize Solar Solutions",
      url: "solarizesolarsolutions.com",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
      desc: "Clean-energy digital platform helping homes and industries explore solar products and track installations.",
      capabilities: [
        "Product showcase",
        "Online enquiries & lead management",
        "Installation project tracking",
        "Customer solar education",
      ],
      link: "https://solarizesolarsolutions.com",
    },
    {
      initials: "IT",
      category: "Web Platforms",
      tag: "Government",
      platform: "Web Portal",
      name: "Ingonyama Trust",
      url: "ingonyamatrust.org.za",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      desc: "Digital land administration portal modernising communal land governance with transparency and accountability.",
      capabilities: [
        "Lease management",
        "Community stakeholder records",
        "Development project tracking",
        "Document management",
      ],
      link: "https://ingonyamatrust.org.za",
    },
    {
      initials: "A",
      category: "Creative & Media",
      tag: "Brand Web Design",
      platform: "Web Experience",
      name: "Samagram Animate",
      url: "animate.samagram.app",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      desc: "Motion-first brand web experience featuring scroll-led storytelling, interactive line art, and live IST clock.",
      capabilities: [
        "Scroll-driven storytelling",
        "Interactive line-art hero",
        "Light & dark brand variants",
        "Responsive navigation & live IST clock",
      ],
      link: "https://animate.samagram.app",
    },
    {
      initials: "VF",
      category: "Creative & Media",
      tag: "Media · Film",
      platform: "Web Platform",
      name: "Vandana Film Production",
      url: "flimproduction.samagram.app",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
      desc: "Cinematic website for a full-service film studio covering feature films, web series, ad films, and documentaries.",
      capabilities: [
        "Films showcase & filmography",
        "Services pages for every format",
        "Animated preloader & scroll effects",
        "Project enquiry & contact flow",
      ],
      link: "https://flimproduction.samagram.app",
    },
  ];

  const filterTabs = ["All", "Web Platforms", "AI & Apps", "Creative & Media"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // 5. Industries
  const industries = [
    "Fintech & Banking",
    "Healthcare & Pharmacy",
    "Logistics & Supply Chain",
    "Education & Training",
    "Government & Public Sector",
    "Legal Tech",
    "Energy & Solar",
    "Retail & eCommerce",
    "AI & Automation",
    "Media, Music & Film",
    "Security Services",
    "NGO & Community",
    "Fleet & GPS Tracking",
    "Productivity Tools",
  ];

  // 6. How We Work
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We map the problem, the users, and the constraints before writing a single line of code.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Interfaces and architecture are designed together so the result is usable and durable.",
    },
    {
      num: "03",
      title: "Engineer",
      desc: "Clean, tested, maintainable software shipped in tight, transparent iterations you can see.",
    },
    {
      num: "04",
      title: "Scale",
      desc: "Monitoring, security hardening, and ongoing support so it stays complete in production.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({
      name: "",
      email: "",
      service: "Custom Software Engineering",
      message: "",
    });
  };

  return (
    <main id="home" className="home-page pt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-ambient px-6 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#E09A56]">
              <span className="w-2 h-2 rounded-full bg-[#E09A56] animate-pulse"></span>
              Samagram Technologies · Portfolio 2026
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
              Software that is{" "}
              <span className="text-gradient">complete by design.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
              Our own SaaS products and custom software services across web,
              mobile, cloud, and AI — built for ambitious teams worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 btn-copper text-white font-semibold px-7 py-3.5 rounded-full"
              >
                Explore Our Work <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white font-semibold px-7 py-3.5 rounded-full transition"
              >
                Start a Conversation
              </a>
            </div>

            {/* Compact Stats Row */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Visual Showcase with Real Photography */}
          <div className="lg:col-span-6 float-animate">
            <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
              {/* macOS Window Bar */}
              <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <FiGlobe className="text-[#E09A56]" /> samagram.app
                </span>
              </div>

              {/* Real Engineering / Tech Studio Photo */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Samagram Software Engineering Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />

                {/* Floating Glass Info Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E09A56]">
                      Product Studio + Engineering Partner
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Web · Mobile · Cloud · AI
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                    ● Accepting 2026 Projects
                  </span>
                </div>
              </div>

              {/* Bottom Capability Strip */}
              <div className="px-6 py-4 bg-[#080D1B]/90 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2 text-slate-200 font-medium">
                  <FiLayers className="text-[#E09A56]" /> End-to-End Delivery
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SaaS", "React & Mobile", "AWS / GCP", "AI Agents"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION WITH REAL STUDIO IMAGE ================= */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Real Workspace Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                alt="Clean software architecture code"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-widest text-[#E09A56] font-semibold">
                  Sanskrit Origin
                </p>
                <p className="text-sm text-slate-200 mt-1">
                  <strong className="text-white">“Samagram”</strong> means
                  whole, all, complete — software engineered end-to-end.
                </p>
              </div>
            </div>
          </div>

          {/* Right About Text + 4 Pillars */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
              About Us · Why Samagram
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              The name means whole. So does our work.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
              We build and run our own SaaS products, which keeps us honest: we
              live with the same engineering decisions we recommend to clients.
              Then we bring that product discipline to custom software for teams
              worldwide.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => (
                <div key={item.num} className="glass-card rounded-2xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C67D3B]/15 text-[#E09A56] text-xs font-bold">
                    {item.num}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
            What We Do For Clients
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            End-to-end software services
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            From product strategy and UI/UX to full-stack engineering, AI, and
            cloud infrastructure.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="glass-card rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C67D3B]/25 to-[#E09A56]/10 border border-[#E09A56]/30 text-[#E09A56] flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SELECTED PROJECTS WITH REAL IMAGES + MODAL ================= */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Real problems. Real solutions.
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeFilter === tab
                    ? "bg-[#C67D3B] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Browser Dots Bar */}
                <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <span className="text-[11px] text-slate-400 truncate max-w-[175px]">
                    {project.url}
                  </span>
                </div>

                {/* Real Project Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-img w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#060913]/85 backdrop-blur-md border border-[#E09A56]/40 flex items-center justify-center text-sm font-extrabold text-[#E09A56]">
                      {project.initials}
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#060913]/80 text-slate-200 border border-white/15 backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E09A56] transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400">{project.platform}</span>
                <span className="inline-flex items-center gap-1 text-[#E09A56]">
                  View Details <FiArrowUpRight className="text-sm" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES MARQUEE ================= */}
      <section className="py-16 overflow-hidden border-y border-white/10 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
            Industries We Build For
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">
            Deep context across 14+ sectors
          </h2>
        </div>

        <div className="marquee-track gap-4">
          {[...industries, ...industries].map((industry, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#0E1528] border border-white/10 text-slate-200 whitespace-nowrap"
            >
              <FiCheckCircle className="text-[#E09A56]" />
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK (PROCESS) ================= */}
      <section id="process" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
            How We Work
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            A calm, deliberate process
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            We respond within one business day with a clear, honest plan and
            next steps.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="glass-card rounded-2xl p-6">
              <div className="text-3xl font-extrabold text-gradient">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT / PROJECT ENQUIRY SECTION ================= */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
              Start a Project
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Build with us,{" "}
              <span className="text-gradient">or build on us.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Tell us what you are building. Hire our team for your next
              product, or start with one of ours. Either way, complete by
              design.
            </p>

            {/* Real Office / Collaboration Visual */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-44">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Modern software workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            {formSent ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-8 text-center">
                <FiCheckCircle className="text-4xl text-emerald-400 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Enquiry Received!
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you for reaching out to Samagram Technologies. We will
                  reply within one business day.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-6 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl bg-[#060913] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E09A56]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-[#060913] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E09A56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full rounded-xl bg-[#060913] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E09A56]"
                  >
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your timeline, goals, or product idea..."
                    className="w-full rounded-xl bg-[#060913] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E09A56]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-copper text-white font-semibold px-8 py-3.5 rounded-full text-sm"
                >
                  Send Project Brief <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= PROJECT DETAIL MODAL ================= */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B1120] border border-white/15 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-56">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-black/30" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C67D3B] transition"
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E09A56]">
                {selectedProject.tag} · {selectedProject.platform}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {selectedProject.name}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {selectedProject.desc}
              </p>

              <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                Key Capabilities
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedProject.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <FiCheckCircle className="text-[#E09A56] shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 btn-copper text-white text-sm font-semibold px-6 py-3 rounded-full"
                >
                  Visit Live Project <FiArrowUpRight />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
