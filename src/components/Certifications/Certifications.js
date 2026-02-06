import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Certifications.css'

const certifications = [
  'Frontend for Java Full Stack Development – Board Infinity (Coursera)',
  'Foundations of Cybersecurity – Google (Coursera)',
  'Ethical Hacking Essentials (EHE) – EC Council (Coursera)',
  'Connect and Protect: Networks and Network Security – Coursera',
  'Tools of the Trade: Linux and SQL – Google (Coursera)',
  'Assets, Threats, and Vulnerabilities – Google (Coursera)',
  'MERN Stack Internship – Dregali Pvt. Ltd. (Full-stack e-commerce: MongoDB, Express.js, React.js, Node.js)',
]

export default function Certifications({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Certifications</h2>
      <motion.ul
        className="cert-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {certifications.map((cert, i) => (
          <motion.li
            key={i}
            className="cert-item card"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <span className="cert-icon">✓</span>
            <span>{cert}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
