'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
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
        className="absolute top-0 left-0 w-full h-2"
        style={{
          background: 'linear-gradient(90deg, #B7E0FF, #FFF5CD, #FFCFB3, #E78F81, #B7E0FF)'
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

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{
            background: i % 3 === 0 ? '#B7E0FF' : i % 3 === 1 ? '#FFCFB3' : '#E78F81',
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Logo and Event Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="p-8 rounded-3xl relative overflow-hidden group"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #B7E0FF, #FFCFB3, #E78F81)'
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-4 mb-6"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex space-x-3">
                    <motion.div 
                      className="relative h-14 w-14 rounded-full p-1 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #B7E0FF, #FFCFB3)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-full overflow-hidden">
                        <Image
                          src="/images/iit-jodhpur-logo.jpg"
                          alt="IIT Jodhpur"
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                    </motion.div>
                    <motion.div 
                      className="relative h-14 w-14 rounded-full p-1 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #FFCFB3, #E78F81)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: -5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-full overflow-hidden">
                        <Image
                          src="/images/iit-logo.jpg"
                          alt="IIT"
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2"
                      whileHover={{
                        background: 'linear-gradient(135deg, #B7E0FF, #E78F81)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      All IITs International Relations Conclave 2025
                    </motion.h3>
                    <p className="text-sm text-gray-300">
                      Indian Institute of Technology Jodhpur
                    </p>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  A significant milestone in fostering global academic collaboration, 
                  interdisciplinary dialogue, and innovation-driven partnerships across all IITs.
                </motion.p>
                
                {/* Enhanced Social Icons */}
                <motion.div 
                  className="flex space-x-4"
                  variants={containerVariants}
                >
                  {[
                    { icon: "twitter", label: "Twitter", color: "#B7E0FF" },
                    { icon: "linkedin", label: "LinkedIn", color: "#FFCFB3" },
                    { icon: "facebook", label: "Facebook", color: "#E78F81" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="relative p-4 rounded-2xl text-gray-300 transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                      variants={socialVariants}
                      whileHover={{ 
                        scale: 1.2,
                        y: -5,
                        color: '#ffffff'
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0"
                        style={{
                          background: `linear-gradient(135deg, ${social.color}, rgba(255,255,255,0.1))`
                        }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                      <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === "twitter" && (
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        )}
                        {social.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        )}
                        {social.icon === "facebook" && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-8 flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="w-1 h-8 rounded-full mr-4"
                  style={{
                    background: 'linear-gradient(180deg, #B7E0FF, #E78F81)'
                  }}
                  animate={{
                    height: [32, 40, 32]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Quick Links
              </motion.h4>
              <ul className="space-y-4">
                {[
                  { label: 'Home', href: '#home', color: '#B7E0FF' },
                  { label: 'About Conclave', href: '#about', color: '#FFF5CD' },
                  { label: 'Panel Members', href: '#panel', color: '#FFCFB3' },
                  { label: 'Participants', href: '#participants', color: '#E78F81' },
                  { label: 'Event Schedule', href: '#schedule', color: '#B7E0FF' }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.a 
                      href={link.href} 
                      className="flex items-center text-gray-300 py-3 px-4 rounded-xl transition-all duration-300 group"
                      whileHover={{ 
                        x: 8,
                        color: '#ffffff'
                      }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <motion.span 
                        className="w-0 h-1 rounded-full mr-0 transition-all duration-300"
                        style={{ background: link.color }}
                        whileHover={{ width: 16, marginRight: 12 }}
                      />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="p-8 rounded-3xl h-full"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-8 flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="w-1 h-8 rounded-full mr-4"
                  style={{
                    background: 'linear-gradient(180deg, #FFCFB3, #B7E0FF)'
                  }}
                  animate={{
                    height: [32, 40, 32]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                Contact
              </motion.h4>
              <div className="space-y-6">
                {[
                  {
                    icon: "email",
                    label: "Email",
                    value: "officeofir@iitjodhpur.ac.in",
                    color: "#B7E0FF",
                    path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  },
                  {
                    icon: "phone",
                    label: "Phone",
                    value: ["+91 291 280 1115", "+91 979 403 9955"],
                    color: "#FFCFB3",
                    path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  },
                  {
                    icon: "location",
                    label: "Address",
                    value: "IIT Jodhpur, Karwar, Rajasthan 342037",
                    color: "#E78F81",
                    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  }
                ].map((contact, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${contact.color}20, ${contact.color}40)`
                      }}
                      whileHover={{
                        scale: 1.1,
                        background: `linear-gradient(135deg, ${contact.color}40, ${contact.color}60)`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" style={{ color: contact.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d={contact.path}/>
                      </svg>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-2">{contact.label}</p>
                      {Array.isArray(contact.value) ? (
                        contact.value.map((val, i) => (
                          <p key={i} className="text-white text-sm mb-1">{val}</p>
                        ))
                      ) : (
                        <p className="text-white text-sm break-words">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <motion.div 
            className="p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, #B7E0FF, #E78F81)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <p className="text-gray-300 text-sm">
                  © 2025 Indian Institute of Technology Jodhpur. All rights reserved.
                </p>
              </motion.div>
              <motion.div 
                className="flex space-x-8 text-sm"
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
                      y: -2
                    }}
                  >
                    {item}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #B7E0FF, #E78F81)'
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
