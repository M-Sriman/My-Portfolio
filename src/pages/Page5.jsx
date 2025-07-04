import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Send, User, MessageSquare, FileText, CheckCircle } from 'lucide-react';

const Page5 = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:srimanyuketh2555@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'srimanyuketh2555@gmail.com',
      href: 'mailto:srimanyuketh2555@gmail.com',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 7780563030',
      href: 'tel:+917780563030',
      gradient: 'from-green-400 to-blue-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Availability',
      value: 'Currently available for opportunities',
      href: null,
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      username: 'Sriman Mudavath',
      href: 'https://linkedin.com/in/sriman-mudavath',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      username: 'M-Sriman',
      href: 'https://github.com/M-Sriman',
      gradient: 'from-gray-600 to-gray-400'
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .contact-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(96, 165, 250, 0.3);
          transform: translateY(-2px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #60A5FA, #A78BFA, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .form-input {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .form-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
          outline: none;
        }
        .submit-button {
          backdrop-filter: blur(10px);
          background: linear-gradient(135deg, #60A5FA, #A78BFA);
          border: 1px solid rgba(96, 165, 250, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .submit-button:hover::before {
          left: 100%;
        }
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(96, 165, 250, 0.3);
        }
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .social-link {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(96, 165, 250, 0.3);
          transform: translateY(-2px);
        }
        .success-message {
          animation: pulse 2s infinite;
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
        .contact-info-animation {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>

      <div
        className="cursor-light"
        style={{ left: mousePosition.x, top: mousePosition.y, opacity: 0.5 }}
      />

      <div id="contact" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
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
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 font-medium">Get In Touch</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6">
              Contact Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
              I'm always excited to work on innovative solutions and meaningful projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 contact-info-animation">
              {/* Contact Details */}
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-card rounded-xl p-4 flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link rounded-xl p-4 flex items-center gap-4 block"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${social.gradient} text-white`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{social.label}</p>
                        <p className="text-white font-medium">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                Send Message
              </h2>

              {submitSuccess && (
                <div className="success-message bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400"
                    placeholder="Project collaboration, job opportunity, etc."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project, requirements, timeline, or any questions you have..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="submit-button w-full px-8 py-4 rounded-xl text-white font-medium text-lg flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 inline-block">
              <p className="text-gray-300 text-lg">
                <span className="gradient-text font-semibold">Quick Response Guaranteed!</span>
                <br />
                I typically respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;