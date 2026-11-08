
import { useState } from 'react';
import { Menu, X, Scissors, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">

        <a href="#home" className="navbar-logo"
          onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">
            <Scissors size={27} />
          </span>

          <span className="logo-text">
            <strong>HAIRCUT</strong>
            <small>SOLUTION</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#appointment"
            className="mobile-book-btn"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment <ArrowUpRight size={17} />
          </a>
        </nav>

        <a href="#appointment" className="navbar-book-btn">
          Book Appointment
          <ArrowUpRight size={18} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </motion.header>
  );
}

export default Navbar;
