'use client'
import { motion } from 'framer-motion'

const GoogleMapLocation = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 120
      }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-theme-primary/10 via-theme-secondary/5 to-theme-accent/10 relative overflow-hidden" id="location">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-theme-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-theme-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-theme-secondary/8 rounded-full blur-lg"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-exo2"
              variants={itemVariants}
              style={{
                background: 'linear-gradient(135deg, #B7E0FF, #FFCFB3, #E78F81)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Event Location
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 font-medium mb-4 font-quicksand"
              variants={itemVariants}
            >
              Indian Institute of Technology Jodhpur
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-accent mx-auto mb-8 rounded-full"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            className="glass-card rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-white/20"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            {/* Location Info */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-theme-primary/10 via-theme-secondary/8 to-theme-accent/10"
              variants={itemVariants}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
                variants={containerVariants}
              >
                <motion.div className="flex flex-col items-center group" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-theme-primary/20 to-theme-primary/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-theme-primary/20 group-hover:scale-110 transition-transform duration-300"
                    variants={iconVariants}
                  >
                    <svg className="w-6 h-6 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-theme-primary mb-2 font-exo2">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-quicksand">NH 62, Surpura Bypass Rd, Karwar, Rajasthan 342030</p>
                </motion.div>
                
                <motion.div className="flex flex-col items-center group" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-theme-accent/20 to-theme-accent/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-theme-accent/20 group-hover:scale-110 transition-transform duration-300"
                    variants={iconVariants}
                  >
                    <svg className="w-6 h-6 text-theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-theme-accent mb-2 font-exo2">Phone</h3>
                  <p className="text-gray-600 text-sm font-quicksand">+91 291 280 1115</p>
                </motion.div>
                
                <motion.div className="flex flex-col items-center group" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-theme-tertiary/20 to-theme-tertiary/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-theme-tertiary/20 group-hover:scale-110 transition-transform duration-300"
                    variants={iconVariants}
                  >
                    <svg className="w-6 h-6 text-theme-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-theme-tertiary mb-2 font-exo2">Email</h3>
                  <p className="text-gray-600 text-sm font-quicksand">officeofir@iitjodhpur.ac.in</p>
                </motion.div>
                
                <motion.div className="flex flex-col items-center group" variants={itemVariants}>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-theme-secondary/20 to-theme-secondary/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-theme-secondary/20 group-hover:scale-110 transition-transform duration-300"
                    variants={iconVariants}
                  >
                    <svg className="w-6 h-6 text-theme-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-theme-secondary mb-2 font-exo2">Event Dates</h3>
                  <p className="text-gray-600 text-sm font-quicksand">October 3-4, 2025</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div 
              className="relative h-96 md:h-[500px] overflow-hidden"
              variants={itemVariants}
            >
              <motion.iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5!2d73.115381!3d26.4667898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb503dfe3405%3A0xaf4fefb973fa386d!2sIIT%20Jodhpur!5e0!3m2!1sen!2sin!4v1694599234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-b-2xl"
                title="IIT Jodhpur Location"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="p-6 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm border-t border-white/20"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={containerVariants}
              >
                <motion.a
                  href="https://maps.google.com/?q=Indian+Institute+of+Technology+Jodhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-primary/80 text-white rounded-lg font-semibold shadow-lg border border-theme-primary/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(183, 224, 255, 0.3)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </motion.a>
                
                <motion.a
                  href="https://goo.gl/maps/IITJodhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-theme-accent/90 to-theme-accent text-white rounded-lg font-semibold shadow-lg border border-theme-accent/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(255, 207, 179, 0.3)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </motion.a>
                
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GoogleMapLocation;
