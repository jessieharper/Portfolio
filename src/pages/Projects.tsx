import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { projects } from "../data/ProjectData";
import ProjectCarousel from "../components/ProjectsCarousel";

const Projects = (): JSX.Element => {
  const { scrollX, setScrollX } = useContext(GlobalContext);
  const controls = useAnimation();

  useEffect(() => {
    document.documentElement.classList.add("projects");

    return () => {
      document.documentElement.classList.remove("projects");
    };
  }, []);

  const handleScrollForward = () => {
    const nextScrollX = scrollX + window.innerWidth;
    setScrollX(nextScrollX);
    controls.start({ x: -nextScrollX });
  };

  const handleScrollBackward = () => {
    const nextScrollX = Math.max(0, scrollX - window.innerWidth);
    setScrollX(nextScrollX);
    controls.start({ x: -nextScrollX });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="projects"
      className="h-full w-full "
    >
      <ProjectCarousel projects={projects} />
    </motion.section>
  );
};

export default Projects;
