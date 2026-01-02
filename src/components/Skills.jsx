import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCheck, FiCode, FiBox, FiSmartphone, FiServer, FiGitBranch, FiCloud, FiGlobe, FiCpu } from 'react-icons/fi';
import { HoverEffect } from './ui/HoverEffectCard';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      skills: ['JavaScript', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'React', 'Next.js (basics)', 'Angular', 'React Native with Expo (basics)'],
    },
    {
      title: 'Backend Development',
      icon: <FiServer className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication', 'Middleware', 'Error Handling', 'Server-side Logic', 'API Development'],
    },
    {
      title: 'DevOps & Deployment',
      icon: <FiCloud className="w-6 h-6" />,
      color: 'from-teal-500 to-emerald-500',
      textColor: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      skills: ['EC2', 'Nginx', 'PM2', 'CI/CD Pipelines', 'Git', 'GitHub', 'Version Control', 'Cloud Deployment'],
    },
    {
      title: 'Database',
      icon: <FiBox className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      skills: ['MongoDB', 'Database Design', 'Data Modeling', 'Queries', 'Aggregation', 'Indexing', 'Schema Design', 'CRUD Operations'],
    },
    {
      title: 'AI Integration (Learning)',
      icon: <FiCpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      skills: ['AI Model Integration', 'API Integration', 'Web-based AI Apps', 'AI Concepts', 'Prompt Engineering', 'Learning AI Tools', 'OpenAI APIs', 'Exploring AI/ML'],
    },
    {
      title: 'WordPress & CMS',
      icon: <FiGlobe className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      skills: ['WordPress', 'WooCommerce', 'Theme Customization', 'Plugin Integration', 'Custom Post Types', 'Page Builders', 'E-commerce Setup', 'Site Optimization'],
    },
  ];

  // Transform skillCategories into the format expected by HoverEffect
  const skillItems = skillCategories.map((category) => ({
    title: category.title,
    icon: category.icon,
    description: (
      <ul className="space-y-3 mt-4">
        {category.skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}>
              <FiCheck className={`w-3 h-3 ${category.textColor}`} />
            </div>
            <span className="text-slate-300 font-medium text-sm">{skill}</span>
          </li>
        ))}
      </ul>
    ),
    color: category.color,
    textColor: category.textColor,
  }));

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

      // Skills cards animation
      if (skillsRef.current && skillsRef.current.children.length > 0) {
        gsap.from(skillsRef.current.children, {
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 relative overflow-hidden"
    >
      {/* Honeycomb pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, #10b981 2px, transparent 2px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 43px'
        }}></div>
      </div>

      {/* Layered gradient orbs - vibrant developer colors */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up"></div>
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-up" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-up" style={{ animationDelay: '1.5s' }}></div>

      {/* Cross-hatch pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #06b6d4 1px, transparent 1px), linear-gradient(-45deg, #10b981 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gradient mb-6 tracking-tight">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>Skills<span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-mono text-cyan-400">//</span> Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skills Grid with Hover Effect Cards */}
        <div ref={skillsRef} className="max-w-7xl mx-auto">
          <HoverEffect items={skillItems} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
