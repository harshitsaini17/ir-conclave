'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0
    }
  }

  return (
    <motion.footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: 'linear-gradient(90deg, #0C2E8A, #F5E9DC, #F47B20, #FFBC4C, #0C2E8A)'
        }}
        animate={{
          backgroundPosition: ['0%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Particles - Reduced */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-15"
          style={{
            background: i % 3 === 0 ? '#0C2E8A' : i % 3 === 1 ? '#F47B20' : '#FFBC4C',
            left: `${25 + i * 20}%`,
            top: `${15 + (i % 2) * 25}%`
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Logo and Event Info - More Compact */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="p-6 rounded-2xl relative overflow-hidden group"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ 
                scale: 1.01,
                y: -3
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #0C2E8A, #F47B20, #FFBC4C)'
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex space-x-2">
                    <motion.div 
                      className="relative h-12 w-12 rounded-full p-1 shadow-md"
                      style={{
                        background: 'linear-gradient(135deg, #0C2E8A, #F47B20)'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 3
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-full overflow-hidden">
                        <Image
                          src="/images/left-logo.jpg"
                          alt="IIT Jodhpur"
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.h3 
                      className="text-lg font-bold text-white mb-1 leading-tight font-exo2"
                      whileHover={{
                        background: 'linear-gradient(135deg, #0C2E8A, #FFBC4C)',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      All IITs International Relations Conclave 2025
                    </motion.h3>
                    <p className="text-xs text-gray-300 font-quicksand">
                      Indian Institute of Technology Jodhpur
                    </p>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed mb-4 font-quicksand"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Fostering global academic collaboration, interdisciplinary dialogue, 
                  and innovation-driven partnerships across all IITs.
                </motion.p>
                
                {/* Enhanced Social Icons - More Compact */}
                <motion.div 
                  className="flex space-x-3"
                  variants={containerVariants}
                >
                  {[
                    { icon: "twitter", label: "Twitter", color: "#0C2E8A", link: "https://x.com/iitjodhpur" },
                    { icon: "linkedin", label: "LinkedIn", color: "#F47B20", link: "https://www.linkedin.com/school/iitjodhpur" },
                    { icon: "facebook", label: "Facebook", color: "#FFBC4C", link: "https://www.facebook.com/IITJOfficial/" },
                    { icon: "instagram", label: "Instagram", color: "#FFBC4C", link: "https://www.instagram.com/iitj_official_account/" },
                    
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 rounded-xl text-gray-300 transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                      variants={socialVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        color: '#ffffff'
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0"
                        style={{
                          background: `linear-gradient(135deg, ${social.color}, rgba(255,255,255,0.1))`
                        }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                      <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === "twitter" && (
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        )}
                        {social.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        )}
                        {social.icon === "facebook" && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        )}
                        {social.icon === "instagram" && (
                          <Instagram size={24} />
                          )}
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links - Significantly More Compact */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="p-6 rounded-2xl h-full"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              whileHover={{ 
                scale: 1.01,
                y: -3
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-lg font-bold text-white mb-4 flex items-center font-exo2"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="w-1 h-6 rounded-full mr-3"
                  style={{
                    background: 'linear-gradient(180deg, #0C2E8A, #FFBC4C)'
                  }}
                  animate={{
                    height: [24, 28, 24]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Quick Links
              </motion.h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#home', color: '#0C2E8A' },
                  { label: 'Welcome', href: '#welcome', color: '#F5E9DC' },
                  { label: 'Panel Members', href: '#panel', color: '#F47B20' },
                  { label: 'Participants', href: '#participants', color: '#FFBC4C' },
                  { label: 'International Student Handbook', href: 'https://drive.google.com/file/d/1E7ZZ9ot-d7JyCvGLGOT4yB8mRcvOt5Z2/view', color: '#0C2E8A' }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <motion.a 
                      href={link.href} 
                      className="flex items-center text-gray-300 py-2 px-3 rounded-lg text-sm transition-all duration-300 group font-quicksand"
                      whileHover={{ 
                        x: 6,
                        color: '#ffffff'
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <motion.span 
                        className="w-0 h-0.5 rounded-full mr-0 transition-all duration-300"
                        style={{ background: link.color }}
                        whileHover={{ width: 12, marginRight: 8 }}
                      />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar - Compact */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <motion.div 
            className="p-5 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, #0C2E8A, #FFBC4C)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <p className="text-gray-300 text-xs">
                  © 2025 Indian Institute of Technology Jodhpur. All rights reserved.
                </p>
              </motion.div>
              <motion.div 
                className="flex space-x-6 text-xs"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="text-gray-400 transition-all duration-300 relative"
                    whileHover={{ 
                      color: '#ffffff',
                      y: -1
                    }}
                  >
                    {item}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #0C2E8A, #FFBC4C)'
                      }}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
