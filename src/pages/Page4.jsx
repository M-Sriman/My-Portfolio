import React, { useEffect, useRef, useState } from 'react';

const Page4 = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const particleRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Enhanced heading animation
    const headingElement = headingRef.current;
    if (headingElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headingElement.style.animation = 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(headingElement);
    }

    // Enhanced card animations
    cardRefs.current.forEach((card, i) => {
      if (card) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              card.style.animation = `cardSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
              card.style.animationDelay = `${i * 0.2}s`;
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(card);
      }
    });
  }, []);

  const skills = [
    {
      title: '💻 DSA & Programming',
      // summary: 'Languages: C++, Python, JavaScript, TypeScript',
      details: 'Deep knowledge in C++ with over 300+ problems solved. Experienced in problem solving, recursion, and data structures.',
      icon: '🚀',
      techStack: ['C++', 'Python', 'JavaScript', 'TypeScript'],
      gradient: 'from-purple-600 via-pink-600 to-blue-600'
    },
    {
      title: '🌐 Web Development',
      // summary: 'Frontend: React.js, Next.js, Tailwind CSS, Shadcn/UI, GSAP, Three.js\nBackend: Node.js, Express.js, Supabase, Prisma ORM, MongoDB',
      details: 'Built scalable frontend and backend systems. Passionate about beautiful UI and optimized UX.',
      icon: '⚡',
      techStack: ['React.js', 'Next.js', 'Node.js','Express.js','Supabase', 'MongoDB','Taiwind CSS' , 'Shadcn/UI','GSAP','Three.js','Prisma ORM'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      title: '📱 App Development & Dev Tools',
      // summary: 'Mobile: React Native (Expo)\nDev Tools: Git, GitHub, Postman, Docker, Supabase CLI\nAPIs: Supabase Auth, Razorpay, Google Maps, Socket.io',
      details: 'Experience with mobile apps using React Native (Expo). Familiar with API integrations and developer workflows.',
      icon: '🎯',
      techStack: ['React Native', 'Docker','Supabase CLI', 'Git','Gitub', 'APIs'],
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
  ];

  const Particle = ({ x, y, delay }) => (
    <div
      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `float 3s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(88, 166, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(88, 166, 255, 0.6); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .heading-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .card-hover-effect:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }

        .tech-tag {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tech-tag:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .cursor-light {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(88,166,255,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div
        className="cursor-light"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: hoveredCard !== null ? 0.8 : 0.3
        }}
      />

      <div ref={sectionRef} id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div ref={particleRef} className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Particle
              key={i}
              x={Math.random() * 100}
              y={Math.random() * 100}
              delay={Math.random() * 2}
            />
          ))}
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1
              ref={headingRef}
              className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 heading-glow"
              style={{ opacity: 0 }}
            >
              My Skillset
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative bg-gradient-to-br ${skill.gradient} p-8 rounded-3xl shadow-2xl card-hover-effect group overflow-hidden backdrop-blur-sm border border-white/10`}
                style={{ opacity: 0, transform: 'translateY(50px)' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating icon */}
                <div className="absolute top-6 right-6 text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {skill.icon}
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    {skill.title}
                  </h2>
                  
                  <p className="text-white/90 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {skill.summary}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded details on hover */}
                <div className={`absolute inset-x-0 bottom-0 bg-black/90 backdrop-blur-sm rounded-b-3xl p-4 transition-all duration-500 ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <p className="text-white text-sm leading-relaxed text-center">
                    {skill.details}
                  </p>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;