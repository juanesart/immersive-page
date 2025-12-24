// components/Section/Section.jsx
import { useRef } from 'react'
import useScrollAnimations from '../../hooks/useScrollAnimations'
import styles from './Section.module.scss'

export default function Section({ children }) {
  const ref = useRef(null)
  useScrollAnimations(ref)

  return (
    <section ref={ref} className={styles.section}>
      {children}
    </section>
  )
}
