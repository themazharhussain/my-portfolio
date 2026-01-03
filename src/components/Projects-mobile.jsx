import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Socratute',
      description: 'Full-stack educational platform built with MEAN stack, featuring course management and user authentication.',
      tags: ['MongoDB', 'Express', 'Angular', 'Bootstrap'],
      liveUrl: 'https://socratute.com/',
    },
    {
      title: 'VTeach Canada',
      description: 'Educational platform for Canadian users built with MEAN stack, offering virtual teaching solutions.',
      tags: ['MongoDB', 'Express', 'Angular', 'Bootstrap'],
      liveUrl: 'https://portal.vteach.ca/',
    },
    {
      title: 'Heratire',
      description: 'Women\'s clothing e-commerce store built with WordPress and WooCommerce.',
      tags: ['WordPress', 'WooCommerce', 'PHP'],
      liveUrl: 'https://heratire.com/',
    },
    {
      title: 'Clothing Store Dashboard',
      description: 'Full-stack e-commerce admin dashboard for managing inventory and orders.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveUrl: 'https://clothing-store-admin-git-main-mazhers-projects.vercel.app/auth/login',
    },
    {
      title: 'Music School UI',
      description: 'Modern music school website with course listings and instructor profiles.',
      tags: ['Next.js', 'Tailwind CSS', 'Aceternity UI'],
      liveUrl: 'https://music-school-nextjs-sooty.vercel.app/',
    },
    {
      title: 'Price Scanner Landing Page',
      description: 'Sleek landing page for a price comparison tool with responsive design.',
      tags: ['Next.js', 'Tailwind CSS'],
      liveUrl: 'https://price-scanner-delta.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-300">
            <span className="font-mono text-cyan-400">//</span> Building scalable solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-heading font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <FiExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                </div>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
