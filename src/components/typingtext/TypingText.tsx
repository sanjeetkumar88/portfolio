'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypingTextProps {
  words: string[]
  className?: string
  speed?: number
  delay?: number
}

export default function TypingText({
  words,
  className = '',
  speed = 120,
  delay = 2000,
}: TypingTextProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (deleting) {
        if (subIndex === 0) {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        } else {
          setSubIndex((prev) => prev - 1)
        }
      } else {
        if (subIndex === words[index].length) {
          setDeleting(true)
        } else {
          setSubIndex((prev) => prev + 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting])

  return (
    <motion.span
      className={`inline-block text-[#5dd098] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {words[index].substring(0, subIndex)}
      <span className="opacity-60 animate-pulse">|</span>
    </motion.span>
  )
}
