import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6 pt-20">
        <div className="max-w-4xl bg-white/80 backdrop-blur-lg dark:bg-gray-800/80 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About Smart Campus
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
            Welcome to <strong>Smart Campus</strong>, a revolutionary platform designed to enhance student life and improve the overall educational experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              📚 Interactive course management
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              💬 Real-time collaboration tools
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              ✅ Automated grading and assessment
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              ☁️ Secure cloud-based storage
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-10 text-center">
            Join us and transform education with <strong>Smart Campus</strong> 🚀
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-3">
            Why Choose Smart Campus?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Smart Campus is more than just a platform—it's a movement towards a brighter future for students. With state-of-the-art technology and a student-centric approach, we empower learners to take control of their education and career growth.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Whether you're looking for academic support, career opportunities, or social connections, Smart Campus is here to make your journey smoother, more engaging, and highly rewarding.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Join Us Today!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Be a part of the Smart Campus community and experience a smarter way to learn, connect, and grow. Together, let's shape the future of education and student life! 🚀
          </p>

          {/* Contact Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              Have any questions or need assistance? Reach out to us via the details below or fill out the form to send us a message.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Contact Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> himeshpatel0704@gmail.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Phone:</strong> +91 73590 67327
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Address:</strong> 3rd Floor, Pramukh Tangent, Sargasan Cross Road, Grandhinagar, Gujarat 382421
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send Us a Message</h3>
                <form action="#" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
