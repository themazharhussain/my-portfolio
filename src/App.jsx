import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { useIsMobile } from './utils/deviceDetection';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  // Initialize GSAP ScrollTrigger only for desktop
  useEffect(() => {
    if (!isMobile) {
      import('gsap').then((gsapModule) => {
        const gsap = gsapModule.default;
        import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          // Refresh ScrollTrigger after a short delay to ensure all elements are rendered
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 500);
        });
      });
    }
  }, [isMobile]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="overflow-x-hidden relative bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
