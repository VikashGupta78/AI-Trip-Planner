import React from 'react';
import landingImg from '../assets/landingPage.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Content Section */}
      <div className="absolute top-0 left-0 right-0 h-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-lg space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 leading-tight">
            Discover Your Next <br className="hidden md:block" /> Adventure with AI:
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
            Personalized Itineraries at Your Fingertips
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Your personal trip planner and travel curator, creating custom itineraries 
            tailored to your interests and budget.
          </p>
          <button onClick={()=> {navigate('/create-trip')}} className="btn btn-primary w-full md:w-auto px-8 py-3 text-lg font-medium">
            Get Started, It's Free
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={landingImg}
            alt="Landing"
            className="w-full max-w-2xl object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Background Blur Circle */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-50 -z-10"></div>
    </div>
  );
}

export default Home;
