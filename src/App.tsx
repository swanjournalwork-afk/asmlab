import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, MapPin, Phone, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Research from './pages/Research';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Research & Products', path: '/research' },
    { name: 'Team', path: '/team' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-none">
            GeoIntelligence Lab
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="text-gray-600" /> : <Menu className="text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 md:hidden p-6 flex flex-col gap-4 shadow-xl"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-100 px-6 md:px-12 py-10 mt-32 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-medium text-center md:text-left gap-6 md:gap-0">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 items-center justify-center md:justify-start">
        <span className="uppercase tracking-widest">© 2026 Aarhus University</span>
        <a 
          href="https://agro.au.dk/en/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="uppercase tracking-widest hover:text-slate-900 transition-colors"
        >
          Department of Agroecology
        </a>
        <a 
          href="https://land-craft.dk/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="uppercase tracking-widest hover:text-slate-900 transition-colors"
        >
          Land-CRAFT
        </a>
        <span className="uppercase tracking-widest">Ole Worms Allé 3, 8000 Aarhus, Denmark</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
