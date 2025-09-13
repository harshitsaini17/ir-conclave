'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Visit IIT Jodhpur', href: '#visit', id: 'visit' },
    { label: 'Travel Guidelines to Jodhpur', href: '#travel', id: 'travel' },
    { label: 'IIT Jodhpur on Google Map', href: '#map', id: 'map' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'glass-dark shadow-2xl' 
          : 'glass shadow-xl'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(183, 224, 255, 0.15)' 
          : 'rgba(255, 245, 205, 0.25)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Left Logo, Title and Navigation */}
          <div className="flex items-center space-x-8 group">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative h-16 w-16"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  filter: "brightness(1.1)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-0"
                  style={{
                    background: 'linear-gradient(135deg, #B7E0FF, #FFCFB3)',
                    filter: 'blur(15px)'
                  }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.4 }}
                />
                <Image
                  src="/images/left-logo.jpg"
                  alt="IIT Jodhpur"
                  fill
                  className="object-contain relative z-10 rounded-full shadow-lg"
                />
              </motion.div>
              <div className="hidden lg:block">
                <motion.h1 
                  className="text-md font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  भारतीय प्रौद्योगिकी संस्थान, जोधपुर
                </motion.h1>
                <motion.h1 
                  className="text-md font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Indian Institute of Technology Jodhpur
                </motion.h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden xl:flex items-center space-x-2 p-2 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href, item.id)
                  }}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Animated background for hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #E78F81, #FFCFB3)',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active indicator */}
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #B7E0FF, #E78F81)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.9 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="xl:hidden relative p-3 text-gray-700 rounded-xl overflow-hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #FFCFB3, #E78F81)',
                opacity: 0
              }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden"
            >
              <motion.nav 
                className="mt-6 p-4 rounded-2xl"
                style={{
                  background: 'rgba(255, 245, 205, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href, item.id)
                    }}
                    className={`block py-3 px-4 font-medium rounded-xl transition-all duration-300 relative overflow-hidden ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-700'
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: activeSection === item.id 
                          ? 'linear-gradient(135deg, #B7E0FF, #E78F81)'
                          : 'linear-gradient(135deg, #FFCFB3, #E78F81)',
                        opacity: activeSection === item.id ? 0.9 : 0
                      }}
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-between">
                      <span className="flex items-center space-x-3">
                        <motion.span 
                          className={`w-2 h-2 rounded-full ${
                            activeSection === item.id 
                              ? 'bg-white' 
                              : 'bg-gray-400'
                          }`}
                          animate={{
                            scale: activeSection === item.id ? [1, 1.3, 1] : 1
                          }}
                          transition={{
                            duration: 1,
                            repeat: activeSection === item.id ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        />
                        {item.label}
                      </span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar
