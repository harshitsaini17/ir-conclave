import Image from 'next/image'

const WelcomeMessage = () => {
  return (
    <section className="py-20 bg-gray-50" id='welcome'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            From the desk of Dr. Ankur Gupta
          </h2>
          <div className="w-32 h-1 mx-auto bg-gray-300 rounded-full" />
          <p className="text-xl md:text-2xl mt-4 font-medium text-gray-700">
            Dean of International Relations – IR Conclave 2025
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Photo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/p2.jpg"
                  alt="Dr. Ankur Gupta, Dean of International Relations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Message */}
          <div className="lg:w-2/3 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="text-lg leading-relaxed text-gray-800">
                <p className="mb-6">
                  <span className="font-semibold text-xl text-gray-900">
                    Dear Esteemed Guests and Participants,
                  </span>
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  It is with immense pleasure that I welcome you to the{' '}
                  <span className="font-semibold text-gray-900">
                    All IIT International Relations Conclave 2025
                  </span>, being organized at the{' '}
                  <span className="font-semibold text-gray-900">
                    Indian Institute of Technology Jodhpur on 03-04 October 2025
                  </span>.
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  This conclave marks a significant milestone in our ongoing efforts to foster global academic collaboration, 
                  interdisciplinary dialogue, and innovation-driven partnerships. We are honored to host distinguished speakers, 
                  scholars, and professionals who bring with them a wealth of experience and insight. Your presence enriches the spirit 
                  of this gathering and strengthens our shared commitment to advancing international engagement in higher 
                  education and research.
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  Over the course of these two days, we look forward to thought-provoking discussions, meaningful networking, and 
                  the forging of new alliances that will shape the future of international relations in academia and beyond.
                </p>
                
                <p className="mb-8 text-justify leading-relaxed">
                  On behalf of{' '}
                  <span className="font-semibold text-gray-900">
                    IIT Jodhpur
                  </span>, I extend my heartfelt gratitude to each of you for joining us and contributing to the success 
                  of this conclave. We hope your time here is intellectually rewarding and personally memorable.
                </p>
                
                <div className="space-y-2 p-6 rounded-xl bg-gray-100 border border-gray-200">
                  <p className="font-medium text-gray-700">Warm regards,</p>
                  <p className="font-bold text-xl text-gray-900">
                    Dr. Ankur Gupta
                  </p>
                  <p className="font-medium text-gray-700">Dean, International Relations</p>
                  <p className="font-medium text-gray-700">Indian Institute of Technology Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeMessage
