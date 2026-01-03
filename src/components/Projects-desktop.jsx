import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import BackgroundGradient from './ui/BackgroundGradient';
import SpotlightEffect from './svg/SpotlightEffect';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'Socratute',
      description: 'Full-stack educational platform built with MEAN stack, featuring course management, user authentication, and interactive learning features.',
      tags: ['MongoDB', 'Express', 'Angular', 'Bootstrap'],
      gradient: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      liveUrl: 'https://socratute.com/',
      githubUrl: '#',
    },
    {
      title: 'VTeach Canada',
      description: 'Educational platform for Canadian users built with MEAN stack, offering virtual teaching solutions with course management and student engagement features.',
      tags: ['MongoDB', 'Express', 'Angular', 'Bootstrap'],
      gradient: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      liveUrl: 'https://portal.vteach.ca/',
      githubUrl: '#',
    },
    {
      title: 'Heratire',
      description: 'Women\'s clothing e-commerce store built with WordPress and WooCommerce, featuring product catalog, shopping cart, and secure checkout functionality.',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce'],
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      liveUrl: 'https://heratire.com/',
      githubUrl: '#',
    },
    {
      title: 'Clothing Store Dashboard',
      description: 'Full-stack e-commerce admin dashboard for managing clothing inventory, orders, and customer data with real-time analytics and reporting.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      liveUrl: 'https://clothing-store-admin-git-main-mazhers-projects.vercel.app/auth/login',
      githubUrl: '#',
    },
    {
      title: 'Music School UI',
      description: 'Modern and interactive music school website featuring stunning UI components, course listings, and instructor profiles with smooth animations.',
      tags: ['Next.js', 'Tailwind CSS', 'Aceternity UI'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      liveUrl: 'https://music-school-nextjs-git-main-mazhers-projects.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'Price Scanner Landing Page',
      description: 'Sleek and modern landing page for a price comparison tool, featuring responsive design and clean user interface for easy price tracking.',
      tags: ['Next.js', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      liveUrl: 'https://price-scanner-delta.vercel.app/',
      githubUrl: '#',
    },
  ];

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([titleRef.current, projectsRef.current?.children], { opacity: 1, y: 0 });
        return;
      }

      // Title animation - simplified on mobile
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: isMobile ? 30 : 50,
        opacity: 0,
        duration: isMobile ? 0.6 : 1,
        ease: 'power3.out',
      });

      // Projects cards animation - simplified on mobile
      if (projectsRef.current) {
        gsap.from(projectsRef.current.children, {
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: isMobile ? 40 : 100,
          opacity: 0,
          duration: isMobile ? 0.5 : 0.8,
          stagger: isMobile ? 0.08 : 0.15,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Spotlight Effect Background */}
      <SpotlightEffect className="opacity-30" />

      {/* Waves pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <path d="M0 70 Q 25 45, 50 70 T 100 70" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      {/* Larger animated orbs - vibrant developer colors */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up" style={{ animationDelay: '2s' }}></div>

      {/* Circuit board style pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '120px 120px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gradient mb-6 tracking-tight">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>Projects<span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-mono text-cyan-400">//</span> Building scalable solutions with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">{projects.map((project, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-2xl h-full"
              containerClassName="group h-full"
              animate={true}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-full flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700/50 hover:border-slate-600 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />

                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <FiExternalLink size={20} />
                    </div>
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-6 shadow-lg"
                      >
                        <FiGithub size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10 bg-slate-900/80 backdrop-blur-sm flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-slate-700/50 text-slate-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 border border-slate-600 hover:border-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner with pulse */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>
              </a>
            </BackgroundGradient>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 btn-gradient text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
