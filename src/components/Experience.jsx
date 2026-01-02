import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from './ui/Timeline';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineData = [
    {
      title: '2024',
      content: (
        <div>
          <p className="text-slate-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Senior Full Stack Developer at TechFlow
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Led development of real-time collaboration platform serving 10k+ users
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Architected microservices infrastructure reducing latency by 40%
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Mentored team of 5 junior developers
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
              alt="team collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80"
              alt="development workspace"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="text-slate-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Full Stack Developer at StartupHub
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Built payment integration system processing $2M+ monthly
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Implemented CI/CD pipeline reducing deployment time by 60%
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Migrated monolith to microservices architecture
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
              alt="analytics dashboard"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80"
              alt="code review"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="text-slate-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Frontend Developer at WebCraft Agency
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Developed 15+ client websites with React and Next.js
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Improved page load speeds by 70% through optimization
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Established design system used across all projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
              alt="web development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
              alt="coding setup"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="text-slate-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started my journey as a self-taught developer
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Completed 50+ projects on freeCodeCamp and Frontend Mentor
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm mb-4">
              ✨ Built first freelance project for local business
            </div>
            <div className="flex gap-2 items-center text-slate-400 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Joined developer community and contributed to open source
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-up" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Experience;
