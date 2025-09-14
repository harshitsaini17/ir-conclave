"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  image: string;
}

interface MemberCardProps {
  member: Member;
  index?: number;
}

const MemberCard = ({ member, index = 0 }: MemberCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Get college background image based on institution
  const getCollegeBackground = (role: string) => {
    if (role.includes("IIT Jodhpur")) return "/images/left-logo.jpg";
    if (role.includes("IIT Kharagpur")) return "/images/18.jpg";
    if (role.includes("IIT Roorkee")) return "/images/22.jpg";
    if (role.includes("IIT Bombay")) return "/images/39.jpg";
    if (role.includes("IIT Delhi")) return "/images/38.jpg";
    if (role.includes("IIT Madras")) return "/images/36.jpg";
    if (role.includes("IIT Kanpur")) return "/images/46.jpg";
    if (role.includes("IIT Guwahati")) return "/images/12.jpg";
    if (role.includes("IIT BHU")) return "/images/25.jpg";
    if (role.includes("IIT ISM")) return "/images/28.jpg";
    if (role.includes("IIT Jammu")) return "/images/32.jpg";
    if (role.includes("IIT Ropar")) return "/images/44.jpg";
    if (role.includes("IIT Goa")) return "/images/48.jpg";
    if (role.includes("IIT Tirupati")) return "/images/52.jpg";
    if (role.includes("IIT Mandi")) return "/images/54.jpg";
    if (role.includes("IIT Indore")) return "/images/58.jpg";
    if (role.includes("IIT Patna")) return "/images/63.jpg";
    if (role.includes("IIT Palakkad")) return "/images/10.jpg";
    if (role.includes("DAAD")) return "/images/6.jpg";
    return "/images/colleges/default-bg.jpg";
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1
    }
  };

  const contentVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="w-full rounded-2xl overflow-hidden mb-4 group cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #0C2E8A, #F47B20, #FFBC4C)'
        }}
      />
      
      <div className="flex relative z-10">
        {/* Left Image Section */}
        <motion.div 
          className="w-1/3 h-48 relative flex-shrink-0 overflow-hidden"
          variants={imageVariants}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl "
            style={{
              background: 'linear-gradient(135deg, #0C2E8A 0%, #F5E9DC 50%, #F47B20 100%)',
              padding: '2px'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
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
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #F5E9DC, #F47B20)'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(10px)'
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
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

        {/* Right Content Section */}
        <motion.div 
          className="w-2/3 py-4 relative flex items-center"
          variants={contentVariants}
        >
          <div className="relative w-full h-full flex items-center">
            {/* Animated Background College Image */}
            <motion.div
              className="absolute inset-0 bg-no-repeat w-full bg-left lg:bg-center mr-0 ml-4 lg:mr-24 opacity-5 group-hover:opacity-10"
              style={{
                backgroundImage: `url(${getCollegeBackground(member.role)})`,
                backgroundSize: 'auto 70%',
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Content with enhanced styling */}
            <motion.div 
              className="relative z-10 p-5 w-full"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-lg lg:text-xl font-bold mb-3 leading-tight font-exo2"
                style={{
                  background: 'linear-gradient(135deg, #1f2937, #374151)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                whileHover={{
                  background: 'linear-gradient(135deg, #FFBC4C, #0C2E8A)',
                  backgroundClip: 'text',
                  // WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
                transition={{ duration: 0.3 }}
              >
                {member.name}
              </motion.h2>
              
              <motion.div
                className="w-12 h-1 mb-4 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #0C2E8A, #FFBC4C)'
                }}
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              <motion.p 
                className="text-sm lg:text-base text-gray-700 leading-relaxed font-quicksand"
                whileHover={{ color: '#4b5563' }}
                transition={{ duration: 0.3 }}
              >
                {member.role}
              </motion.p>
              
              {/* Decorative elements */}
              <motion.div 
                className="flex space-x-2 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i === 0 ? '#0C2E8A' : i === 1 ? '#F47B20' : '#FFBC4C'
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
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

export default MemberCard;
