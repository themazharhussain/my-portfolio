import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CodeIllustration from './svg/CodeIllustration';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden"
    >
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6 0px, #3b82f6 2px, transparent 2px, transparent 60px)', backgroundSize: '100% 100%' }}></div>
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900"></div>

      {/* Larger gradient orbs - vibrant developer colors */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up" style={{ animationDelay: '3s' }}></div>

      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gradient mb-6 tracking-tight">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>About<span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div ref={contentRef}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-100 mb-8 leading-tight">
              <span className="text-emerald-400 font-mono text-2xl md:text-3xl">&gt;_</span> Passionate Full Stack Developer
            </h3>
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              I'm <span className="text-cyan-400 font-semibold">Mazhar Hussain</span>, a software engineer specializing in building exceptional digital experiences.
              With expertise in modern web technologies like <span className="font-mono text-emerald-400">React</span>, <span className="font-mono text-emerald-400">Node.js</span>, and <span className="font-mono text-emerald-400">TypeScript</span>, I transform complex problems into elegant, scalable solutions.
            </p>
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              My approach combines <span className="text-cyan-400 font-semibold">clean architecture</span>, <span className="text-teal-400 font-semibold">performance optimization</span>, and <span className="text-emerald-400 font-semibold">user-centric design</span>.
              I believe great software isn't just about making it work—it's about crafting experiences that users love and code that developers enjoy maintaining.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              and sharing knowledge with the developer community. Let's build something amazing together!
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <CodeIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
