import { projects } from "../data/ProjectData";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="bg-body">
      <div className="h-full border-t-4 border-dashed border-primary flex justify-center items-start my-8 md:my-16">
        <h2 className="text-blue-300 text-5xl md:text-7xl container text-left md:text-center mt-8 md:mt-16">
          Projects
        </h2>
      </div>
      <div className="container h-full w-full mt-8">
        <div className="space-y-4 bg-body ">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="border-b-2 border-primary-50 h-full space-y-2 py-4 flex justify-between items-center"
              >
                <div>
                  {/* <div className="h-1/2 w-1/2">
                  <img
                  src={`/images/projects/${project.image}`}
                  className="h-40 w-full"
                  alt="Morelife"
                /> 
                </div> */}
                  <h3 className="text-accent font-depixel text-5xl leading-normal">
                    {project.title}
                  </h3>
                  <p className="text-sm">~{project.stack}~</p>
                </div>
                <div>+</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
