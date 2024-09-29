// components/Navbar.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center mb-5">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:mt-[-200px]">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
            Explore
            <br />
            More
          </h1>
          <p className="text-sm md:text-base text-gray-700">
            You can pre plan where to put their luggage as You create an
            itinerary. We can also help You find the best affordable
            accommodation, find exciting and meaningful activities while
            introducing You to undiscovered parts of Indonesia especially Bali
            and island surroundings, so that You can have an authentic cultural
            experience like the locals.
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
              More Information
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-md border border-black hover:bg-gray-100 transition duration-300">
              Get a Price
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-orange-500 rounded-full w-[80%] h-[80%] absolute top-[10%] right-0 z-0"></div>
          <img
            src="https://besthub.besthostels.co.id/assets/images/why-besthub21.svg"
            alt="Traveler with camera"
            className="relative z-10 w-[80%] h-auto rounded-lg "
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md z-20 max-w-[60%]">
            <img
              src="../image/image 3.png"
              alt="Traveler with camera"
              style={{ height: '60px', width: 'auto', marginTop: '-35px' }}
              className="w-[10%] h-auto rounded-lg mt:mb-[-200px]"
            />
            <p className="text-sm font-medium text-black mt-3">
              &quot;Bali are very amazing, I enjoy my holiday here&quot;
            </p>
            <p className="text-orange-500 font-bold mt-4 ">FATIMAH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
