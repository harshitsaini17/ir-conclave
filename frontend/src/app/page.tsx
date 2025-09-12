import React from 'react';
import MemberCard from '@/components/MemberCard';
import PanelMemberCard from '@/components/PanelMemberCard';

const IITInternationalRelationsConclave = () => {
  const panelMembers = [
    {
      name: 'Professor Avinash Kumar Agarwal',
      role: 'Director, IIT Jodhpur',
      image: '/images/panel/avinash-agarwal.jpg'
    },
    {
      name: 'Dr. Ankur Gupta',
      role: 'Dean of International Relations (DOIR)',
      image: '/images/panel/ankur-gupta.jpg'
    },
    {
      name: 'Dr. Bhivraj Suthar',
      role: 'Associate Dean International Connect (ADIC)',
      image: '/images/panel/bhivraj-suthar.jpg'
    }
  ];

  const participants = [
    { name: 'Shikha Sinha', role: 'Senior Advisor- International Cooperation, DAAD Regional Office, New Delhi' },
    { name: 'Apoorv Mahendru', role: 'Deputy Director and Head -- Marketing, DAAD Regional Office, New Delhi' },
    { name: 'Nibedita Dey', role: 'Assistant Manager, International Relations, IIT Palakkad' },
    { name: 'Dr. Deepak Sharma', role: 'Department of Mechanical Engineering, IIT Guwahati' },
    { name: 'Prof. Anandaroop Bhattacharya', role: 'Dean, International Relations, IIT Kharagpur' },
    { name: 'KOUSHIKI MUKHERJEE', role: 'International Relations Executive, IIT Kharagpur' },
    { name: 'Arup Kumar Roy', role: 'Jr. International Relations Executive, IIT Kharagpur' },
    { name: 'Prof. Vimal Chandra Srivastava', role: 'Dean, International Relations, IIT Roorkee' },
    { name: 'Waseem Akhtar', role: 'Project Assistant (Admin), IIT Roorkee' },
    { name: 'Pramod Joshi', role: 'Project Assistant (Admin), IIT Roorkee' },
    { name: 'Prof. Santosh K Singh', role: 'PIC, International Relations, IIT BHU' },
    { name: 'Prof. Tanmoy Maity', role: 'Associate Dean (International Relations & Alumni Affairs), IIT ISM, Dhanbad' },
    { name: 'Mritunjay Sharma', role: 'Assistant Registrar, International Relations & Alumni Affairs, IIT ISM, Dhanbad' },
    { name: 'Dr. Jayaramulu Kolleboyina', role: 'Dean (International Relations), IIT Jammu' },
    { name: 'Dr. Angshuman Kapil', role: 'Associate Dean (International Relations), IIT Jammu' },
    { name: 'Prof. Raghunathan Rengaswamy', role: 'Dean, Global Engagement, IIT Madras' },
    { name: 'Dr. Anil Verma', role: 'Dean, International Programmes, IIT Delhi' },
    { name: 'Prof. Sudarshan Kumar', role: 'Dean (International Relations), IIT Bombay' },
    { name: 'Piyush Kumar', role: 'Junior Administrative Assistant, Office of International Relations, IIT Bombay' },
    { name: 'Prof. Rohit Sharma', role: 'Dean (International Relations), IIT Ropar' },
    { name: 'Lokesh', role: 'Junior Assistant, Office of International Relations, IIT Kanpur' },
    { name: 'Dr. Sharad Sinha', role: 'Head, International Relations, IIT GOA' },
    { name: 'Haritha Addepalli', role: 'Junior Assistant, Office of International and Alumni Affairs, IIT Tirupati' },
    { name: 'Amit Kumar Goswami', role: 'Junior Superintendent, Office of International and Alumni Affairs, IIT Tirupati' },
    { name: 'Prof. Satinder Kumar Sharma', role: 'Head, International Relations Division (IRD), IIT Mandi' },
    { name: 'Chandan Sharma', role: 'Senior Superintendent, Office of International Relations, IIT Mandi' },
    { name: 'Prof. Prabhat Kumar Upadhyay', role: 'Dean of International Relations, IIT Indore' },
    { name: 'Mohib Rahim', role: 'Executive Officer -- Academics, Office of International Relations, IIT Indore' },
    { name: 'Vinay Kumar', role: 'Junior Superintendent, Office of International Relations, IIT Indore' },
    { name: 'Dr. Nutan Kumar Tomar', role: 'Associate Dean, Resource, IIT Patna' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <img src="/images/iit-jodhpur-logo.jpg" alt="IIT Jodhpur" className="h-16 w-16" />
              <img src="/images/iit-logo.jpg" alt="IIT" className="h-16 w-16" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                All IITs International Relations Conclave - 2025
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Indian Institute of Technology Jodhpur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-blue-200">Home Page</a>
            <a href="#" className="hover:text-blue-200">Visit IIT Jodhpur</a>
            <a href="#" className="hover:text-blue-200">Travel Guidelines to Jodhpur</a>
            <a href="#" className="hover:text-blue-200">IIT Jodhpur on Google Map</a>
            <a href="#" className="hover:text-blue-200">Contact Us</a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Panel Members Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Panel Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {panelMembers.map((member, index) => (
              <PanelMemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Participants Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Participants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {participants.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IITInternationalRelationsConclave;
