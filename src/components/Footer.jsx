import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50 text-white py-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-400 text-sm text-center md:text-left"
          >
            © {currentYear} Mazhar Hussain. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm"
          >
            <p className="text-slate-400 font-mono">
              &lt;Built with <span className="text-emerald-400">React</span> & <span className="text-cyan-400">Passion</span> /&gt;
            </p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-slate-400">
              UI components by{' '}
              <a
                href="https://ui.aceternity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Aceternity UI
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
