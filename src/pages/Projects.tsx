import { projects } from "../data/ProjectData";
import ProjectsCarousel from "../components/ProjectsCarousel";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="container h-full w-full space-y-4 mt-8">
      <div className="space-y-4 bg-body ">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="border-b-2 border-primary-50 h-full space-y-2 py-4"
            >
              <div className="h-1/2 w-1/2">
                {/* <img
                  src={`/images/projects/${project.image}`}
                  className="h-40 w-full"
                  alt="Morelife"
                /> */}
              </div>
              <h3 className="text-accent font-depixel text-5xl leading-normal">
                {project.title}
              </h3>
              <p className="text-sm">~{project.stack}~</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
