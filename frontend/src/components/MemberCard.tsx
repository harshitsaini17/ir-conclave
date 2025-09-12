"use client";
import Image from "next/image";
import { useState } from "react";

interface Member {
  name: string;
  role: string;
  image: string;
}

interface MemberCardProps {
  member: Member;
}

const MemberCard = ({ member }: MemberCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Get college background image based on institution
  const getCollegeBackground = (role: string) => {
    if (role.includes("IIT Jodhpur")) return "/images/left-logo.jpg";
    if (role.includes("IIT Kharagpur")) return "/images/18.jpg";
    if (role.includes("IIT Roorkee")) return "/images/22.jpg";
    if (role.includes("IIT Bombay"))
      return "/images/39.jpg";
    if (role.includes("IIT Delhi")) return "/images/38.jpg";
    if (role.includes("IIT Madras"))
      return "/images/36.jpg";
    if (role.includes("IIT Kanpur"))
      return "/images/46.jpg";
    if (role.includes("IIT Guwahati"))
      return "/images/12.jpg";
    if (role.includes("IIT BHU")) return "/images/25.jpg";
    if (role.includes("IIT ISM")) return "/images/28.jpg";
    if (role.includes("IIT Jammu")) return "/images/32.jpg";
    if (role.includes("IIT Ropar")) return "/images/44.jpg";
    if (role.includes("IIT Goa")) return "/images/48.jpg";
    if (role.includes("IIT Tirupati"))
      return "/images/52.jpg";
    if (role.includes("IIT Mandi")) return "/images/54.jpg";
    if (role.includes("IIT Indore"))
      return "/images/58.jpg";
    if (role.includes("IIT Patna")) return "/images/63.jpg";
    if (role.includes("IIT Palakkad"))
      return "/images/10.jpg";
    if (role.includes("DAAD")) return "/images/6.jpg";
    return "/images/colleges/default-bg.jpg";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
      {/* Top Image Section */}
      <div className="h-48 relative bg-gray-200">
        {!imageError && member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
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
            </div>
          </div>
        )}
      </div>

      {/* Bottom Content Section */}
      <div className="p-6 bg-gray-100 relative min-h-[200px] flex flex-col">
        {/* Background College Image with Low Opacity */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-5"
          style={{
            backgroundImage: `url(${getCollegeBackground(member.role)})`,
            backgroundSize: 'auto 60%',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
            {member.name}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed flex-1">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
