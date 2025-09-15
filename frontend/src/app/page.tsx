import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MemberCard from '@/components/MemberCard'
import PanelMemberCard from '@/components/PanelMemberCard'
import Carousel from '@/components/Carousel'
import WelcomeMessage from '@/components/WelcomeMessage'
import GoogleMapLocation from '@/components/Map'
import ContactUs from '@/components/ContactUs'

const IITInternationalRelationsConclave = () => {
  // Panel Members Data
  const panelMembers = [
    {
      name: 'Professor Avinash Kumar Agarwal',
      role: 'Director, IIT Jodhpur',
      image: '/images/p1.jpg'
    },
    {
      name: 'Dr. Ankur Gupta',
      role: 'Dean of International Relations (DOIR), IIT Jodhpur',
      image: '/images/p2.jpg'
    },
    {
      name: 'Dr. Bhivraj Suthar',
      role: 'Associate Dean International Connect (ADIC), IIT Jodhpur',
      image: '/images/p3.jpg'
    }
  ];

  const participants = [
    {
      name: 'Dr Sanjeev Kumar Varshney',
      role: 'Former Adviser & Head, International Scientific Cooperation, Department of Science & Technology, Government of India',
      image: '/images/4.jpg'
    },
  {
    name: 'Shikha Sinha',
    role: 'Senior Advisor- International Cooperation, DAAD Regional Office, New Delhi',
    image: '/images/5.jpg'
  },
  {
    name: 'Apoorv Mahendru',
    role: 'Deputy Director and Head -- Marketing, DAAD Regional Office, New Delhi',
    image: '/images/7.jpg'
  },
  {
    name: 'Ms. Nibedita Dey',
    role: 'Assistant Manager, International Relations, IIT Palakkad',
    image: '/images/9.jpg'
  },
  {
    name: 'Dr. Deepak Sharma',
    role: 'Department of Mechanical Engineering, IIT Guwahati',
    image: '/images/11.jpg'
  },
  {
    name: 'Prof. Anandaroop Bhattacharya',
    role: 'Dean, International Relations, IIT Kharagpur',
    image: '/images/13.jpg'
  },
  {
    name: 'Ms. Koushiki Mukherjee',
    role: 'International Relations Executive, IIT Kharagpur',
    image: '/images/15.jpg'
  },
  {
    name: 'Mr. Arup Kumar Roy',
    role: 'Jr. International Relations Executive, IIT Kharagpur',
    image: '/images/17.jpg'
  },
  {
    name: 'Prof. Vimal Chandra Srivastava',
    role: 'Dean, International Relations, IIT Roorkee',
    image: '/images/20.jpg'
  },
  {
    name: 'Mr. Waseem Akhtar',
    role: 'Project Assistant (Admin), IIT Roorkee',
    image: '/images/21.jpg'
  },
  {
    name: 'Mr. Pramod Joshi',
    role: 'Project Assistant (Admin), IIT Roorkee',
    image: '/images/24.jpg'
  },
  {
    name: 'Prof. Santosh K Singh',
    role: 'PIC, International Relations, IIT BHU, Varanasi',
    image: '/images/26.jpg'
  },
  {
    name: 'Prof. Tanmoy Maity',
    role: 'Associate Dean (International Relations & Alumni Affairs), IIT ISM, Dhanbad',
    image: '/images/27.jpg'
  },
  {
    name: 'Mr. Mritunjay Sharma',
    role: 'Assistant Registrar, International Relations & Alumni Affairs, IIT ISM, Dhanbad',
    image: '/images/30.jpg'
  },
  {
    name: 'Dr. Jayaramulu Kolleboyina',
    role: 'Dean (International Relations), IIT Jammu',
    image: '/images/31.jpg'
  },
  {
    name: 'Dr. Angshuman Kapil',
    role: 'Associate Dean (International Relations), IIT Jammu',
    image: '/images/33.jpg'
  },
  {
    name: 'Dr. Anil Verma',
    role: 'Dean, International Programmes, IIT Delhi',
    image: '/images/37.jpg'
  },
  {
    name: 'Prof. Sudarshan Kumar',
    role: 'Dean (International Relations), IIT Bombay',
    image: '/images/40.jpg'
  },
  {
    name: 'Ms. Chandrika Naik',
    role: 'MoU Lead and Coordinator for Outgoing students, Office of International Relations, IIT Bombay',
    image: '/images/m1.jpg'
  },
  {
    name: 'Prof. Rohit Sharma',
    role: 'Dean (International Relations), IIT Ropar',
    image: '/images/43.jpg'
  },
  {
    name: 'Mr. Lokesh',
    role: 'Junior Assistant, Office of International Relations, IIT Kanpur',
    image: '/images/45.jpg'
  },
  {
    name: 'Dr. Sharad Sinha',
    role: 'Head, International Relations, IIT Goa',
    image: '/images/47.jpg'
  },
  {
    name: 'Ms. Haritha Addepalli',
    role: 'Junior Assistant, Office of International and Alumni Affairs, IIT Tirupati',
    image: '/images/49.jpg'
  },
  {
    name: 'Mr. Amit Kumar Goswami',
    role: 'Junior Superintendent, Office of International and Alumni Affairs, IIT Tirupati',
    image: '/images/51.jpg'
  },
  {
    name: 'Prof. Satinder Kumar Sharma',
    role: 'Head, International Relations Division (IRD), IIT Mandi',
    image: '/images/53.jpg'
  },
  {
    name: 'Ms. Chandan Sharma',
    role: 'Senior Superintendent, Office of International Relations, IIT Mandi',
    image: '/images/55.jpg'
  },
  {
    name: 'Prof. Prabhat Kumar Upadhyay',
    role: 'Dean of International Relations, IIT Indore',
    image: '/images/56.jpg'
  },
  {
    name: 'Mr. Mohib Rahim',
    role: 'Executive Officer -- Academics, Office of International Relations, IIT Indore',
    image: '/images/59.jpg'
  },
  {
    name: 'Mr. Vinay Kumar',
    role: 'Junior Superintendent, Office of International Relations, IIT Indore',
    image: '/images/61.jpg'
  },
  {
    name: 'Dr. Nutan Kumar Tomar',
    role: 'Associate Dean, Resource, IIT Patna',
    image: '/images/m2.jpg'
  }
];

  return (
    <div 
      className="min-h-screen 
      relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-theme-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-theme-accent/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-theme-secondary/8 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-theme-tertiary/6 rounded-full blur-2xl animate-float"></div>
      </div>

      <Navbar />
      {/* Poster Section */}
      <section className="w-full mx-auto pt-24 relative z-10">
        <div className="flex justify-center">
          <Image 
            src="/images/poster.png" 
            alt="Conference Poster" 
            width={1200}
            height={800}
            className="w-full h-auto shadow-2xl"
          />
        </div>
      </section>
      
      {/* Welcome Section */}
      <WelcomeMessage />
      <Carousel />

      
      <div 
        className="max-w-7xl mx-auto px-4 py-12 relative z-10"
      >
        {/* Panel Members Section */}
        <section 
          id="panel" 
          className="mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-exo2 leading-16"
            style={{
              background: 'linear-gradient(135deg, #0C2E8A, #F47B20, #FFBC4C)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Organizing Panel
          </h2>
          
          {/* Panel member cards */}
          <div 
            className="space-y-8"
          >
            {panelMembers.map((member, index) => (
              <div
                key={index}
              >
                <PanelMemberCard member={member} />
              </div>
            ))}
          </div>
        </section>

        {/* Participants Section */}
        <section 
          id="participants"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-exo2 leading-16"
            style={{
              background: 'linear-gradient(135deg, #0C2E8A, #F47B20, #FFBC4C)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Distinguished Participants
          </h2>
          
          {/* Grid layout for 3 cards per row */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
          >
            {participants.map((member, index) => (
              <div
                key={index}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <GoogleMapLocation />

      <ContactUs />


      <Footer />
    </div>
  )
}

export default IITInternationalRelationsConclave
