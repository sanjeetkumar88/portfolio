'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function TiltImage({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  maxTilt = 35,
  glareIntensity = 0.3,
  shadowIntensity = 0.4,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  maxTilt?: number
  glareIntensity?: number
  shadowIntensity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values with spring configuration for smoother animation
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  // Enhanced transforms with more dramatic tilt range
  const rotateX = useTransform(y, [0, 1], [maxTilt * 1.2, -maxTilt * 1.2])
  const rotateY = useTransform(x, [0, 1], [-maxTilt * 1.2, maxTilt * 1.2])
  
  // Smooth spring animations with more responsive settings
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 25 })
  
  // Scale effect with more dramatic response
  const scale = useTransform(
    [x, y], 
    (values: readonly number[]) => {
      const [latestX, latestY] = values
      const centerDistance = Math.sqrt(
        Math.pow(latestX - 0.5, 2) + Math.pow(latestY - 0.5, 2)
      )
      return isHovered ? 1.08 - centerDistance * 0.15 : 1
    }
  )
  const springScale = useSpring(scale, { stiffness: 400, damping: 30 })

  // Dynamic shadow with more dramatic movement
  const shadowX = useTransform(rotateY, [-maxTilt * 1.2, maxTilt * 1.2], [-50, 50])
  const shadowY = useTransform(rotateX, [-maxTilt * 1.2, maxTilt * 1.2], [-35, 35])
  const shadowBlur = useTransform(
    [x, y],
    ([latestX, latestY]: readonly number[]) => {
      const centerDistance = Math.sqrt(
        Math.pow(latestX - 0.5, 2) + Math.pow(latestY - 0.5, 2)
      )
      return 25 + centerDistance * 60
    }
  )

  // Glare effect position
  const glareX = useTransform(x, [0, 1], [-100, 100])
  const glareY = useTransform(y, [0, 1], [-100, 100])
  const glareOpacity = useTransform(
    [x, y],
    ([latestX, latestY]: readonly number[]) => {
      const centerDistance = Math.sqrt(
        Math.pow(latestX - 0.5, 2) + Math.pow(latestY - 0.5, 2)
      )
      return isHovered ? glareIntensity * (1 - centerDistance) : 0
    }
  )

  // Gradient overlay based on mouse position
  const gradientOpacity = useTransform(
    [x, y],
    ([latestX, latestY]: readonly number[]) => {
      return isHovered ? 0.1 : 0
    }
  )

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const offsetX = (e.clientX - rect.left) / rect.width
    const offsetY = (e.clientY - rect.top) / rect.height

    x.set(offsetX)
    y.set(offsetY)
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformStyle: 'preserve-3d',
      }}
      className={`relative cursor-pointer transition-all duration-300 ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Dynamic shadow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-50"
        style={{
          x: shadowX,
          y: shadowY,
          filter: `blur(${shadowBlur}px)`,
          background: `radial-gradient(ellipse at center, rgba(99, 233, 168, ${shadowIntensity}) 0%, transparent 70%)`,
          transform: 'translateZ(-50px)',
        }}
      />
      
      {/* Main image container */}
      <div className="relative transform-gpu">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-full shadow-2xl shadow-[#63e9a8]/50 w-full max-w-[400px] h-auto relative z-10"
          style={{
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 20%, transparent 50%)`,
            opacity: glareOpacity,
            transform: 'translateZ(1px)',
          }}
        />
        
        {/* Color gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `conic-gradient(from ${x}turn at ${x}% ${y}%, 
              rgba(99, 233, 168, 0.3) 0deg, 
              rgba(168, 85, 247, 0.3) 90deg, 
              rgba(236, 72, 153, 0.3) 180deg, 
              rgba(251, 191, 36, 0.3) 270deg, 
              rgba(99, 233, 168, 0.3) 360deg)`,
            opacity: gradientOpacity,
            transform: 'translateZ(2px)',
          }}
        />
        
        {/* Rim lighting effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 60%, rgba(99, 233, 168, 0.6) 100%)`,
            opacity: isHovered ? 0.7 : 0.3,
            transform: 'translateZ(-1px)',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Reflection effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255,255,255,0.1) 0%, 
              transparent 30%, 
              transparent 70%, 
              rgba(255,255,255,0.05) 100%)`,
            opacity: isHovered ? 1 : 0.5,
            transform: 'translateZ(3px)',
          }}
        />
      </div>
      
      {/* Floating particles effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#63e9a8] rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                scale: 0,
              }}
              animate={{
                x: `${50 + (Math.cos((i * Math.PI) / 4) * 120)}%`,
                y: `${50 + (Math.sin((i * Math.PI) / 4) * 120)}%`,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}