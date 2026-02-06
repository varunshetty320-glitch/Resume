import { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const labels = {
  hero: 'Home',
  experience: 'Experience',
  projects: 'Projects',
  activities: 'Activities',
  skills: 'Skills',
  certifications: 'Certifications',
  contact: 'Contact',
}

export default function Navbar({ sections, activeSection, onSectionChange }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={() => setOpen(false)}>
          VS
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {labels[id] || id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
