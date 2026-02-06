import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Contact.css'

export default function Contact({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Get in Touch</h2>
      <motion.div
        className="contact-card card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="contact-intro">
          I'm open to opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:varunshet907@gmail.com" className="contact-link">
            <span className="contact-link-icon">✉</span>
            varunshet907@gmail.com
          </a>
          <a href="tel:9482021797" className="contact-link">
            <span className="contact-link-icon">📞</span>
            9482021797
          </a>
          <a
            href="https://mern-stack-projects.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">🔗</span>
            Portfolio – MERN E-commerce
          </a>
          <a
            href="https://www.linkedin.com/in/varun-shetty32/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">in</span>
            LinkedIn – varun-shetty32
          </a>
          <a
            href="https://github.com/varun-320"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">GH</span>
            GitHub – varun-320
          </a>
        </div>
        <p className="contact-dob">DOB: 21-12-2003</p>
      </motion.div>
    </Section>
  )
}
