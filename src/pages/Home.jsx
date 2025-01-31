import React from "react";
import "../App.css";

import abhaya from "../image/abhaya.jpg";
import harry from "../image/harry.jpg";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center w-full max-w-3xl border border-white/40">
        <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">
          JJTechHub
        </h1>
        <h2 className="text-xl text-gray-700 mt-2">Jana Jagriti Tech Hub</h2>
        <p className="text-gray-600 mt-4 text-lg">
          A platform dedicated to empowering Computer Engineering students with 
          quality resources, mentorship, and hands-on learning.
        </p>

      

      </div>

      {/* Mentors Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Mentor: Abhaya */}
        <div className="flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">
          <img src={abhaya} alt="Abhaya" className="w-36 h-36 rounded-full shadow-lg" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Abhaya</h2>
          <p className="text-gray-600 text-sm">Lead Instructor | Computer Engineering</p>
        </div>

        {/* Mentor: Harry */}
        <div className="flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">
          <img src={harry} alt="Harry" className="w-36 h-36 rounded-full shadow-lg" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">Harry</h2>
          <p className="text-gray-600 text-sm">Senior Developer | Mentor</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
