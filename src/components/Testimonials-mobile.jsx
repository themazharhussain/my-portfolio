import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'Mazhar delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, EduTech Solutions',
      content: 'Working with Mazhar on our educational platform was a great experience. He understood our requirements perfectly and delivered a scalable solution on time.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      content: 'The WordPress e-commerce store Mazhar built for us has been performing excellently. Sales increased by 40% in the first quarter. Highly recommend!',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'CTO, InnovateLab',
      content: 'Mazhar\'s full-stack development skills are impressive. He built our entire platform from scratch with clean code and great architecture.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Director, Global Ventures',
      content: 'Outstanding work on our company website. Professional, responsive, and delivered exactly what we needed. Will definitely work with him again.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Marketing Head, BrandCo',
      content: 'Mazhar created a beautiful landing page that converted visitors into customers. His design sense and technical skills are top-notch.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-slate-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-4 h-4 text-emerald-400 fill-emerald-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-slate-100 font-semibold mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-slate-400 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
