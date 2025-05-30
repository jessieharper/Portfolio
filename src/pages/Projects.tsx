import { projects } from "../data/ProjectData";
import ProjectsCarousel from "../components/ProjectsCarousel";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="h-screen w-full bg-slate-600">
      <ProjectsCarousel projects={projects} />
    </section>
  );
};

export default Projects;
