import { useEffect, useState, TouchEvent, MouseEvent } from "react";
import { Project } from "../types/ProjectTypes";
import { getSlideClass } from "../utils/utils";

type Props = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggable, setIsDraggable] = useState(window.innerWidth <= 768);
  const btnClass = "hidden my-auto md:flex w-32 z-30";

  const slideCount = projects.length;

  useEffect(() => {
    const handleResize = () => setIsDraggable(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDrag = (e: TouchEvent | MouseEvent) => {
    if (!isDraggable) return;
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const onDrag = (e: TouchEvent | MouseEvent) => {
    if (!isDragging || !isDraggable) return;
    setCurrentX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const endDrag = () => {
    if (!isDragging || !isDraggable) return;
    const diff = startX - currentX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setIsDragging(false);
  };

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slideCount);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <div
      className="h-full w-full flex flex-col items-center overflow-hidden "
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={endDrag}
    >
      <div className="h-full w-full flex flex-auto justify-center relative ">
        <button onClick={prevSlide} className={`mr-auto ${btnClass}`}>
          <img
            src="/images/icons/arrow.svg"
            alt="Prev"
            className="h-full w-full"
          />
        </button>
        <div className="h-full w-full flex justify-center items-center py-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`absolute h-full flex items-center transition-all duration-500 ease-in-out  ${getSlideClass(
                i,
                activeIndex,
                projects.length
              )}`}
            >
              <div className="project-card">
                <div className="h-1/2 w-full overflow-y-auto">
                  <img
                    src={`/images/${project.image}`}
                    className="object-cover object-top w-full"
                  />
                </div>

                <div className="p-8 gap-4 flex flex-col">
                  <h3 className="h4 text-primary-dark text-center">
                    {project.title}
                  </h3>
                  <p className="text-center text-gray-500 text-xs">
                    {project.excerpt}
                  </p>
                  <a
                    href={project.link}
                    className="btn btn-dark-blue text-sm mt-auto w-full text-center"
                  >
                    View {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className={`ml-auto ${btnClass}`}>
          <img
            src="/images/icons/arrow.svg"
            alt="Next"
            className="h-full w-full rotate-180"
          />
        </button>
      </div>

      <div className="flex gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`w-8 h-1.5 ${
              activeIndex === i ? "bg-accent" : "bg-white"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
