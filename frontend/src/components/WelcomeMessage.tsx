'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WelcomeMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 245, 205, 0.3) 0%, rgba(255, 207, 179, 0.2) 50%, rgba(183, 224, 255, 0.3) 100%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id='welcome'
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
        style={{ background: 'linear-gradient(135deg, #0C2E8A, #FFBC4C)' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-15"
        style={{ background: 'linear-gradient(135deg, #F47B20, #F5E9DC)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #FFBC4C, #1e293b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            From the desk of Dr. Ankur Gupta
          </motion.h2>
          <motion.div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #0C2E8A, #F47B20, #FFBC4C)'
            }}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-xl md:text-2xl mt-4 font-medium text-gray-700"
            variants={itemVariants}
          >
            Dean of International Relations – IR Conclave 2025
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Photo */}
          <motion.div 
            className="lg:w-1/3 flex justify-center lg:justify-start"
            variants={imageVariants}
          >
            <motion.div 
              className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl group"
              style={{
                background: 'linear-gradient(135deg, #0C2E8A, #F47B20)',
                padding: '4px'
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFBC4C, #F47B20)'
                }}
              />
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/p2.jpg"
                  alt="Dr. Ankur Gupta, Dean of International Relations"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Message */}
          <motion.div 
            className="lg:w-2/3 space-y-6"
            variants={textVariants}
          >
            <motion.div 
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'linear-gradient(135deg, #0C2E8A 0%, #F5E9DC 50%, #F47B20 100%)'
                }}
              />
              
              <div className="text-lg leading-relaxed text-gray-800 relative z-10">
                <motion.p 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Dear Esteemed Guests and Participants,
                  </span>
                </motion.p>
                
                <motion.p 
                  className="mb-6 text-justify leading-relaxed"
                  variants={itemVariants}
                >
                  It is with immense pleasure that I welcome you to the{' '}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    All IIT International Relations Conclave 2025
                  </span>, being organized at the{' '}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Indian Institute of Technology Jodhpur on 03-04 October 2025
                  </span>.
                </motion.p>
                
                <motion.p 
                  className="mb-6 text-justify leading-relaxed"
                  variants={itemVariants}
                >
                  This conclave marks a significant milestone in our ongoing efforts to foster global academic collaboration, 
                  interdisciplinary dialogue, and innovation-driven partnerships. We are honored to host distinguished speakers, 
                  scholars, and professionals who bring with them a wealth of experience and insight. Your presence enriches the spirit 
                  of this gathering and strengthens our shared commitment to advancing international engagement in higher 
                  education and research.
                </motion.p>
                
                <motion.p 
                  className="mb-6 text-justify leading-relaxed"
                  variants={itemVariants}
                >
                  Over the course of these two days, we look forward to thought-provoking discussions, meaningful networking, and 
                  the forging of new alliances that will shape the future of international relations in academia and beyond.
                </motion.p>
                
                <motion.p 
                  className="mb-8 text-justify leading-relaxed"
                  variants={itemVariants}
                >
                  On behalf of{' '}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    IIT Jodhpur
                  </span>, I extend my heartfelt gratitude to each of you for joining us and contributing to the success 
                  of this conclave. We hope your time here is intellectually rewarding and personally memorable.
                </motion.p>
                
                <motion.div 
                  className="space-y-2 p-6 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(183, 224, 255, 0.2), rgba(255, 207, 179, 0.2))',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-medium text-gray-700">Warm regards,</p>
                  <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Dr. Ankur Gupta
                  </p>
                  <p className="font-medium text-gray-700">Dean, International Relations</p>
                  <p className="font-medium text-gray-700">Indian Institute of Technology Jodhpur</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default WelcomeMessage
