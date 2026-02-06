import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Activities from './components/Activities/Activities'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import BackToTop from './components/BackToTop/BackToTop'
import './App.css'

const sectionIds = ['hero', 'experience', 'projects', 'activities', 'skills', 'certifications', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <>
      <Navbar
        sections={sectionIds}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="main">
        <AnimatePresence mode="wait">
          <Hero id="hero" onInView={() => setActiveSection('hero')} />
          <Experience id="experience" onInView={() => setActiveSection('experience')} />
          <Projects id="projects" onInView={() => setActiveSection('projects')} />
          <Activities id="activities" onInView={() => setActiveSection('activities')} />
          <Skills id="skills" onInView={() => setActiveSection('skills')} />
          <Certifications id="certifications" onInView={() => setActiveSection('certifications')} />
          <Contact id="contact" onInView={() => setActiveSection('contact')} />
        </AnimatePresence>
      </main>
      <BackToTop />
    </>
  )
}

export default App
