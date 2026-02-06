import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Certifications.css'

// Add or update the `url` for each certification.
// When a user clicks the certification text, it will open this link.
const certifications = [
  {
    label: 'Frontend for Java Full Stack Development – Board Infinity (Coursera)',
    url: 'https://your-link-for-frontend-java-fullstack.com',
  },
  {
    label: 'Foundations of Cybersecurity – Google (Coursera)',
    url: 'https://your-link-for-foundations-of-cybersecurity.com',
  },
  {
    label: 'Ethical Hacking Essentials (EHE) – EC Council (Coursera)',
    url: 'https://your-link-for-ethical-hacking-essentials.com',
  },
  {
    label: 'Connect and Protect: Networks and Network Security – Coursera',
    url: 'https://your-link-for-connect-and-protect.com',
  },
  {
    label: 'Tools of the Trade: Linux and SQL – Google (Coursera)',
    url: 'https://your-link-for-linux-and-sql.com',
  },
  {
    label: 'Assets, Threats, and Vulnerabilities – Google (Coursera)',
    url: 'https://your-link-for-assets-threats-vulnerabilities.com',
  },
  {
    label:
      'MERN Stack Internship – Dregali Pvt. Ltd. (Full-stack e-commerce: MongoDB, Express.js, React.js, Node.js)',
    url: 'https://your-link-for-mern-stack-internship-certificate.com',
  },
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
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              {cert.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
