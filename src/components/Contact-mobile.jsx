import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMobile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      title: 'Email',
      icon: <FiMail size={20} />,
      href: 'mailto:thedevdigi@gmail.com',
    },
    {
      title: 'WhatsApp',
      icon: <FiMessageCircle size={20} />,
      href: 'https://wa.me/923040836758',
    },
    {
      title: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/mazhar-hussain-2a2469310/',
    },
    {
      title: 'GitHub',
      icon: <FiGithub size={20} />,
      href: 'https://github.com/themazharhussain',
    },
  ];

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email.trim())) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast.error('Please enter a message (at least 10 characters)');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          toast.error('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-slate-950 relative"
    >
      <ToastContainer />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl">&lt;</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Contact</span>
            <span className="text-emerald-400 font-mono text-3xl md:text-4xl"> /&gt;</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-300">
            <span className="font-mono text-cyan-400">//</span> Let's work together
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-slate-100 mb-4">
                Get In Touch
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <FiMail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:thedevdigi@gmail.com" className="text-slate-100 hover:text-emerald-400 transition-colors">
                      thedevdigi@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <FiMessageCircle className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">WhatsApp</p>
                    <a href="https://wa.me/923040836758" className="text-slate-100 hover:text-emerald-400 transition-colors">
                      +92 304 0836758
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                    title={link.title}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMobile;
