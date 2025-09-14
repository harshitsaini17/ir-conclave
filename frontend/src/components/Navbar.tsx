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
    { label: 'Home', href: '#home', id: 'home', isExternal: false },
    { label: 'Visit IITJ', href: 'https://iitj.ac.in/main/en/iitj', id: 'visit', isExternal: true },
    { label: 'Travel Guidelines', href: 'https://iitj.ac.in/main/en/how-to-reach-iit-jodhpur', id: 'travel', isExternal: true },
    { label: 'IITJ on Google Map', href: '#location', id: 'map', isExternal: false },
    { label: 'Student Handbook', href: 'https://drive.google.com/file/d/1E7ZZ9ot-d7JyCvGLGOT4yB8mRcvOt5Z2/view', id: 'about', isExternal: true },
    { label: 'Contact Us', href: '#contact', id: 'contact', isExternal: false },
  ]

  const handleNavClick = (e: React.MouseEvent, href: string, id: string, isExternal: boolean) => {
    setIsMenuOpen(false)
    
    if (isExternal) {
      // For external links, prevent default behavior and open in new tab
      e.preventDefault()
      window.open(href, '_blank', 'noopener noreferrer')
    } else {
      // For internal links, prevent default and smooth scroll
      e.preventDefault()
      setActiveSection(id)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
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
          ? 'rgba(183, 224, 255, 0.75)' 
          : 'rgba(255, 245, 205, 0.15)',
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
                    background: 'linear-gradient(135deg, #0C2E8A, #F47B20)',
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
                  className="text-md font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-500 font-exo2"
                  whileHover={{ scale: 1.05 }}
                >
                  भारतीय प्रौद्योगिकी संस्थान, जोधपुर
                </motion.h1>
                <motion.h1 
                  className="text-md font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-500 font-exo2"
                  whileHover={{ scale: 1.05 }}
                >
                  Indian Institute of Technology Jodhpur
                </motion.h1>
              </div>
            </motion.div>

            {/* Desktop Navigation - Simplified */}
            <motion.nav 
              className="hidden xl:flex items-center space-x-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id, item.isExternal)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 font-quicksand relative ${
                    !item.isExternal && activeSection === item.id
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/20'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1
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
                  
                  {/* Simple underline for active state */}
                  <AnimatePresence>
                    {!item.isExternal && activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
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
                background: 'linear-gradient(135deg, #F47B20, #FFBC4C)',
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

        {/* Mobile Navigation - Simplified */}
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
                    onClick={(e) => handleNavClick(e, item.href, item.id, item.isExternal)}
                    className={`block py-3 px-4 font-medium rounded-lg transition-all duration-300 relative ${
                      !item.isExternal && activeSection === item.id
                        ? 'text-blue-700 font-semibold bg-white/10'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/10'
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center space-x-3">
                        <motion.span 
                          className={`w-2 h-2 rounded-full ${
                            !item.isExternal && activeSection === item.id 
                              ? 'bg-blue-600' 
                              : 'bg-gray-400'
                          }`}
                          animate={{
                            scale: !item.isExternal && activeSection === item.id ? [1, 1.2, 1] : 1
                          }}
                          transition={{
                            duration: 2,
                            repeat: !item.isExternal && activeSection === item.id ? Infinity : 0,
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
