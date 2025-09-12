import Image from 'next/image';

const WelcomeMessage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 decoration-2 underline-offset-4">
            From the desk of Dr. Ankur Gupta, Dean of International Relations– IR Conclave 2025
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Photo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg border-4 border-gray-300">
              <Image
                src="/images/p2.jpg"
                alt="Dr. Ankur Gupta, Dean of International Relations"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Message */}
          <div className="lg:w-2/3 space-y-6">
            <div className="text-lg leading-relaxed text-gray-800">
              <p className="mb-6">
                <span className="font-semibold">Dear Esteemed Guests and Participants,</span>
              </p>
              
              <p className="mb-6 text-justify">
                It is with immense pleasure that I welcome you to the <span className="font-semibold">All IIT International Relations Conclave 2025</span>, being 
                organized at the <span className="font-semibold">Indian Institute of Technology Jodhpur on 03-04 October 2025</span>.
              </p>
              
              <p className="mb-6 text-justify">
                This conclave marks a significant milestone in our ongoing efforts to foster global academic collaboration, 
                interdisciplinary dialogue, and innovation-driven partnerships. We are honored to host distinguished speakers, 
                scholars, and professionals who bring with them a wealth of experience and insight. Your presence enriches the spirit 
                of this gathering and strengthens our shared commitment to advancing international engagement in higher 
                education and research.
              </p>
              
              <p className="mb-6 text-justify">
                Over the course of these two days, we look forward to thought-provoking discussions, meaningful networking, and 
                the forging of new alliances that will shape the future of international relations in academia and beyond.
              </p>
              
              <p className="mb-8 text-justify">
                On behalf of <span className="font-semibold">IIT Jodhpur</span>, I extend my heartfelt gratitude to each of you for joining us and contributing to the success 
                of this conclave. We hope your time here is intellectually rewarding and personally memorable.
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Warm regards,</p>
                <p className="font-bold text-lg">Dr. Ankur Gupta</p>
                <p className="font-medium">Dean, International Relations</p>
                <p className="font-medium">Indian Institute of Technology Jodhpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
