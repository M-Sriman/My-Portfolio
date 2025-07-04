import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Tilttext = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="px-4 py-10 sm:px-8 sm:py-20 md:px-16 md:py-28">
      <div className="text-center sm:text-left">
        <h1
          ref={(el) => (linesRef.current[0] = el)}
          className="text-[6vw] sm:text-[5vw] md:text-[4vw] uppercase font-[font1] leading-tight text-yellow-50"
        >
          I am <span className="text-[#58A6FF]">DEV MODE™</span>
        </h1>
        <h1
          ref={(el) => (linesRef.current[1] = el)}
          className="text-[8vw] sm:text-[7vw] md:text-[6vw] uppercase font-[font1] leading-tight text-yellow-50"
        >
          DEVELOPER
        </h1>
        <h1
          ref={(el) => (linesRef.current[2] = el)}
          className="text-[6vw] sm:text-[5vw] md:text-[4vw] uppercase font-[font1] leading-tight text-yellow-50"
        >
          TO HIRE
        </h1>
      </div>
    </div>
  );
};

export default Tilttext;
