import { useIsMobile } from '../utils/deviceDetection';
import TestimonialsMobile from './Testimonials-mobile';
import TestimonialsDesktop from './Testimonials-desktop';

const Testimonials = () => {
  const isMobile = useIsMobile();

  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
};

export default Testimonials;
