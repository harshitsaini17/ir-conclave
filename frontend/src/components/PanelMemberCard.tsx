"use client";
import Image from "next/image";
import { useState } from "react";

interface PanelMember {
  name: string;
  role: string;
  image: string;
}

interface PanelMemberCardProps {
  member: PanelMember;
}

const PanelMemberCard = ({ member }: PanelMemberCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Get college background image based on institution (same as MemberCard)
  const getCollegeBackground = (role: string) => {
    if (role.includes("IIT Jodhpur")) return "/images/left-logo.jpg";
    if (role.includes("IIT Kharagpur")) return "/images/18.jpg";
    if (role.includes("IIT Roorkee")) return "/images/22-bg.jpg";
    if (role.includes("IIT Bombay"))
      return "/images/colleges/iit-bombay-bg.jpg";
    if (role.includes("IIT Delhi")) return "/images/colleges/iit-delhi-bg.jpg";
    if (role.includes("IIT Madras"))
      return "/images/colleges/iit-madras-bg.jpg";
    if (role.includes("IIT Kanpur"))
      return "/images/colleges/iit-kanpur-bg.jpg";
    if (role.includes("IIT Guwahati"))
      return "/images/colleges/iit-guwahati-bg.jpg";
    if (role.includes("IIT BHU")) return "/images/colleges/iit-bhu-bg.jpg";
    if (role.includes("IIT ISM")) return "/images/colleges/iit-ism-bg.jpg";
    if (role.includes("IIT Jammu")) return "/images/colleges/iit-jammu-bg.jpg";
    if (role.includes("IIT Ropar")) return "/images/colleges/iit-ropar-bg.jpg";
    if (role.includes("IIT Goa")) return "/images/colleges/iit-goa-bg.jpg";
    if (role.includes("IIT Tirupati"))
      return "/images/colleges/iit-tirupati-bg.jpg";
    if (role.includes("IIT Mandi")) return "/images/colleges/iit-mandi-bg.jpg";
    if (role.includes("IIT Indore"))
      return "/images/58.jpg";
    if (role.includes("IIT Patna")) return "/images/63.jpg";
    if (role.includes("IIT Palakkad"))
      return "/images/10.jpg";
    if (role.includes("DAAD")) return "/images/6.jpg";
    return "/images/colleges/default-bg.jpg";
  };

  return (
    <div className="w-fullrounded-lg transition-shadow duration-300 overflow-hidden mb-12">
      <div className="flex">
        {/* Left Image Section - 20% */}
        <div className="w-1/5 h-64 relative bg-gray-200 flex-shrink-0">
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

        {/* Right Content Section - 80% */}
        <div className="w-4/5 py-6 bg-transparent relative items-center">
          <div className="bg-gray-100 flex items-center h-full">
            {/* Background College Image with Low Opacity */}
            <div
              className="absolute inset-0 bg-no-repeat bg-center mr-24 opacity-10"
              style={{
                backgroundImage: `url(${getCollegeBackground(member.role)})`,
                backgroundSize: 'auto 70%',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-8 w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {member.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelMemberCard;
