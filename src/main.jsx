import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'Live.Work.Connect',
    type: 'Co-living',
    year: '2026',
    location: 'Urban co-living concept',
    palette: ['#9d8068', '#d8cec2', '#2f4a3c'],
    image: 'linear-gradient(0deg, rgba(40, 28, 22, .34), rgba(40, 28, 22, .12)), url("/images/projects/live-work-connect/facade.jpeg")',
    summary: 'A contemporary co-living proposal that balances individuality and community through shared social areas, private retreat zones, and adaptable planning.',
    details: 'The project integrates living, working, and social functions within a cohesive framework, using transitional spaces and interactive zones to support both engagement and solitude.',
    gallery: [
      '/images/projects/live-work-connect/facade.jpeg',
      '/images/projects/live-work-connect/dining.jpeg',
      '/images/projects/live-work-connect/lounge.jpeg',
      '/images/projects/live-work-connect/community.jpeg',
      '/images/projects/live-work-connect/elevation.jpeg',
      '/images/projects/live-work-connect/kitchen.jpeg',
      '/images/projects/live-work-connect/room.jpeg',
      '/images/projects/live-work-connect/sleep-work.jpeg',
      '/images/projects/live-work-connect/plan-12.png',
      '/images/projects/live-work-connect/plan-13.png',
      '/images/projects/live-work-connect/plan-14.png',
      '/images/projects/live-work-connect/concept-board.png',
    ],
  },
  {
    title: 'Studio4',
    type: 'Fitness',
    year: '2025',
    location: 'Dwarka, Delhi',
    palette: ['#f0652f', '#2a2b29', '#c7c1b5'],
    image: 'linear-gradient(0deg, rgba(18, 18, 16, .28), rgba(18, 18, 16, .08)), url("/images/projects/studio4/hero.jpeg")',
    summary: 'A modern gym designed from floor planning and zoning through RCP detailing and 3D visualization, with a functional yet energetic spatial language.',
    details: 'Matte black finishes are sharpened with bold orange accents to express strength, energy, and movement while keeping the space industrial and contemporary.',
    gallery: [
      '/images/projects/studio4/hero.jpeg',
      '/images/projects/studio4/studio.jpeg',
      '/images/projects/studio4/equipment.jpeg',
      '/images/projects/studio4/reception.jpeg',
      '/images/projects/studio4/training.jpeg',
      '/images/projects/studio4/floor-plan.png',
      '/images/projects/studio4/palette.png',
    ],
  },
  {
    title: 'DreamNest',
    type: 'Kids Bedroom',
    year: '2025',
    location: 'Dwarka',
    palette: ['#e4aaa6', '#e8d8c2', '#879472'],
    image: 'linear-gradient(0deg, rgba(68, 44, 34, .2), rgba(68, 44, 34, .04)), url("/images/projects/dream-nest/hero.jpeg")',
    summary: 'Detailed 3D renders for a kids bedroom shaped with soft pastels, warm wood tones, playful curves, and a calm child-friendly atmosphere.',
    details: 'The loft-style bed, slide, decorative lighting, and study zones bring comfort, function, and imagination together in a modern kids space.',
    gallery: [
      '/images/projects/dream-nest/hero.jpeg',
      '/images/projects/dream-nest/study.jpeg',
      '/images/projects/dream-nest/loft.jpeg',
      '/images/projects/dream-nest/bed.jpeg',
      '/images/projects/dream-nest/palette.jpg',
    ],
  },
  {
    title: 'Timeless Touch',
    type: 'Bedroom Renovation',
    year: '2025',
    location: 'Janakpuri, New Delhi',
    palette: ['#1f1b18', '#8b735d', '#d3bf9d'],
    image: 'linear-gradient(0deg, rgba(13, 11, 10, .2), rgba(13, 11, 10, .04)), url("/images/projects/timeless-touch/hero.jpg")',
    summary: 'A serene bedroom renovation with warm wood tones, subtle gold accents, ambient lighting, and a sophisticated neutral palette.',
    details: 'Custom vertical wood paneling, marble, premium textiles, and bespoke furniture transform the room into a polished retreat with contemporary comfort.',
    gallery: [
      '/images/projects/timeless-touch/hero.jpg',
      '/images/projects/timeless-touch/media-wall.jpg',
      '/images/projects/timeless-touch/detail.jpg',
    ],
  },
  {
    title: 'Raadhi',
    type: 'Boutique Retail',
    year: '2026',
    location: 'Janakpuri, New Delhi',
    palette: ['#4a2029', '#e5cdbb', '#7b5c46'],
    image: 'linear-gradient(0deg, rgba(48, 18, 24, .18), rgba(48, 18, 24, .04)), url("/images/projects/raadhi/hero.jpeg")',
    summary: 'A boutique interior that blends traditional handwork craftsmanship with contemporary elegance and a brand-led color story.',
    details: 'Hand-painted details, intimate display planning, and rich material textures create an immersive retail experience rooted in Indian craft and modern sophistication.',
    gallery: [
      '/images/projects/raadhi/hero.jpeg',
      '/images/projects/raadhi/display.jpeg',
      '/images/projects/raadhi/identity.png',
      '/images/projects/raadhi/img-7675.jpg',
      '/images/projects/raadhi/img-7677.jpg',
      '/images/projects/raadhi/img-7683.jpg',
      '/images/projects/raadhi/img-7695.jpg',
      '/images/projects/raadhi/img-7697.jpg',
      '/images/projects/raadhi/img-7699.jpg',
    ],
  },
];

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <Router>
      <div className="site-shell">
        <div className="cursor-glow" style={{ '--x': `${cursor.x}px`, '--y': `${cursor.y}px` }} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrap keyName="home"><Home /></PageWrap>} />
              <Route path="/about" element={<PageWrap keyName="home"><Home /></PageWrap>} />
              <Route path="/projects" element={<PageWrap keyName="projects"><Projects /></PageWrap>} />
              <Route path="/contact" element={<PageWrap keyName="contact"><Contact /></PageWrap>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
        <span>YG</span>
        <strong>Yashvi Girdhar</strong>
      </NavLink>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function PageWrap({ children, keyName }) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [viewerProject, setViewerProject] = useState(null);

  return (
    <>
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow"><Sparkles size={16} /> Interior Design Graduate</p>
          <h1>Yashvi Girdhar</h1>
          <p className="hero-copy">
            Spaces composed with color confidence, tactile detail, and a quietly functional sense of everyday living.
          </p>
          <div className="hero-actions">
            <NavLink className="button primary" to="/projects">
              View Projects <ArrowUpRight size={18} />
            </NavLink>
            <NavLink className="button ghost" to="/contact">
              Contact Me <ChevronRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
      <About isHome />
      <HomeProjects onOpenProject={setViewerProject} />
      <ProjectPhotoViewer project={viewerProject} onClose={() => setViewerProject(null)} />
    </>
  );
}

function ProjectPhotoViewer({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project?.title]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') setImageIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
      if (event.key === 'ArrowRight') setImageIndex((current) => (current + 1) % project.gallery.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project]);

  if (!project) return null;

  const activeImage = project.gallery[imageIndex] ?? project.gallery[0];
  const changeImage = (direction) => {
    setImageIndex((current) => (current + direction + project.gallery.length) % project.gallery.length);
  };

  return (
    <motion.div
      className="photo-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="photo-viewer-panel"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="viewer-close" type="button" onClick={onClose} aria-label="Close photo viewer">
          <X size={22} />
        </button>
        <div className="viewer-image-wrap">
          <img src={activeImage} alt={`${project.title} photo ${imageIndex + 1}`} />
          {project.gallery.length > 1 && (
            <>
              <button className="viewer-arrow previous" type="button" onClick={() => changeImage(-1)} aria-label="Previous photo">
                <ChevronLeft size={24} />
              </button>
              <button className="viewer-arrow next" type="button" onClick={() => changeImage(1)} aria-label="Next photo">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className="viewer-footer">
          <div>
            <span>{project.type} / {project.location}</span>
            <h2>{project.title}</h2>
          </div>
          <div className="viewer-dots">
            {project.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === imageIndex ? 'active' : ''}
                onClick={() => setImageIndex(index)}
                aria-label={`Open ${project.title} photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function About({ isHome = false }) {
  return (
    <section className={isHome ? 'about-home about-layout' : 'page-section about-layout'}>
      <div className="page-heading">
        <span className="section-kicker">About Me</span>
        <h1>Transforming spaces into functional and aesthetically pleasing environments.</h1>
      </div>
      <div className="about-copy">
        <p>
          My name is Yashvi Girdhar, and I am a highly skilled and creative interior designer with a passion for transforming spaces into functional and aesthetically pleasing environments.
        </p>
        <p>
          My design philosophy centers around creating spaces that are not only aesthetically pleasing but also functional and reflective of my clients' personalities and lifestyles. I believe that good design should enhance the way we live and work.
        </p>
        <p>
          Having worked on a diverse range of projects, from luxury residential homes to commercial spaces, I understand the unique challenges and opportunities each type of space presents.
        </p>
      </div>
    </section>
  );
}

function HomeProjects({ onOpenProject }) {
  return (
    <section className="home-projects">
      <div className="home-projects-heading">
        <span className="section-kicker">Projects</span>
        <h2>Selected interiors and spatial stories.</h2>
      </div>
      <div className="home-project-list">
        {projects.map((project) => (
          <motion.button
            className="home-project-card"
            key={project.title}
            type="button"
            onClick={() => onOpenProject(project)}
            style={{ backgroundImage: project.image }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            aria-label={`Open ${project.title} photos`}
          >
            <span>{project.type} / {project.location}</span>
            <h3>{project.title}</h3>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(projects[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [viewerProject, setViewerProject] = useState(null);
  const activeProject = useMemo(() => active, [active]);
  const activeImage = activeProject.gallery[imageIndex] ?? activeProject.gallery[0];

  useEffect(() => {
    setImageIndex(0);
  }, [activeProject.title]);

  const changeImage = (direction) => {
    setImageIndex((current) => {
      const total = activeProject.gallery.length;
      return (current + direction + total) % total;
    });
  };

  const openActiveProject = () => setViewerProject(activeProject);

  return (
    <section className="page-section">
      <div className="page-heading project-heading">
        <div>
          <span className="section-kicker">Projects</span>
          <h1>Selected interior concepts and spatial studies.</h1>
        </div>
        <BriefcaseBusiness size={42} />
      </div>
      <div className="project-showcase">
        <motion.div
          className="featured-project"
          key={`${activeProject.title}-${activeImage}`}
          initial={{ opacity: 0.5, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          role="button"
          tabIndex={0}
          onClick={openActiveProject}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') openActiveProject();
          }}
          style={{ backgroundImage: `linear-gradient(0deg, rgba(30, 20, 16, .44), rgba(30, 20, 16, .08)), url("${activeImage}")` }}
        >
          {activeProject.gallery.length > 1 && (
            <div className="carousel-controls" aria-label={`${activeProject.title} image carousel`} onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => changeImage(-1)} aria-label="Previous project image">
                <ChevronLeft size={22} />
              </button>
              <div className="carousel-dots">
                {activeProject.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={index === imageIndex ? 'active' : ''}
                    onClick={() => setImageIndex(index)}
                    aria-label={`Show project image ${index + 1}`}
                  />
                ))}
              </div>
              <button type="button" onClick={() => changeImage(1)} aria-label="Next project image">
                <ChevronRight size={22} />
              </button>
            </div>
          )}
          <div className="project-copy">
            <span>{activeProject.type} / {activeProject.year} / {activeProject.location}</span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.summary}</p>
            <p>{activeProject.details}</p>
            <small>Click image to open photos</small>
          </div>
        </motion.div>
        <div className="project-list">
          {projects.map((project) => (
            <button
              key={project.title}
              className={project.title === active.title ? 'project-tab active' : 'project-tab'}
              type="button"
              onClick={() => setActive(project)}
            >
              <span>{project.title}</span>
            </button>
          ))}
        </div>
      </div>
      <ProjectPhotoViewer project={viewerProject} onClose={() => setViewerProject(null)} />
    </section>
  );
}

function Contact() {
  const email = 'yashvigirdhar06@gmail.com';
  const phone = '9810922120';
  const sendInquiry = () => {
    window.location.href = `mailto:${email}?subject=Interior%20Design%20Inquiry`;
  };

  return (
    <section className="page-section contact-layout">
      <div className="page-heading">
        <span className="section-kicker">Contact Me</span>
        <h1>Let’s shape a thoughtful interior story together.</h1>
      </div>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Project Type
          <select defaultValue="Residential concept">
            <option>Residential concept</option>
            <option>Retail styling</option>
            <option>Material board</option>
            <option>Collaboration</option>
          </select>
        </label>
        <label>
          Message
          <textarea placeholder="Tell Yashvi what you are imagining..." rows="5" />
        </label>
        <button className="button primary" type="button" onClick={sendInquiry}>
          Send Inquiry <Mail size={18} />
        </button>
      </form>
      <aside className="contact-card">
        <p><Mail size={18} /> {email}</p>
        <p><Phone size={18} /> +91 {phone}</p>
        <p><MapPin size={18} /> India</p>
      </aside>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
