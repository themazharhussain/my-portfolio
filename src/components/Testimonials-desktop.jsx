import { AnimatedTestimonials } from './ui/animated-testimonials';

const TestimonialsDesktop = () => {
  const testimonials = [
    {
      quote: 'Mazhar delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      name: 'Sarah Johnson',
      designation: 'CEO, TechStart Inc',
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
    },
    {
      quote: 'Working with Mazhar on our educational platform was a great experience. He understood our requirements perfectly and delivered a scalable solution on time.',
      name: 'Michael Chen',
      designation: 'Product Manager, EduTech Solutions',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    },
    {
      quote: 'The WordPress e-commerce store Mazhar built for us has been performing excellently. Sales increased by 40% in the first quarter. Highly recommend!',
      name: 'Emily Rodriguez',
      designation: 'Founder, StyleHub',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
    },
    {
      quote: 'Mazhar\'s full-stack development skills are impressive. He built our entire platform from scratch with clean code and great architecture.',
      name: 'David Kim',
      designation: 'CTO, InnovateLab',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
    },
    {
      quote: 'Outstanding work on our company website. Professional, responsive, and delivered exactly what we needed. Will definitely work with him again.',
      name: 'Lisa Anderson',
      designation: 'Director, Global Ventures',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Testimonials</span>
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-300">
            <span className="font-mono text-cyan-400">//</span> What clients say about my work
          </p>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default TestimonialsDesktop;
