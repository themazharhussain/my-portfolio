import { useIsMobile } from '../utils/deviceDetection';
import ContactMobile from './Contact-mobile';
import ContactDesktop from './Contact-desktop';

const Contact = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default Contact;
