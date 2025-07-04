import React, { useState, useEffect, useRef } from 'react';
import logo from './images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const Particle = ({ x, y, delay, size }) => (
    <div
      className="absolute rounded-full opacity-30"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, #60A5FA, #A78BFA)',
        animation: `headerFloat 6s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  return (
    <>
      <style jsx>{`
        @keyframes headerFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        .header-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }
        .glass-header {
          backdrop-filter: blur(20px);
          background: rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        .glass-header.scrolled {
          backdrop-filter: blur(25px);
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        }
        .nav-button {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, transparent, rgba(96,165,250,0.1));
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.3s ease;
        }
        .nav-button:hover {
          background: linear-gradient(135deg, rgba(96,165,250,0.1), rgba(167,139,250,0.1));
          border-color: rgba(96,165,250,0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(96,165,250,0.2);
        }
        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }
        .nav-button:hover::before {
          left: 100%;
        }
        .hire-button {
          background: linear-gradient(135deg, #60A5FA, #A78BFA);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(96,165,250,0.3);
        }
        .hire-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(96,165,250,0.4);
        }
        .hire-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .hire-button:hover::before {
          left: 100%;
        }
        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(96,165,250,0.3));
        }
        .mobile-menu {
          backdrop-filter: blur(20px);
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
      `}</style>

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'glass-header scrolled' : 'glass-header'
        }`}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Particle 
              key={i} 
              x={Math.random() * 100} 
              y={Math.random() * 100} 
              delay={Math.random() * 3} 
              size={Math.random() * 3 + 1} 
            />
          ))}
        </div>

        {/* Mouse glow effect */}
        <div
          className="header-glow"
          style={{ 
            left: mousePosition.x, 
            top: mousePosition.y, 
            opacity: 0.3 
          }}
        />

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 pointer-events-none" />

        {/* Left Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-sm opacity-30" />
            <img 
              src={logo} 
              alt="Logo" 
              className="relative h-8 w-8 rounded-lg logo-glow transition-all duration-300 hover:scale-110" 
            />
          </div>
          <h1 className="text-white text-lg font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MUDAVATH SRIMAN
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2 text-white text-sm font-medium relative z-10">
          {['Home', 'Skills', 'Projects', 'Design'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-button px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-300"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="hire-button text-white px-6 py-2 rounded-lg font-bold ml-2 transition-all duration-300"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden relative z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-button p-2 rounded-lg text-white focus:outline-none transition-all duration-300"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full mobile-menu flex flex-col items-center gap-4 py-6 md:hidden text-white font-medium shadow-2xl border-t border-slate-700/20 z-50 rounded-b-2xl mx-2 mt-2">
            {/* Mobile menu particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <Particle 
                  key={i} 
                  x={Math.random() * 100} 
                  y={Math.random() * 100} 
                  delay={Math.random() * 2} 
                  size={Math.random() * 2 + 1} 
                />
              ))}
            </div>
            
            {['Home', 'Skills', 'Design', 'Media'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-button px-6 py-3 rounded-lg transition-all duration-300 hover:text-blue-300 w-40 text-center"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="hire-button text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 w-40 text-center"
            >
              Hire Me
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;