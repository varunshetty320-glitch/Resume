import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Certifications.css'

// Link that opens when the user clicks the "View all" button
// (e.g. a Google Drive folder with all certificates or a Notion page).
const VIEW_ALL_CERTS_URL = 'https://drive.google.com/drive/folders/1Q8czwoqzZ4gySJ8D7WVDMg6f5GMWmhrT?usp=sharing'

// Add or update the `url` for each certification.
// When a user clicks the certification text, it will open this link.
const certifications = [
  {
    label: 'Frontend for Java Full Stack Development – Board Infinity (Coursera)',
    url: 'https://drive.google.com/file/d/1T3veVjDUI67R6UuUkdC3QDRrHUp4sABf/view?usp=sharing',
  },
  {
    label: 'Foundations of Cybersecurity – Google (Coursera)',
    url: 'https://drive.google.com/file/d/1XvHV9ruCWyGPLTWSuX72nEjk5_Cgmen4/view?usp=sharing ',
  },
  {
    label: 'Ethical Hacking Essentials (EHE) – EC Council (Coursera)',
    url: 'https://drive.google.com/file/d/14JeubRUkVKkCAwmkWJBB1gebI2zeW_Nx/view?usp=sharing',
  },
  {
    label: 'Connect and Protect: Networks and Network Security – Coursera',
    url: 'https://drive.google.com/file/d/1KNzl2W7I21E7PgPC4kfsE4Bg_NmBiO4Z/view?usp=sharing',
  },
  {
    label: 'Tools of the Trade: Linux and SQL – Google (Coursera)',
    url: 'https://drive.google.com/file/d/1NRZdeb79jaizPVrN-mEk9febmSfhIB8J/view?usp=sharing',
  },
  {
    label: 'Assets, Threats, and Vulnerabilities – Google (Coursera)',
    url: 'https://drive.google.com/file/d/1rdvlw3l70RaH8CS_QZ40nZTSt1BFM_cy/view?usp=sharing',
  },
  {
    label:
      'MERN Stack Internship – Dregali Pvt. Ltd. (Full-stack e-commerce: MongoDB, Express.js, React.js, Node.js)',
    url: 'https://drive.google.com/file/d/1ISCuQa9lVfzNnzNa5m3MghPakx8wxbjY/view?usp=sharing',
  },
]

export default function Certifications({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <div className="cert-header">
        <h2 className="section-title">Certifications</h2>
        <a
          href={VIEW_ALL_CERTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button outline cert-view-all"
        >
          View all
        </a>
      </div>
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
