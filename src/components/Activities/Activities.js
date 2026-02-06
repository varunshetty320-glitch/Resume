import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Activities.css'

const activities = [
  {
    title: 'Python Hands-on Workshop',
    desc: 'Participated in a practical Python programming workshop at Canara Engineering College, Mangalore, gaining hands-on experience with core concepts and real-time problem solving.',
  },
  {
    title: 'DSA December – Virtual Coding Challenge',
    desc: 'Actively took part in "DSA December", a virtual coding challenge organized by the Coding Club of CEC, enhancing skills in data structures and algorithms.',
  },
  {
    title: 'Entrepreneurial Leadership Program',
    desc: 'Participated in the Entrepreneurial Leadership program conducted by the Innovation Council at Canara Engineering College, fostering leadership and innovation mindset.',
  },
]

export default function Activities({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Activities & Workshops</h2>
      <div className="activities-list">
        {activities.map((item, index) => (
          <motion.article
            key={item.title}
            className="activity-card card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
