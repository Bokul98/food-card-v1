import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center mb-12">
          {/* Logo and Header */}
          <div className="mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About ProductApp
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              Welcome to <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ProductApp</span> – 
              your ultimate destination for discovering amazing products at unbeatable prices.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our mission is to connect you with high-quality products from trusted sellers worldwide. 
              Whether you're looking for the latest tech gadgets, fashion essentials, home decor, or everyday necessities, 
              ProductApp offers a curated selection that meets your needs and exceeds your expectations.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-sm md:text-base text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-sm md:text-base text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Vision and Values Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Our Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To become the world's most trusted marketplace where quality meets affordability, 
              making premium products accessible to everyone, everywhere.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To revolutionize online shopping by providing exceptional customer service, 
              competitive prices, and a seamless shopping experience that delights our customers.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Why Choose Us?</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Fast delivery, secure payments, easy returns, and a commitment to quality. 
              Join millions of satisfied customers who trust ProductApp for their shopping needs!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            Shop Smart. Live Better. Choose ProductApp!
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;