import { useIsMobile } from '../utils/deviceDetection';
import ProjectsMobile from './Projects-mobile';
import ProjectsDesktop from './Projects-desktop';

const Projects = () => {
  const isMobile = useIsMobile();

  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
};

export default Projects;
