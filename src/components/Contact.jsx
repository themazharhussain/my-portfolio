import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiSend, FiMessageCircle } from 'react-icons/fi';
import RocketIllustration from './svg/RocketIllustration';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FloatingDock } from './ui/FloatingDock';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const socialsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const dockLinks = [
    {
      title: 'Email',
      icon: <FiMail size={20} />,
      href: 'mailto:thedevdigi@gmail.com',
    },
    {
      title: 'WhatsApp',
      icon: <FiMessageCircle size={20} />,
      href: 'https://wa.me/923040836758',
    },
    {
      title: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/mazhar-hussain-2a2469310/',
    },
    {
      title: 'GitHub',
      icon: <FiGithub size={20} />,
      href: 'https://github.com/themazharhussain',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Socials animation
      gsap.from(socialsRef.current.children, {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    // Name validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    if (formData.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters long', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    // Email validation
    if (!formData.email.trim()) {
      toast.error('Please enter your email address', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email.trim())) {
      toast.error('Please enter a valid email address', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    // Message validation
    if (!formData.message.trim()) {
      toast.error('Please enter your message', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters long', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // EmailJS configuration from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Template parameters matching your EmailJS template
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
          toast.success('Message sent successfully! I\'ll get back to you soon.', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSubmitting(false);
          toast.error('Failed to send message. Please try again or contact me directly via email.', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <section
        id="contact"
        ref={sectionRef}
        className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden"
      >
      {/* Triangular mesh pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,100 0,100" fill="none" stroke="#10b981" strokeWidth="1"/>
              <polygon points="0,0 50,0 0,100" fill="none" stroke="#3b82f6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      </div>

      {/* Gradient orbs with different colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-up"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-up" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-up" style={{ animationDelay: '1s' }}></div>

      {/* Dotted grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gradient mb-6 tracking-tight">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>Contact<span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-mono text-cyan-400">//</span> Let's collaborate and build something extraordinary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="lg:pr-8 flex">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 w-full flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-800/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all text-slate-100 hover:border-slate-600 placeholder:text-slate-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-800/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all text-slate-100 hover:border-slate-600 placeholder:text-slate-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full flex-1 px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-800/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all resize-none text-slate-100 hover:border-slate-600 placeholder:text-slate-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 btn-gradient text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden mt-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
              </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Illustration */}
          <div className="space-y-6 lg:pl-8 flex flex-col">
            {/* Rocket Illustration */}
            <div className="flex justify-center lg:justify-start bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex-shrink-0">
              <RocketIllustration />
            </div>

            {/* Social Links with Floating Dock */}
            <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex-shrink-0">
              <h3 className="text-xl font-heading font-bold text-slate-100 mb-4 text-center lg:text-left">
                Connect With Me
              </h3>
              <div ref={socialsRef} className="h-16 flex items-center justify-center lg:justify-start">
                <FloatingDock items={dockLinks} />
              </div>
            </div>

            {/* Additional Info */}
            <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 text-center lg:text-left overflow-hidden group border border-slate-700 flex-1 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-heading font-bold text-slate-100 mb-3 flex items-center justify-center lg:justify-start gap-2">
                  <span className="text-xl">⚡</span>
                  Quick Response
                </h4>
                <p className="text-slate-400 text-base leading-relaxed">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
