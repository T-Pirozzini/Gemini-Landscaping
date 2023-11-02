import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container h-screen relative">
      {/* Parallax Background Image */}
      <div className="parallax-bg"></div>

      {/* Content */}
      <div className="content-container flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold mb-4 text-white">About Gemini Landscaping</h2>
        <p className="text-lg text-center max-w-lg text-white">
          At Gemini Landscaping, we're more than just a landscaping company — we're your dedicated partner in cultivating exceptional outdoor spaces across Vancouver Island. Our mission is to provide unparalleled quality and service to both residential stratas and commercial properties. With deep roots on Vancouver Island, our local expertise and insights benefit your landscape, ensuring it thrives and stands out.
        </p>
        <div className="core-values-container mt-6 flex flex-col md:flex-row md:space-x-4 text-white">
          {/* Core Value: Transparent Communication */}
          <div className="core-value rounded-full bg-green-900 p-4 text-center flex items-center">
            <h2 className="text-lg font-semibold">Transparent Communication:</h2>
            <p className="text-lg text-center max-w-lg">
              Your peace of mind is our top priority. We believe in transparent communication, actively listening to your needs and acting promptly to address them.
            </p>
          </div>

          {/* Core Value: Efficient Operations */}
          <div className="core-value rounded-full bg-green-900 p-4 text-center flex items-center mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Efficient Operations:</h2>
            <p className="text-lg text-center max-w-lg">
              From initial estimates to final invoicing, we are committed to delivering efficient and prompt service. Our goal is to streamline operations to save you time and effort.
            </p>
          </div>

          {/* Core Value: Unwavering Reliability */}
          <div className="core-value rounded-full bg-green-900 p-4 text-center flex items-center mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Unwavering Reliability:</h2>
            <p className="text-lg text-center max-w-lg">
              We have achieved steady growth thanks to our unwavering commitment to service quality. You can rely on us to consistently deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
