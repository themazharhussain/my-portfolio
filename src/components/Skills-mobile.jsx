import { FiCode, FiServer, FiCloud, FiBox, FiGlobe, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      skills: ['JavaScript', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'React', 'Next.js', 'Angular', 'React Native with Expo'],
    },
    {
      title: 'Backend',
      icon: <FiServer className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication', 'Middleware', 'API Development'],
    },
    {
      title: 'DevOps',
      icon: <FiCloud className="w-6 h-6" />,
      color: 'from-teal-500 to-emerald-500',
      skills: ['EC2', 'Nginx', 'PM2', 'CI/CD', 'Git', 'GitHub', 'Cloud Deployment'],
    },
    {
      title: 'Database',
      icon: <FiBox className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'Database Design', 'Data Modeling', 'Queries', 'Indexing', 'CRUD'],
    },
    {
      title: 'AI Integration',
      icon: <FiCpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['AI Model Integration', 'API Integration', 'Web-based AI Apps', 'OpenAI APIs'],
    },
    {
      title: 'WordPress & CMS',
      icon: <FiGlobe className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      skills: ['WordPress', 'WooCommerce', 'Theme Customization', 'Plugin Integration'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-slate-950 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-300">
            <span className="font-mono text-cyan-400">//</span> Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-100">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
