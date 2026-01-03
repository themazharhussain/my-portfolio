const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                <span className="text-emerald-400 font-mono">//</span> I'm a passionate{' '}
                <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with expertise in building modern, scalable web applications.
              </p>
              <p>
                With strong proficiency in <span className="text-emerald-400 font-semibold">MERN</span> and{' '}
                <span className="text-cyan-400 font-semibold">MEAN</span> stack technologies, I specialize in creating seamless user experiences and robust backend systems.
              </p>
              <p>
                I'm constantly learning and exploring new technologies, currently diving into{' '}
                <span className="text-purple-400 font-semibold">AI integration</span> in web applications to build smarter, more efficient solutions.
              </p>
              <p className="text-emerald-400 font-mono">
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
