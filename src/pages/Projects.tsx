import { useState } from "react";
import { projects } from "../data/ProjectData";

const Projects = (): JSX.Element => {
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  const toggleOpen = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="projects" className="bg-body  px-8">
      <div className="container relative h-full pixel-border border-t-8 border-yellow-200 flex flex-col justify-center items-start my-8 md:my-16 ">
        <h2 className="title w-auto relative text-[#2A4257] text-5xl md:text-7xl text-left mt-32 ">
          Projects
        </h2>
        {/* <p className="pt-6 w-full md:w-1/2 text-left md:text-center">
          Here's a list of some of my most notable projects past, present and
          future.
        </p> */}
      </div>
      <div className="container h-full w-full mt-8">
        <div className="space-y-4 ">
          {projects.map((project, i) => {
            const isOpen = openStates[i];
            return (
              <div
                key={i}
                className="border-b-2 border-teal-100 h-full space-y-2 py-4 flex flex-col"
              >
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h3 className="text-accent font-depixel text-3xl leading-normal">
                      {project.title}
                    </h3>
                    <p className="text-sm flex h-full">~{project.stack}~</p>
                  </div>
                  <button onClick={() => toggleOpen(i)}>
                    {isOpen ? "-" : "+"}
                  </button>
                </div>
                {isOpen && <div className="py-8">{project.content}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
