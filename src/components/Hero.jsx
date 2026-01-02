import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiArrowDown } from 'react-icons/fi';
import FloatingShapes from './svg/FloatingShapes';
import ParticlesBackground from './svg/ParticlesBackground';
import GridPattern from './svg/GridPattern';
import GlowingStars from './svg/GlowingStars';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current.children,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          '-=0.4'
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-transparent"></div>

      {/* Grid Pattern Background */}
      <GridPattern className="opacity-30" />

      {/* Glowing Stars */}
      <GlowingStars count={60} className="opacity-70" />

      {/* Particles Background */}
      <ParticlesBackground count={120} />

      {/* Floating shapes background */}
      <FloatingShapes />

      {/* Gradient orbs - vibrant developer colors */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-up"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-up" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div ref={titleRef} className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 font-mono text-sm">&lt;Developer /&gt;</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight">
              <span className="block text-slate-200 font-medium mb-2">Hi, I'm</span>
              <span className="block text-shimmer tracking-tight">Mazhar Hussain</span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 font-normal leading-relaxed"
          >
            <span className="font-mono text-emerald-400">//</span> Full Stack Developer crafting{' '}
            <span className="text-cyan-400 font-semibold font-mono">modern web solutions</span> with{' '}
            <span className="text-emerald-400 font-semibold font-mono">clean code</span> &{' '}
            <span className="text-teal-400 font-semibold font-mono">seamless UX</span>
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 btn-gradient text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 glass bg-white/80 border-2 border-primary-500 text-primary-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary-50 overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="p-2 rounded-full border-2 border-current group-hover:bg-blue-500/20 transition-all">
              <FiArrowDown size={24} className="group-hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
