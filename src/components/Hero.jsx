import { useIsMobile } from '../utils/deviceDetection';
import HeroMobile from './Hero-mobile';
import HeroDesktop from './Hero-desktop';

const Hero = () => {
  const isMobile = useIsMobile();

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;
