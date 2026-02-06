import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Experience.css'

const experience = {
  role: 'MERN Stack Intern',
  company: 'Dregali Pvt. Ltd.',
  period: 'Feb 2025 – May 2025',
  title: 'E-commerce Web App (Amazon-like)',
  points: [
    'Developed an Amazon-like e-commerce platform using MERN stack.',
    'Implemented user authentication, product listings, cart, wishlist, multi-vendor support, admin panel, and real-time order tracking.',
    'Integrated Cloudinary for image uploads.',
    'Added product reviews and ratings with moderation system.',
    'Built responsive UI using Tailwind CSS and React Router for smooth navigation.',
    'Deployed frontend on Netlify and backend on Render with environment-based config.',
  ],
  link: 'https://mern-stack-projects.netlify.app/',
}

export default function Experience({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Experience</h2>
      <motion.article
        className="exp-card card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="exp-header">
          <div>
            <h3 className="card-title">{experience.title}</h3>
            <p className="card-subtitle">{experience.role} · {experience.company}</p>
            <p className="card-meta">{experience.period}</p>
          </div>
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            View Live
          </a>
        </div>
        <ul>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.article>
    </Section>
  )
}
