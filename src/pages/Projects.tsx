import { useState } from "react";
import { projects } from "../data/ProjectData";
import ImageModal from "../components/ImageModal";

const Projects = (): JSX.Element => {
  const [isOpen, setisOpen] = useState<Boolean>(false);
  const [index, setIndex] = useState<Number>(0);
  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleOpen = (i: Number) => {
    setisOpen(!isOpen);
    setIndex(i);
  };

  return (
    <section
      id="projects"
      className="lg:px-8 border-t-4 border-yellow-200 bg-body  relative"
    >
      <div className="container relative z-40 h-full pixel-border flex flex-col justify-center items-start py-8 md:py-16 space-y-4">
        <h2 className=" w-full md:w-1/2 text-left font-depixel uppercase text-xl">
          What I'm working on:
        </h2>
        <p className="text-xs w-full sm:w-10/12 md:w-2/3 lg:w-1/2 leading-5">
          Here is a non-exhaustive list of some of the personal projects that
          I've been workng on, as well as some ideas that I have in the
          pipeline. If you're interested in seeing more professional projects
          that I've worked on, you should probably{" "}
          <span className="text-accent">download my CV</span>.
        </p>
      </div>
      <div className="container h-full w-full ">
        <div className="space-y-4 border-t-2 border-teal-100/30 ">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className={`relative dropdown border-b-2 border-teal-100/30 h-full w-full space-y-2 py-4 flex flex-col ${
                  i === 0 ? "pt-6" : ""
                }`}
              >
                <div className="opacity-60 text-xs italic divide-x-2 divide-primary flex">
                  <span className="pr-5">{project.date}</span>
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
                  <div className="flex justify-between items-start md:items-center w-full gap-2">
                    <div>
                      <div className="flex gap-4 items-center">
                        <h3 className="text-accent font-depixel text-2xl md:text-3xl leading-normal">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm flex h-full text-accent-dark">
                        ~{project.stack}~
                      </p>
                    </div>
                    <div
                      style={{
                        maskImage: `url('/images/icons/arrowhead.svg')`,
                        WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
                      }}
                      className={`block w-6 h-6 icon-mask bg-accent-light transition-all duration-300 ease-in-out flex-shrink-0  ${
                        isOpen && i == index ? "-rotate-90" : "rotate-90"
                      }`}
                    ></div>
                  </div>
                </label>

                <div className="dropdown-content flex flex-col lg:flex-row w-full gap-4">
                  <div className="flex flex-col justify-start gap-8 w-full md:w-2/3 lg:w-1/2">
                    <div className="gap-4 flex flex-col">
                      <p className="flex flex-col gap-2">
                        <span className="text-xs leading-5">
                          {project.content}
                        </span>
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="font-dogica tracking-tighter normal-case text-sm flex mr-auto text-accent items-center  gap-2"
                      >
                        Visit Site
                      </a>
                    )}
                  </div>

                  {project.image && (
                    <div className="flex flex-row justify-center sm:justify-start lg:justify-center gap-4 md:gap-8 h-full w-full lg:w-1/2">
                      {project.image.map((img, i) => (
                        <div key={i} className="h-44 w-44 cursor-pointer">
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover object-center"
                            onClick={() => {
                              setActiveImages(project.image);
                              setCurrentIndex(i);
                            }}
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
      <ImageModal
        images={activeImages}
        index={currentIndex}
        setIndex={setCurrentIndex}
        onClose={() => setActiveImages(null)}
      />
    </section>
  );
};

export default Projects;
