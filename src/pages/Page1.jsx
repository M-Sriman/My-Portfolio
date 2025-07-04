import React, { useEffect, useRef, useState } from 'react';
import Tilttext from '../components/Tilttext';
import Page1botton from '../components/Page1botton';
import heroImage from '../components/images/hero.jpg';

const Page1 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const tiltRef = useRef(null);
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const tl = {
      set: (target, props) => {
        if (target.current) Object.assign(target.current.style, props);
      },
      to: (target, props) => {
        if (target.current) {
          target.current.style.transition = `all ${props.duration || 1}s ${props.ease || 'ease'} ${props.delay || 0}s`;
          setTimeout(() => Object.assign(target.current.style, props), 50);
        }
      }
    };

    tl.set(containerRef, { opacity: '0', transform: 'translateY(50px)' });
    tl.set(textRef, { opacity: '0', transform: 'translateY(80px)' });
    tl.set(imageRef, { opacity: '0', transform: 'scale(0.8) translateY(30px)' });
    tl.set(buttonRef, { opacity: '0', transform: 'translateY(20px)' });

    setTimeout(() => {
      tl.to(containerRef, { opacity: '1', transform: 'translateY(0)', duration: 1.2 });
      tl.to(textRef, { opacity: '1', transform: 'translateY(0)', duration: 1.2, delay: 0.3 });
      tl.to(imageRef, { opacity: '1', transform: 'scale(1) translateY(0)', duration: 1.2, delay: 0.6 });
      tl.to(buttonRef, { opacity: '1', transform: 'translateY(0)', duration: 1.2, delay: 0.9 });
    }, 100);
  }, []);

  const handleImageHover = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.05) rotate(2deg)';
      imageRef.current.style.transition = 'transform 0.4s ease';
    }
  };

  const handleImageLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1) rotate(0deg)';
      imageRef.current.style.transition = 'transform 0.4s ease';
    }
  };

  const Particle = ({ x, y, delay, size }) => (
    <div
      className="absolute rounded-full opacity-60"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, #60A5FA, #A78BFA)',
        animation: `float 4s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .cursor-light {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div
        className="cursor-light"
        style={{ left: mousePosition.x, top: mousePosition.y, opacity: 0.4 }}
      />

      <div id="home" className="min-h-screen px-2 sm:px-4 md:px-6 py-2 sm:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <Particle key={i} x={Math.random() * 100} y={Math.random() * 100} delay={Math.random() * 3} size={Math.random() * 4 + 2} />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />

        <div ref={containerRef} className="glass-effect min-h-[90vh] w-full rounded-3xl p-4 sm:p-6 md:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl" />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-10 mt-4 md:mt-2 px-4 md:px-10 relative z-10">
            <div ref={textRef} className="text-white space-y-8 md:w-2/3 mt-6 md:mt-0 md:translate-y-[-40px]">
              <div ref={tiltRef} className="space-y-6">
                <Tilttext />
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Passionate about creating digital experiences that blend beautiful design with powerful functionality. 
                  I transform ideas into reality through clean code and innovative solutions.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['DSA', 'WEB DEVELOPMENT', 'APP DEVELOPMENT'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/10 hover-lift transition-all duration-300 cursor-pointer">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div ref={buttonRef} className="mt-8">

              </div>
            </div>

            <div className="flex justify-center md:justify-end md:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  ref={imageRef}
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                  src={heroImage}
                  alt="Developer"
                  className="relative w-[280px] sm:w-[320px] md:w-[380px] mt-20 rounded-2xl shadow-2xl border-2 border-white/20 cursor-pointer transition-all duration-300 hover:border-white/40"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/350x400?text=Add+hero.jpg';
                  }}
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
