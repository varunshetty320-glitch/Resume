import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Hero.css'

export default function Hero({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <div className="hero">
        <motion.div
          className="hero-photo-wrap"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/photo.png"
            alt="Varun Shetty"
            className="hero-photo"
            onError={(e) => {
              e.target.style.display = 'none'
              const fallback = e.target.nextElementSibling
              if (fallback) fallback.classList.add('show')
            }}
          />
          <div className="hero-avatar-fallback" aria-hidden="true">
            <span>VS</span>
          </div>
        </motion.div>
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Varun Shetty
          </motion.h1>
          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer · MERN · React.js
          </motion.p>
          <motion.p
            className="hero-edu"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            B.E. Computer Science & Business Systems · 2025 · CGPA 7.83
          </motion.p>
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="mailto:varunshet907@gmail.com">varunshet907@gmail.com</a>
            <span>·</span>
            <a href="tel:9482021797">9482021797</a>
          </motion.div>
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <a
              href="https://www.linkedin.com/in/varun-shetty32/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/varun-320"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </motion.div>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="link-button">
              View Projects
            </a>
            <a href="#contact" className="link-button outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
