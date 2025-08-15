// import { useState } from "react";
import { projects } from "../data/ProjectData";
import Button from "../components/Button";

const Projects = (): JSX.Element => {
  // const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  // const toggleOpen = (index: number) => {
  //   setOpenStates((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

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
            return (
              <div
                key={i}
                className="dropdown border-b-2 border-teal-100 h-full space-y-2 py-4 flex flex-col"
              >
                <input
                  id={i.toString()}
                  type="checkbox"
                  className="dropdown-toggle absolute opacity-0"
                />
                <label
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
                    <span className="pt-4">+</span>
                  </div>
                </label>

                <div className="flex flex-col justify-start gap-8 dropdown-content w-full md:w-2/3 lg:w-7/12">
                  <p>
                    {project.content} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Saepe rerum accusantium maiores neque
                    similique ipsa ducimus in illo at aperiam, provident
                    consequuntur quasi ipsam laborum a? Ad nesciunt fuga
                    aliquid, deserunt aliquam qui voluptatum veritatis
                    temporibus tempore repellendus est molestiae commodi sequi
                    pariatur. Reprehenderit consequuntur libero obcaecati nihil
                    reiciendis non sit, omnis quibusdam quisquam in aperiam?
                  </p>
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
