'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // Shrink after scrolling 100px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-500 ease-in-out">
      {/* Main Header - Hidden when scrolled */}
      <div className={`max-w-full px-2 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
        isScrolled ? 'max-h-0 py-2 overflow-hidden opacity-0' : 'max-h-96 py-2 opacity-100'
      }`}>
        <div className="flex justify-between items-center">
          {/* Left Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative h-32 w-32">
              <Image
                src="/images/left-logo.jpg"
                alt="IIT Jodhpur"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-800">
                Indian Institute of Technology Jodhpur
              </h1>
              <h2 className="text-xl font-semibold text-blue-600 mt-1">
                All IITs International Relations Conclave- 2025
              </h2>
              <p className="text-md text-gray-600 mt-1">
                Oct 03 - 04, IIT Jodhpur, India
              </p>
            </div>
          </div>

          {/* Right Tree Image */}
          <div className="hidden lg:block relative h-28 w-48">
            <Image
              src="/images/right-logo.jpg"
              alt="Tree Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white border-t-0 shadow-md' 
          : 'bg-yellow-400 border-t border-yellow-500'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 ">
          <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'h-20' : 'h-12'
          }`}>
            {/* Compact Logo for Scrolled State */}
            {isScrolled && (
              <div className="flex items-center space-x-3 animate-in fade-in duration-500">
                <div className="relative h-18 w-18">
                  <Image
                    src="/images/left-logo.jpg"
                    alt="IIT Jodhpur"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-800">
                    IIT Jodhpur IR Conclave 2025
                  </h1>
                </div>
              </div>
            )}

            {/* Mobile Title for Small Screens - Only when not scrolled */}
            {!isScrolled && (
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gray-800">IIT Jodhpur IR Conclave 2025</h1>
              </div>
            )}

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center space-x-1 transition-all duration-500 ease-in-out ${
              isScrolled ? 'ml-auto' : ''
            }`}>
              <a
                href="#home"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l first:border-l-0 ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                Home Page
              </a>
              <a
                href="#visit"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                Visit IIT Jodhpur
              </a>
              <a
                href="#travel"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                Travel Guidelines to Jodhpur
              </a>
              <a
                href="#map"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                IIT Jodhpur on Google Map
              </a>
              <a
                href="#handbook"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                International Student Handbook
              </a>
              <a
                href="#contact"
                className={`px-3 py-1 hover:text-blue-600 transition-colors duration-200 font-medium text-sm border-l ${
                  isScrolled ? 'text-gray-700 border-gray-300' : 'text-black border-black'
                }`}
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 hover:text-blue-600 transition-colors ${
                isScrolled ? 'ml-auto text-gray-700' : 'text-black'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? 'max-h-96 opacity-100 pb-4'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <nav className="flex flex-col space-y-2 px-2">
              <a
                href="#home"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium border-b ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-300' 
                    : 'text-black border-yellow-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home Page
              </a>
              <a
                href="#visit"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium border-b ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-300' 
                    : 'text-black border-yellow-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Visit IIT Jodhpur
              </a>
              <a
                href="#travel"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium border-b ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-300' 
                    : 'text-black border-yellow-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Travel Guidelines to Jodhpur
              </a>
              <a
                href="#map"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium border-b ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-300' 
                    : 'text-black border-yellow-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                IIT Jodhpur on Google Map
              </a>
              <a
                href="#handbook"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium border-b ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-300' 
                    : 'text-black border-yellow-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                International Student Handbook
              </a>
              <a
                href="#contact"
                className={`px-2 py-3 hover:text-yellow-600 transition-colors duration-200 font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
