import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container m-4 md:m-8 relative">
      {/* Content */}
      <div className="content-container flex flex-col items-center justify-start">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">About Gemini Landscaping</h2>
        <p className="text-lg md:text-base text-center w-3/6 text-[#CAD2C5]">
          At Gemini Landscaping, we're more than just a landscaping company — we're your dedicated partner in cultivating exceptional outdoor spaces across Vancouver Island. Our mission is to provide unparalleled quality and service to both residential stratas and commercial properties. With deep roots on Vancouver Island, our local expertise and insights benefit your landscape, ensuring it thrives and stands out.
        </p>
        <div className="core-values-container mt-4 w-4/6 md:mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="core-value bg-white rounded-lg shadow-lg p-4 md:p-8 flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Transparent Communication:</h2>
            <p className="text-base md:text-md text-center max-w-screen-md">Your peace of mind is our top priority. We believe in transparent communication, actively listening to your needs and acting promptly to address them.</p>
          </div>
          <div className="core-value bg-white rounded-lg shadow-lg p-4 md:p-8 flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Efficient Operations:</h2>
            <p className="text-base md:text-md text-center max-w-screen-md">From initial estimates to final invoicing, we are committed to delivering efficient and prompt service. Our goal is to streamline operations to save you time and effort.</p>
          </div>
          <div className="core-value bg-white rounded-lg shadow-lg p-4 md:p-8 flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Unwavering Reliability:</h2>
            <p className="text-base md:text-md text-center max-w-screen-md">We have achieved steady growth thanks to our unwavering commitment to service quality. You can rely on us to consistently deliver exceptional results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

