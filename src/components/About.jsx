import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container m-8 relative">      

      {/* Content */}
      <div className="content-container flex flex-col items-center justify-start w-screen">
        <h2 className="text-4xl font-bold mb-4 text-white">About Gemini Landscaping</h2>
        <p className="text-lg text-center max-w-screen-lg text-[#CAD2C5]">
          At Gemini Landscaping, we're more than just a landscaping company — we're your dedicated partner in cultivating exceptional outdoor spaces across Vancouver Island. Our mission is to provide unparalleled quality and service to both residential stratas and commercial properties. With deep roots on Vancouver Island, our local expertise and insights benefit your landscape, ensuring it thrives and stands out.
        </p>
        <div className="core-values-container mt-6 flex space-x-6 flex-col md:flex-row md:space-x-4">
          
          <div className="container flex flex-row space-y-4 mt-4 space-x-4 items-center">
            {/* Core Value: Transparent Communication */}
            <div className="core-value relative bg-white rounded-full shadow-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2">Transparent Communication:</h2>
              <p className="text-md text-center max-w-lg">Your peace of mind is our top priority. We believe in transparent communication, actively listening to your needs and acting promptly to address them.</p>
            </div>

            {/* Core Value: Efficient Operations */}
            <div className="core-value relative bg-white rounded-full shadow-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2">Efficient Operations:</h2>
              <p className="text-md text-center max-w-lg">From initial estimates to final invoicing, we are committed to delivering efficient and prompt service. Our goal is to streamline operations to save you time and effort.</p>
            </div>

            {/* Core Value: Unwavering Reliability */}
            <div className="core-value relative bg-white rounded-full shadow-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2">Unwavering Reliability:</h2>
              <p className="text-md text-center max-w-lg">We have achieved steady growth thanks to our unwavering commitment to service quality. You can rely on us to consistently deliver exceptional results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
