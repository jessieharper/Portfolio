import { useState } from "react";
import { projects } from "../data/ProjectData";
import Button from "../components/Button";

const Projects = (): JSX.Element => {
  const [isOpen, setisOpen] = useState<Boolean>(false);
  const [index, setIndex] = useState<Number>(0);

  const toggleOpen = (i: Number) => {
    setisOpen(!isOpen);
    setIndex(i);
  };

  return (
    <section id="projects" className="bg-body  px-8">
      <div className="container relative h-full pixel-border border-t-4 border-yellow-200 flex flex-col justify-center items-start my-8 md:my-16 ">
        <h2 className="title relative text-[#2A4257] text-5xl md:text-7xl text-center mt-32 ">
          Notable Projects
        </h2>
        {/* <p className="pt-6 w-full md:w-1/2 text-left md:text-center">
          Here's a list of some of my most notable projects past, present and
          future.
        </p> */}
      </div>
      <div className="container h-full w-full mt-8">
        <div className="space-y-4 ">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="dropdown border-b-2 border-teal-100/30 h-full space-y-2 py-4 flex flex-col"
              >
                <input
                  id={i.toString()}
                  type="checkbox"
                  className="dropdown-toggle absolute opacity-0"
                />
                <label
                  onClick={() => toggleOpen(i)}
                  htmlFor={i.toString()}
                  className="dropdown-label flex cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <div className="flex gap-4 items-center">
                        <h3 className="text-accent font-depixel text-3xl leading-normal">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm flex h-full">~{project.stack}~</p>
                    </div>
                    <div
                      style={{
                        maskImage: `url('/images/icons/arrowhead.svg')`,
                        WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
                      }}
                      className={`block w-6 h-6 icon-mask bg-primary transition-all duration-300 ease-in-out  ${
                        isOpen && i == index ? "-rotate-90" : "rotate-90"
                      }`}
                    ></div>
                  </div>
                </label>

                <div className="flex flex-col justify-start gap-8 dropdown-content w-full md:w-2/3 lg:w-7/12">
                  <div className="gap-4 flex flex-col">
                    <p className="flex flex-col gap-2">
                      <span className="text-accent">Goal</span>
                      <span className="text-sm">{project.content.goal}</span>
                    </p>
                    <p className="flex flex-col gap-2">
                      <span className="text-accent">Features</span>
                      <span className="text-sm">
                        {project.content.features}
                      </span>
                    </p>
                    <p className="flex flex-col gap-2">
                      <span className="text-accent">Outcome</span>
                      <span className="text-sm">{project.content.outcome}</span>
                    </p>
                  </div>
                  {project.link && (
                    <div className="flex mr-auto">
                      <Button
                        href={project.link}
                        title="Visit Site"
                        id={`project${i}`}
                        colours={[
                          "#EC4899",
                          "#EB6A6A",
                          "#EB7D51",
                          "#EB9630",
                          "#EBB305",
                        ]}
                        range={5}
                        delay={100}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
