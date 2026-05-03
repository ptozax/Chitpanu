import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope, FaDiscord, FaGamepad, FaCode, FaTools, FaRobot,
  FaTimes, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa';
import {
  SiUnrealengine, SiCplusplus, SiReact, SiNodedotjs,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiLinux,
} from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const SKILLS = [
  {
    icon: <FaGamepad />,
    color: '#7c3aed',
    label: 'Game Development',
    tags: [
      { name: 'Unreal Engine', icon: <SiUnrealengine /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Blueprint' },
      { name: 'Multiplayer' },
    ],
  },
  {
    icon: <FaCode />,
    color: '#00d4ff',
    label: 'Web Development',
    tags: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    icon: <FaTools />,
    color: '#10b981',
    label: 'Tools & DevOps',
    tags: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'GitHub Actions' },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'SSH' },
      { name: 'Shell Script' },
    ],
  },
];

const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    title: 'EFT TaskTrack — Quest Map',
    desc: 'Interactive quest map for Escape from Tarkov. Visualize quest locations, objectives, and progression across all maps.',
    img: `${BASE}EFT_QUEST_MAP.png`,
    gallery: [`${BASE}EFT_QUEST_MAP.png`],
    tags: ['React', 'EFT', 'Interactive Map'],
  },
  {
    title: 'EFT TaskTrack — Quest Tree',
    desc: 'Visual quest dependency explorer. Trace unlock chains and plan optimal quest progression for every trader.',
    img: `${BASE}EFT_TREE.png`,
    gallery: [`${BASE}EFT_TREE.png`],
    tags: ['React', 'Data Viz', 'EFT'],
  },
  {
    title: 'EFT TaskTrack — Price Scanner',
    desc: 'Real-time flea market price scanner using screen capture. Instantly reads item values from the game window.',
    img: `${BASE}EFT_SCAN_RESULT.png`,
    gallery: [`${BASE}EFT_SCAN.png`, `${BASE}EFT_SCAN_RESULT.png`],
    tags: ['Screen Capture', 'OCR', 'EFT'],
  },
  {
    title: 'Artifact Checker',
    desc: 'Game artifact scanner with live inventory grid analysis, stat evaluation, and debug console output.',
    img: `${BASE}GS_SCAN.png`,
    gallery: [`${BASE}GS_SCAN.png`, `${BASE}GS_SCAN_DEBUG.png`],
    tags: ['Python', 'Scanner', 'Game Tools'],
  },
  {
    title: 'Discord Bot',
    desc: 'Multi-function Discord bot featuring automated news posting, music playback, and rich embed formatting.',
    img: `${BASE}BOT_DISCORD.png`,
    gallery: [`${BASE}BOT_DISCORD.png`],
    tags: ['Node.js', 'Discord.js', 'Bot'],
  },
  {
    title: 'Git CLI Manager',
    desc: 'Terminal UI tool for managing multiple Git repositories simultaneously — pull, status, and branch checks in one view.',
    img: `${BASE}CMD_SCRIPT.png`,
    gallery: [`${BASE}CMD_SCRIPT.png`],
    tags: ['CLI', 'TUI', 'Git', 'Automation'],
  },
];

const SERVICES = [
  {
    icon: <FaGamepad />,
    color: '#7c3aed',
    title: 'Game Development',
    desc: 'Unreal Engine games, multiplayer systems, gameplay mechanics, and C++ programming tailored to your vision.',
  },
  {
    icon: <FaCode />,
    color: '#00d4ff',
    title: 'Web Development',
    desc: 'Full-stack web applications with React, Node.js, and modern databases — fast, scalable, and maintainable.',
  },
  {
    icon: <FaRobot />,
    color: '#7289da',
    title: 'Discord Bots',
    desc: 'Custom bots with commands, moderation, music, news feeds, and third-party API integrations.',
  },
  {
    icon: <FaTools />,
    color: '#10b981',
    title: 'Automation & Tools',
    desc: 'CLI tools, TUI dashboards, game scanners, and automation scripts that streamline your workflow.',
  },
];

function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const gallery = project.gallery;
  const multi = gallery.length > 1;

  const prev = () => setImgIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setImgIdx((i) => (i + 1) % gallery.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      className="pf-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="pf-modal"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="pf-modal-header">
          <h3 className="pf-modal-title">{project.title}</h3>
          <button className="pf-modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        {/* Image */}
        <div className="pf-modal-img-wrap">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={gallery[imgIdx]}
              alt={`${project.title} screenshot ${imgIdx + 1}`}
              className="pf-modal-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {multi && (
            <>
              <button className="pf-modal-nav-btn pf-modal-nav-prev" onClick={prev} aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="pf-modal-nav-btn pf-modal-nav-next" onClick={next} aria-label="Next">
                <FaChevronRight />
              </button>
              <span className="pf-modal-counter">{imgIdx + 1} / {gallery.length}</span>
            </>
          )}
        </div>

        {/* Dots */}
        {multi && (
          <div className="pf-modal-dots">
            {gallery.map((_, i) => (
              <button
                key={i}
                className={`pf-modal-dot ${i === imgIdx ? 'active' : ''}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Body */}
        <div className="pf-modal-body">
          <p className="pf-modal-desc">{project.desc}</p>
          <div className="pf-project-tags">
            {project.tags.map((t, i) => (
              <span key={i} className="pf-project-tag">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main>

      {/* ── HERO ─────────────────────────────── */}
      <section className="pf-hero" id="home">
        <div className="pf-hero-grid" />
        <div className="pf-hero-glow" />
        <div className="container">
          <motion.div
            className="pf-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-badge">
              <span className="pf-badge-dot" />
              Available for Freelance
            </motion.div>

            <motion.h1 variants={fadeUp} className="pf-hero-name">
              Chitpanu
              <span className="pf-hero-name-accent"> (Poen)</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="pf-hero-role">
              Game Developer &amp; Full-Stack Web Engineer
            </motion.p>

            <motion.p variants={fadeUp} className="pf-hero-desc">
              Building immersive game experiences and scalable web applications.
              Passionate about clean code, creative problem-solving, and delivering work that exceeds expectations.
            </motion.p>

            <motion.div variants={fadeUp} className="pf-hero-actions">
              <a href="mailto:chitpanu.th@gmail.com" className="pf-btn-primary">
                <FaEnvelope /> Hire Me
              </a>
              <a href="#projects" className="pf-btn-outline">
                View Projects
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="pf-socials">
              <a href="mailto:chitpanu.th@gmail.com" className="pf-social-btn" title="Email">
                <FaEnvelope />
              </a>
              <a href="#" className="pf-social-btn" title="Discord">
                <FaDiscord />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="pf-scroll-hint">
          <span>scroll</span>
          <div className="pf-scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section className="pf-section" id="about">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-section-header">
              <span className="pf-section-label">About Me</span>
              <h2 className="pf-section-title">Crafting Digital Experiences</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="pf-about-card">
              <div className="pf-avatar">CP</div>
              <div className="pf-about-body">
                <p>
                  I'm a developer specialising in both game development and full-stack web engineering.
                  With expertise in Unreal Engine and modern web technologies, I bridge the gap between
                  immersive interactive experiences and robust web solutions.
                </p>
                <p>
                  Whether you need a feature-rich web app, a game tool, a Discord bot, or custom automation —
                  I deliver clean, maintainable code that ships on time and performs in production.
                </p>
                <div className="pf-stats">
                  <div className="pf-stat">
                    <span className="pf-stat-num">2+</span>
                    <span className="pf-stat-label">Years Experience</span>
                  </div>
                  <div className="pf-stat">
                    <span className="pf-stat-num">10+</span>
                    <span className="pf-stat-label">Projects Completed</span>
                  </div>
                  <div className="pf-stat">
                    <span className="pf-stat-num">100%</span>
                    <span className="pf-stat-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────── */}
      <section className="pf-section pf-section-alt" id="skills">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-section-header">
              <span className="pf-section-label">Technical Skills</span>
              <h2 className="pf-section-title">My Expertise</h2>
            </motion.div>

            <div className="pf-skills-grid">
              {SKILLS.map((group, i) => (
                <motion.div key={i} variants={fadeUp} className="pf-skill-card">
                  <div className="pf-skill-head" style={{ borderLeft: `3px solid ${group.color}`, paddingLeft: 12 }}>
                    <span className="pf-skill-icon" style={{ color: group.color }}>{group.icon}</span>
                    <h3>{group.label}</h3>
                  </div>
                  <div className="pf-skill-tags">
                    {group.tags.map((tag, j) => (
                      <span key={j} className="pf-skill-tag">
                        {tag.icon && tag.icon}
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────── */}
      <section className="pf-section" id="projects">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-section-header">
              <span className="pf-section-label">Portfolio</span>
              <h2 className="pf-section-title">Recent Projects</h2>
            </motion.div>

            <div className="pf-projects-grid">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="pf-project-card"
                  onClick={() => setActiveProject(p)}
                >
                  <div className="pf-project-img-wrap">
                    <img src={p.img} alt={p.title} className="pf-project-img" />
                    <div className="pf-project-overlay">
                      <span className="pf-project-overlay-text">
                        View Project
                        {p.gallery.length > 1 && ` · ${p.gallery.length} screenshots`}
                      </span>
                    </div>
                  </div>
                  <div className="pf-project-body">
                    <h4 className="pf-project-title">{p.title}</h4>
                    <p className="pf-project-desc">{p.desc}</p>
                    <div className="pf-project-tags">
                      {p.tags.map((t, j) => (
                        <span key={j} className="pf-project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────── */}
      <section className="pf-section pf-section-alt" id="services">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-section-header">
              <span className="pf-section-label">What I Offer</span>
              <h2 className="pf-section-title">Services</h2>
            </motion.div>

            <div className="pf-services-grid">
              {SERVICES.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="pf-service-card">
                  <div className="pf-service-icon" style={{ color: s.color }}>{s.icon}</div>
                  <h4 className="pf-service-title">{s.title}</h4>
                  <p className="pf-service-desc">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section className="pf-section pf-contact" id="contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="pf-section-header" style={{ marginBottom: 24 }}>
              <span className="pf-section-label">Get In Touch</span>
              <h2 className="pf-section-title">Let's Work Together</h2>
            </motion.div>

            <motion.p variants={fadeUp} className="pf-contact-desc">
              Have a project in mind? I'd love to hear about it.
              Drop me an email and let's build something great.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a href="mailto:chitpanu.th@gmail.com" className="pf-btn-primary pf-btn-lg">
                <FaEnvelope /> chitpanu.th@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="pf-footer">
        <div className="container">
          <p>© 2025 Chitpanu (Poen) · Game Dev &amp; Full-Stack Web Engineer</p>
        </div>
      </footer>

      {/* ── MODAL ────────────────────────────── */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
