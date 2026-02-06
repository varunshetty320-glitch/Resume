import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Projects.css'

const projects = [
  {
    title: 'Phishing Detection (URL-Based)',
    highlights: [
      'Feature Extraction: Analyzed URL features like domain length, special characters, and HTTPS usage for better detection accuracy.',
      'Model Performance: Achieved high accuracy with Random Forest and Logistic Regression after fine-tuning.',
      'Real-time Detection: Implemented real-time URL scanning for phishing detection.',
      'Model Deployment: Deployed the phishing detection model to analyze URLs on a larger scale.',
    ],
  },
  {
    title: 'AI-Based Plant Detection System',
    highlights: [
      'Model Training: Trained a CNN model for plant species classification using labeled plant image datasets.',
      'User Interface: Developed a simple interface for real-time plant recognition and information display.',
      'Cross-Platform: Ensured the system was compatible with both mobile and web platforms.',
      'Real-time Accuracy: Provided near-instant identification of plants with relevant data and care tips.',
    ],
  },
]

export default function Projects({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="card-title">{project.title}</h3>
            <ul>
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
