import { useIsMobile } from '../utils/deviceDetection';
import SkillsMobile from './Skills-mobile';
import SkillsDesktop from './Skills-desktop';

const Skills = () => {
  const isMobile = useIsMobile();

  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

export default Skills;
