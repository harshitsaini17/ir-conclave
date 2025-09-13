'use client'
import { motion } from 'framer-motion'

const ContactUs = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-theme-primary/10 via-theme-secondary/5 to-theme-accent/10 relative overflow-hidden" id="contact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-theme-primary/8 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-theme-accent/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-theme-secondary/8 rounded-full blur-lg animate-pulse"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
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
              Contact Us
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 font-medium mb-4 font-quicksand"
              variants={itemVariants}
            >
              Get in touch with the International Relations Office
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-accent mx-auto mb-8 rounded-full"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {[
              {
                icon: "email",
                title: "Email Us",
                details: ["officeofir@iitjodhpur.ac.in"],
                color: "#B7E0FF",
                path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                action: "mailto:officeofir@iitjodhpur.ac.in"
              },
              {
                icon: "phone",
                title: "Call Us",
                details: ["+91 291 280 1115", "+91 979 403 9955"],
                color: "#FFCFB3",
                path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                action: "tel:+912912801115"
              },
              {
                icon: "location",
                title: "Visit Us",
                details: ["NH 62, Surpura Bypass Rd", "Karwar, Rajasthan 342030"],
                color: "#E78F81",
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                action: "https://maps.google.com/?q=Indian+Institute+of+Technology+Jodhpur"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${contact.color}30`
                }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
                onClick={() => contact.action.startsWith('http') ? window.open(contact.action, '_blank') : window.location.href = contact.action}
              >
                <div className="glass-card p-8 rounded-2xl h-full backdrop-blur-lg border border-white/20 relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${contact.color}, ${contact.color}80)` }}
                  ></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${contact.color}20, ${contact.color}40)`
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: `linear-gradient(135deg, ${contact.color}40, ${contact.color}60)`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className="w-8 h-8" 
                      style={{ color: contact.color }} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d={contact.path}/>
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 
                      className="text-xl font-bold mb-4 font-exo2" 
                      style={{ color: contact.color }}
                    >
                      {contact.title}
                    </h3>
                    <div className="space-y-2">
                      {contact.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed font-quicksand">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${contact.color}05, ${contact.color}10)`
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dean Contact Information */}
          <motion.div 
            className="glass-card p-8 rounded-2xl backdrop-blur-lg border border-white/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent mb-4 font-exo2">
                Dean of International Relations (DOIR)
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-700 font-quicksand">Dr. Ankur Gupta</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 font-quicksand">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-theme-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>9794039955</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-theme-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>02912801021</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;