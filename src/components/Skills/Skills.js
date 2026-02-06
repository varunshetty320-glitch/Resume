import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C/C++'],
  },
  {
    label: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Angular.js'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'Mongoose (ODM)' ,'SQL'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'Netlify', 'Render', 'AWS', 'Linux'],
  },
  {
    label: 'Concepts',
    items: ['RESTful APIs', 'Deployment', 'Client-Side Debugging', 'Agile', 'Authentication', 'UI/UX Basics', 'Git Branching', 'CORS', 'Middleware', 'JWT', 'OAuth2'],
  },
]

export default function Skills({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, gIndex) => (
          <motion.div
            key={group.label}
            className="skill-group card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: gIndex * 0.06 }}
          >
            <h3 className="skill-group-label">{group.label}</h3>
            <div className="skill-tags">
              {group.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
