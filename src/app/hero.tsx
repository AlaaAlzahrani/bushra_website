"use client";

import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the animation after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div 
        className={`absolute top-0 left-0 right-0 h-20 bg-[#B6D0E2] bg-opacity-100 overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex justify-center items-center h-full">
          {["Learn", "Challenge", "Master"].map((word, index) => (
            <div
              key={word}
              className={`mx-4 transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="font-light italic text-white text-4xl">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography 
            variant="h1" 
            color="blue-gray"
            className="transition-colors duration-300 hover:text-[#B6D0E2] cursor-default"
          >
            <br/>
            <br/>
            Bushra Alzahrani || CIPD5 || MBA
            <br/>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-1xl text-[18px]"
          >
            Strategic People Professional Visionary, Talent Development Catalyst
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl leading-relax"
          >
            People Professional with a proven track record in multinational environments. A self-starter with a deep, practical understanding of diverse people profession areas, consistently delivering impactful solutions. 
            Known for sharp judgment and a natural talent for authentic communication and influence. 
            Thrives in fast-paced settings, offering expert counseling with an unwavering commitment to confidentiality.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect with me:
          </Typography>
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com/BushraAlzahran8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-400 hover:bg-blue-50 transition-colors"
            >
              <i className="fab fa-twitter text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/bushraalzahrani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 hover:bg-blue-50 transition-colors"
            >
              <i className="fab fa-linkedin-in text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;