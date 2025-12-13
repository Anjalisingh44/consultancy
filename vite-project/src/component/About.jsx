import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-16 sm:py-20 bg-gradient-to-b from-white via-[#e9f3ff] to-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2]">
          Welcome to Agartha Education Foundation
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Your Trusted Study Abroad Partner
        </h2>

        <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Agartha Global Education, we guide students toward international opportunities
          with expert counseling, transparent guidance, and personalized support. From choosing
          the right country and university to visa processing and pre-departure preparation,
          we ensure a seamless journey to your global academic dream.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-10 sm:mt-12">
          
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl sm:text-3xl font-bold">🎓</span>
            </div>
            <p className="mt-3 sm:mt-4 font-semibold text-gray-800 text-sm sm:text-base">
              Expert Academic Counseling
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl sm:text-3xl font-bold">🌍</span>
            </div>
            <p className="mt-3 sm:mt-4 font-semibold text-gray-800 text-sm sm:text-base">
              Global Study Destinations
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl sm:text-3xl font-bold">📄</span>
            </div>
            <p className="mt-3 sm:mt-4 font-semibold text-gray-800 text-sm sm:text-base">
              Professional Documentation Support
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl sm:text-3xl font-bold">🛂</span>
            </div>
            <p className="mt-3 sm:mt-4 font-semibold text-gray-800 text-sm sm:text-base">
              High Visa Success Guidance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
