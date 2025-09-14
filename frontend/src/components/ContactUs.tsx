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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50/50 via-blue-50/50 to-indigo-100/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(183,224,255,0.1),transparent)]"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12" 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-exo2"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: '#F47B20',
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
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            >
              Get in touch with the International Relations Office
            </motion.p>
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
                details: ["office_ir@iitj.ac.in"],
                color: "#0C2E8A",
                path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                action: "mailto:office_ir@iitj.ac.in"
              },
              {
                icon: "phone",
                title: "Call Us",
                details: ["+91 291 280 1115", "+91 979 403 9955"],
                color: "#F47B20",
                path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                action: "tel:+912912801115"
              },
              {
                icon: "location",
                title: "Visit Us",
                details: ["NH 62, Surpura Bypass Rd", "Karwar, Rajasthan 342030"],
                color: "#FFBC4C",
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                action: "https://maps.google.com/?q=Indian+Institute+of+Technology+Jodhpur"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dean Contact Information */}
          <motion.div 
            className="glass-card p-8 rounded-2xl backdrop-blur-lg border border-white/20 mb-8"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-bold mb-4 font-exo2"
                style={{
                  background: '#F47B20',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                transition={{ duration: 0.3 }}
              >
                Dean of International Relations (DOIR)
              </motion.h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-700 font-quicksand">Dr. Ankur Gupta</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 font-quicksand">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>9794039955</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>02912801021</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office of International Relations */}
          <motion.div 
            className="glass-card p-8 rounded-2xl backdrop-blur-lg border border-white/20 mb-8"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-bold mb-4 font-exo2"
                style={{
                  background: '#F47B20',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                transition={{ duration: 0.3 }}
              >
                Office of International Relations
              </motion.h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 font-quicksand">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>0291-280-1115/1596/1034/1037</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Team Section */}
          <motion.div 
            className="glass-card p-8 rounded-2xl backdrop-blur-lg border border-white/20"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-bold mb-6 font-exo2"
                style={{
                  background: 'linear-gradient(135deg, #F47B20)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                transition={{ duration: 0.3 }}
              >
                Student Team
              </motion.h3>
              
              {/* Head and Mentor */}
              <div className="mb-6 p-4 bg-gray-50/50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-700 mb-3 font-quicksand">Head & Mentor</h4>
                <div className="text-center space-y-2">
                  <p className="font-medium text-gray-700 font-quicksand text-lg">Om Kumar</p>
                  <div className="flex flex-col justify-center items-center gap-3 text-gray-600 font-quicksand">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>+91 72061 66551</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="text-sm">b22cs081@iitj.ac.in</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Coordinators */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4 font-quicksand">Overall Coordinators</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Agam Harpreet Singh", phone: "+91 98217 72005", email: "b23cm1004@iitj.ac.in" },
                    { name: "Ishan Shah", phone: "+91 93586 97432", email: "b23cm1050@iitj.ac.in" },
                    { name: "Sarthak Kolekar", phone: "+91 96995 27676", email: "b23cs1065@iitj.ac.in" }
                  ].map((coordinator, index) => (
                    <div key={index} className="text-center space-y-3 p-4 bg-gray-50/30 rounded-lg">
                      <p className="font-medium text-gray-700 font-quicksand">{coordinator.name}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-gray-600 font-quicksand">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          <span className="text-sm">{coordinator.phone}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-600 font-quicksand">
                          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          <span className="text-xs">{coordinator.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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
