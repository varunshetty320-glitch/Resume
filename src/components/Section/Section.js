import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, children, onInView, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !onInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onInView(id)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [id, onInView])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
