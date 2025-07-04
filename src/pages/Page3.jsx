import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Smartphone, Globe, Users } from 'lucide-react';

const Page3 = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.dataset.projectId;
            setVisibleProjects(prev => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'cravio',
      title: 'Cravio',
      subtitle: 'Food Ordering & Delivery App',
      category: 'Full-stack App Development',
      timeline: 'May 2025 - June 2025',
      description: 'Built a full-stack food ordering app for restaurants using Expo (React Native) and Supabase.',
      features: [
        'Product listing & shopping cart',
        'Admin features & dashboard',
        'Razorpay payment integration',
        'Real-time updates',
        'Push notifications'
      ],
      techStack: ['React Native', 'Supabase', 'TypeScript', 'Razorpay', 'EAS'],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-green-400 to-blue-500',
      bgGradient: 'from-green-400/10 to-blue-500/10'
    },
    {
      id: 'echoes',
      title: 'Echoes',
      subtitle: 'Real-Time Developer Community Platform',
      category: 'Full-stack Web Development',
      timeline: 'June 2025 - Present',
      description: 'Built a full-stack Reddit-style platform for developers to share posts, code insights, and discussions in real time.',
      features: [
        'Threaded discussions',
        'Community creation',
        'Real-time messaging',
        'Code sharing & insights',
        'Responsive UI design'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'Supabase', 'Socket.io', 'Tailwind CSS'],
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-400/10 to-pink-500/10'
    },
    {
      id: 'iphone',
      title: 'iPhone 15 Pro',
      subtitle: '3D Product Landing Page',
      category: 'Frontend Development',
      timeline: 'Nov 2024 - Dec 2024',
      description: 'Developed a fully responsive frontend clone of Apple\'s iPhone 15 Pro website using React.js and TailwindCSS.',
      features: [
        'Responsive design',
        'GSAP scroll animations',
        'Three.js 3D rendering',
        'Interactive product showcase',
        'Smooth user experience'
      ],
      techStack: ['React.js', 'TailwindCSS', 'GSAP', 'Three.js'],
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-400/10 to-purple-500/10'
    }
  ];

  const Particle = ({ x, y, delay, size }) => (
    <div
      className="absolute rounded-full opacity-40"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, #60A5FA, #A78BFA)',
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        .cursor-light {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }
        .glass-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(96, 165, 250, 0.3);
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        .tech-badge {
          backdrop-filter: blur(10px);
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.2);
          transition: all 0.3s ease;
        }
        .tech-badge:hover {
          background: rgba(96, 165, 250, 0.2);
          border-color: rgba(96, 165, 250, 0.4);
          transform: translateY(-2px);
        }
        .project-visible {
          animation: slideUp 0.8s ease-out forwards;
        }
        .gradient-text {
          background: linear-gradient(135deg, #60A5FA, #A78BFA, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .feature-item {
          position: relative;
          padding-left: 1.5rem;
        }
        .feature-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #60A5FA, #A78BFA);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
        }
        .link-button {
          backdrop-filter: blur(10px);
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .link-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }
        .link-button:hover::before {
          left: 100%;
        }
        .link-button:hover {
          background: rgba(96, 165, 250, 0.2);
          border-color: rgba(96, 165, 250, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(96, 165, 250, 0.2);
        }
      `}</style>

      <div
        className="cursor-light"
        style={{ left: mousePosition.x, top: mousePosition.y, opacity: 0.5 }}
      />

      <div id="projects" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Particle 
              key={i} 
              x={Math.random() * 100} 
              y={Math.random() * 100} 
              delay={Math.random() * 4} 
              size={Math.random() * 5 + 2} 
            />
          ))}
        </div>

        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl" />

        <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 font-medium">Featured Projects</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing my journey through full-stack development, from mobile apps to web platforms, 
              each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`project-card glass-card rounded-3xl p-8 md:p-12 ${
                  visibleProjects.includes(project.id) ? 'project-visible' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-400 text-lg">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.timeline}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <button className="link-button flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium">
                        <Github className="w-5 h-5" />
                        View Code
                      </button>
                      {project.id === 'iphone' && (
                        <button className="link-button flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium">
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-8">
                    {/* Key Features */}
                    <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-white/5 to-transparent">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="feature-item text-gray-300">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="tech-badge px-4 py-2 rounded-lg text-sm font-medium text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA
          <div className="text-center mt-20">
            <div className="glass-card rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's build something amazing together
              </p>
              <button className="link-button px-8 py-3 rounded-xl text-white font-medium">
                Get In Touch
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Page3;