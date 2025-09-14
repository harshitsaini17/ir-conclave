import Image from 'next/image'

const WelcomeMessage = () => {
  return (
    <section className="py-20 bg-gray-50" id='welcome'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Message from the Director
          </h2>
          <div className="w-32 h-1 mx-auto bg-gray-300 rounded-full" />
          <p className="text-xl md:text-2xl mt-4 font-medium text-gray-700">
            Indian Institute of Technology Jodhpur – IR Conclave 2025
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Photo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/p1.jpg"
                  alt="Prof. Avinash Kumar Agarwal, Director, IIT Jodhpur"
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
                    Dear Colleagues and Guests,
                  </span>
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  It is my privilege to welcome you to the{' '}
                  <span className="font-semibold text-gray-900">
                    All IIT International Relations Conclave 2025
                  </span>, being organized at the{' '}
                  <span className="font-semibold text-gray-900">
                    Indian Institute of Technology Jodhpur on 03–04 October 2025
                  </span>.
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  IIT Jodhpur is honored to serve as the organizing institute for this prestigious conclave, bringing together academic representatives to engage in meaningful dialogue on the present status and future of international collaboration. This event reflects our deep commitment to fostering a globally connected academic ecosystem and advancing India's role in shaping the international education and research landscape.
                </p>
                
                <p className="mb-6 text-justify leading-relaxed">
                  As an institution, IIT Jodhpur remains steadfast in its mission to nurture international relations through strategic partnerships, student and faculty mobility, and collaborative research initiatives. The IR Conclave 2025 is a vital step in strengthening these efforts, offering a platform to share best practices, explore new opportunities, and build enduring relationships across borders.
                </p>
                
                <p className="mb-8 text-justify leading-relaxed">
                  We are confident that the discussions and connections formed during this conclave will contribute to a more inclusive and innovative global academic landscape. I extend my sincere appreciation to all attendees for your presence and participation, and I look forward to the impactful outcomes this gathering will inspire.
                </p>
                
                <div className="space-y-2 p-6 rounded-xl bg-gray-100 border border-gray-200">
                  <p className="font-medium text-gray-700">With warm regards,</p>
                  <p className="font-bold text-xl text-gray-900">
                    Prof. Avinash Kumar Agarwal
                  </p>
                  <p className="font-medium text-gray-700">Director</p>
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
