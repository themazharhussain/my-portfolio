import { useIsMobile } from '../utils/deviceDetection';
import AboutMobile from './About-mobile';
import AboutDesktop from './About-desktop';

const About = () => {
  const isMobile = useIsMobile();

  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

export default About;
