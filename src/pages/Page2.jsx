import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import React from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page2 = () => {
  useGSAP(() => {
    gsap.from(".rotateText", {
      transform: 'rotateX(-80deg)',
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: '.rotateText',
        start: "top 70%",
        end: "top -270%",
        scrub: 2
      }
    });
  });

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #60A5FA, #A78BFA, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glass-divider {
          background: linear-gradient(90deg, transparent, #60A5FA, #A78BFA, #EC4899, transparent);
          height: 2px;
          position: relative;
          overflow: hidden;
        }
        .glass-divider::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #60A5FA, #A78BFA);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div id='design' className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center py-20 relative overflow-hidden'>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse pointer-events-none" />

        {/* Subtle glow effects */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10">
          <h3 className='text-gray-300 text-lg font-[font3] mb-10 relative'>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              © Sriman.M | Designed and Developed
            </span>
          </h3>

          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              IMPACTFUL
            </h1>
          </div>
          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              Design
            </h1>
          </div>
          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              is the
            </h1>
          </div>
          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              Design
            </h1>
          </div>
          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              that
            </h1>
          </div>
          <div className="rotateText">
            <h1 className='text-[35vw] md:text-[28vw] gradient-text font-[font5] uppercase leading-[30vw] drop-shadow-lg'>
              Works!
            </h1>
          </div>

          <div className='glass-divider w-1/2 mx-auto mt-10 rounded-full shadow-lg'></div>
        </div>
      </div>
    </>
  );
};

export default Page2;