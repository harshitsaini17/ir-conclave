"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface PanelMember {
  name: string;
  role: string;
  image: string;
}

interface PanelMemberCardProps {
  member: PanelMember;
  index?: number;
}

const PanelMemberCard = ({ member, index = 0 }: PanelMemberCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Get college background image based on institution (same as MemberCard)
  const getCollegeBackground = (role: string) => {
    if (role.includes("IIT Jodhpur")) return "/images/left-logo.jpg";
    if (role.includes("IIT Kharagpur")) return "/images/18.jpg";
    if (role.includes("IIT Roorkee")) return "/images/22-bg.jpg";
    if (role.includes("IIT Bombay")) return "/images/colleges/iit-bombay-bg.jpg";
    if (role.includes("IIT Delhi")) return "/images/colleges/iit-delhi-bg.jpg";
    if (role.includes("IIT Madras")) return "/images/colleges/iit-madras-bg.jpg";
    if (role.includes("IIT Kanpur")) return "/images/colleges/iit-kanpur-bg.jpg";
    if (role.includes("IIT Guwahati")) return "/images/colleges/iit-guwahati-bg.jpg";
    if (role.includes("IIT BHU")) return "/images/colleges/iit-bhu-bg.jpg";
    if (role.includes("IIT ISM")) return "/images/colleges/iit-ism-bg.jpg";
    if (role.includes("IIT Jammu")) return "/images/colleges/iit-jammu-bg.jpg";
    if (role.includes("IIT Ropar")) return "/images/colleges/iit-ropar-bg.jpg";
    if (role.includes("IIT Goa")) return "/images/colleges/iit-goa-bg.jpg";
    if (role.includes("IIT Tirupati")) return "/images/colleges/iit-tirupati-bg.jpg";
    if (role.includes("IIT Mandi")) return "/images/colleges/iit-mandi-bg.jpg";
    if (role.includes("IIT Indore")) return "/images/58.jpg";
    if (role.includes("IIT Patna")) return "/images/63.jpg";
    if (role.includes("IIT Palakkad")) return "/images/10.jpg";
    if (role.includes("DAAD")) return "/images/6.jpg";
    return "/images/colleges/default-bg.jpg";
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="w-full rounded-3xl overflow-hidden mb-12 group"
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(25px)',
        border: '2px solid rgba(255, 255, 255, 0.4)'
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #B7E0FF 0%, #FFF5CD 25%, #FFCFB3 75%, #E78F81 100%)',
          filter: 'blur(20px)'
        }}
      />
      
      <div className="flex relative z-10">
        {/* Left Image Section - 20% */}
        <motion.div 
          className="w-1/5 h-64 relative flex-shrink-0"
          variants={imageVariants}
        >
          <motion.div
            className="w-full h-full rounded-l-3xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, #B7E0FF 0%, #FFCFB3 100%)',
              padding: '3px'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-white rounded-l-3xl overflow-hidden relative">
              {!imageError && member.image ? (
                <motion.div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFF5CD, #FFCFB3)'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(15px)'
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg
                      className="w-10 h-10 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content Section - 80% */}
        <motion.div 
          className="w-4/5 py-6 relative flex items-center"
          variants={contentVariants}
        >
          <div className="relative w-full h-full flex items-center">
            {/* Enhanced Background College Image */}
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-center mr-24 opacity-8 group-hover:opacity-15"
              style={{
                backgroundImage: `url(${getCollegeBackground(member.role)})`,
                backgroundSize: 'auto 70%',
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.08, 0.12, 0.08]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Decorative floating elements */}
            <motion.div
              className="absolute top-4 right-8 w-3 h-3 rounded-full opacity-40"
              style={{ background: '#B7E0FF' }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-4 right-16 w-2 h-2 rounded-full opacity-40"
              style={{ background: '#E78F81' }}
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Content with enhanced styling */}
            <motion.div 
              className="relative z-10 p-8 w-full"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold mb-4 leading-tight font-exo2"
                style={{
                  background: 'linear-gradient(135deg, #1f2937, #4b5563)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                whileHover={{
                  background: 'linear-gradient(135deg, #E78F81, #B7E0FF, #FFCFB3)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}
                transition={{ duration: 0.4 }}
              >
                {member.name}
              </motion.h2>
              
              <motion.div
                className="w-16 h-1.5 mb-5 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #B7E0FF, #FFCFB3, #E78F81)'
                }}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              
              <motion.p 
                className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium font-quicksand"
                whileHover={{ color: '#374151' }}
                transition={{ duration: 0.3 }}
              >
                {member.role}
              </motion.p>
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="flex space-x-3 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: i === 0 ? '#B7E0FF' : 
                                  i === 1 ? '#FFF5CD' : 
                                  i === 2 ? '#FFCFB3' : '#E78F81'
                    }}
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PanelMemberCard;
