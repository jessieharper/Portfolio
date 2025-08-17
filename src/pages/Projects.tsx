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
    <section
      id="projects"
      className="px-8 border-t-4 border-accent-light bg-body overflow-x-hidden"
    >
      <div className="container relative z-40 h-full pixel-border  flex flex-col justify-center items-start py-8 md:py-16 ">
        {/* <h2 className="title relative text-[#2A4257] text-5xl md:text-7xl text-center mt-16 ">
          Notable Projects
        </h2> */}
        <p className="pt-6 w-full md:w-1/2 text-left font-depixel text-3xl text-accent-dark italic">
          My Work...
        </p>
      </div>
      <div className="container h-full w-full ">
        <div className="space-y-4 ">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="relative dropdown border-b-2 border-teal-100/30 h-full w-full space-y-2 py-4 flex flex-col"
              >
                <div className="opacity-60 text-xs italic divide-x-2 divide-primary flex">
                  <span className="pr-5">{project.date}</span>
                  <span className="pl-5">{project.category}</span>
                </div>
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
                      className={`block w-6 h-6 icon-mask bg-accent-light transition-all duration-300 ease-in-out  ${
                        isOpen && i == index ? "-rotate-90" : "rotate-90"
                      }`}
                    ></div>
                  </div>
                </label>

                <div className="dropdown-content flex flex-col lg:flex-row w-full gap-4">
                  <div className="flex flex-col justify-start gap-8 w-full md:w-2/3 lg:w-7/12">
                    <div className="gap-4 flex flex-col">
                      <p className="flex flex-col gap-2">
                        <span className="text-accent-dark">Goal</span>
                        <span className="text-sm">{project.content.goal}</span>
                      </p>
                      <p className="flex flex-col gap-2">
                        <span className="text-accent-dark">Features</span>
                        <span className="text-sm">
                          {project.content.features}
                        </span>
                      </p>
                      <p className="flex flex-col gap-2">
                        <span className="text-accent-dark">Outcome</span>
                        <span className="text-sm">
                          {project.content.outcome}
                        </span>
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

                  {project.image && (
                    <div className="flex justify-start lg:justify-center gap-4 md:gap-8 h-full w-full lg:w-5/12">
                      {project.image.map((img, i) => (
                        <div className="h-52">
                          <img
                            key={i}
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
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
