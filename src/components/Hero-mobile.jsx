const Hero = () => {
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-cyan-950/10 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 font-mono text-sm">&lt;Developer /&gt;</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight">
              <span className="block text-slate-200 font-medium mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">Mazhar Hussain</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 font-normal leading-relaxed">
            <span className="font-mono text-emerald-400">//</span> Full Stack Developer crafting{' '}
            <span className="text-cyan-400 font-semibold">modern web solutions</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg shadow-lg hover:bg-slate-700 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
