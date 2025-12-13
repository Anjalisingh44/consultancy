import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-gray-700 mt-2 sm:mt-3 text-sm sm:text-base">
          Our support team is always ready to assist you. Feel free to reach out anytime.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-12 lg:gap-16 mx-auto">
        
        {/* Left: Form and Contact Info */}
        <div className="flex-1 relative flex flex-col">
          <div className="bg-gradient-to-br from-white via-sky-50 to-white p-6 sm:p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-transparent bg-clip-text">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold text-sm sm:text-base">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm sm:text-base">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm sm:text-base">Mobile</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile"
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-white px-6 sm:px-8 py-2 sm:py-3 mt-4 rounded hover:bg-sky-900 flex items-center gap-2 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div className="mt-8 lg:mt-10 w-full lg:w-72 lg:absolute lg:-bottom-12 lg:-right-0 bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-white rounded-2xl shadow-md p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">LET'S HAVE A TALK</h2>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm">
              Connect with Consultanchy Agartha today and turn your vision into reality
            </p>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lime-600" />
                <span>Baneshwor, Kathmandu</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lime-600" />
                <span>+977 9861705553, +977 9761140183</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lime-600" />
                <span>agartha.edu@gmail.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4 sm:mt-6 text-xl justify-center lg:justify-start">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaWhatsapp />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 mt-10 lg:mt-0 flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-xl px-4 sm:px-5 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#2ea4ff] to-[#7b3ff2] text-transparent bg-clip-text">
              Our Location
            </h2>
            <iframe
              title="Kathmandu Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1766.4271964469513!2d85.33701348310427!3d27.69089486034547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1996e671e06d%3A0xe08613032eff9ee1!2sBibhuti%20Janak%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1764430873884!5m2!1sen!2snp" 
              width="100%"
              height="400"
              className="rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contactus;
