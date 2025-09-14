'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // IIT Jodhpur campus images - only first slide has text content
  const carouselData = [
    {
      image: '/images/IITJ1.jpg',
      color: 'from-teal-600/40 via-cyan-600/40 to-blue-600/40'
    },
    {
      image: '/images/IITJ2.jpg',
      color: 'from-teal-600/80 via-cyan-600/80 to-blue-600/80'
    }
  ]

  // Fixed text content (always displayed)
  const fixedContent = {
    title: 'All IITs International Relations Conclave- 2025',
    subtitle: 'Oct 03 - 04, IIT Jodhpur, India',
    description: 'Fostering Global Academic Partnerships & Research Collaborations'
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [carouselData.length])

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.95
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900" id='home'>
      {/* Image Layer with Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: "easeInOut"
          }}
          className="absolute inset-0 z-10"
        >
          {/* Background Image */}
          <motion.div className="relative w-full h-full">
            <motion.img
              src={carouselData[currentSlide].image}
              alt="IIT Jodhpur Campus"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 8, 
                ease: "easeOut" 
              }}
            />
            
            {/* Dynamic Gradient Overlay */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${carouselData[currentSlide].color}`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* White Overlay Layer */}
      <motion.div 
        className="absolute inset-0 z-20"
        style={{
          background: 'rgba(255, 255, 255, 0.75)', // Semi-transparent white overlay
          backdropFilter: 'blur(2px)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Fixed Content Container (Always Shows Same Text) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-30"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div 
          className="text-center px-6 max-w-5xl p-8 rounded-3xl relative"
          
        >
          {/* Fixed Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-exo2"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              background: 'linear-gradient(135deg, #0C2E8A, #4DA8DA)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {fixedContent.title}
          </motion.h1>
          
          {/* Fixed Subtitle */}
          <motion.p 
            className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 font-quicksand"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2
            }}
            style={{
              background: 'linear-gradient(135deg, #F47B20, #FFBC4C)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {fixedContent.subtitle}
          </motion.p>
          
          {/* Fixed Description */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-medium mb-8 text-gray-700 font-quicksand"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.4
            }}
          >
            {fixedContent.description}
          </motion.p>
          
          {/* Decorative Elements */}
          {/* <motion.div 
            className="flex justify-center space-x-4"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.6
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: i === 0 ? '#0C2E8A' : i === 1 ? '#F47B20' : '#FFBC4C'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div> */}
        </div>
      </motion.div>
      
      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {carouselData.map((_, index) => (
          <motion.button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'scale-125' 
                : 'scale-100 opacity-60'
            }`}
            style={{
              background: index === currentSlide 
                ? '#F47B20'
                : 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.2)'
            }}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
      
      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 z-40"
        style={{
          background: 'linear-gradient(90deg, #0C2E8A, #F47B20, #FFBC4C)',
          width: '100%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 6, ease: "linear" }}
        key={currentSlide}
      />
    </div>
  )
}

export default Carousel
