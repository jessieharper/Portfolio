import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";
import { motion } from "framer-motion";
import { projects } from "../data/ProjectData";
import { getPixels, updatePixels, shiftPixels } from "../utils/utils";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { useEffect } from "react";

const LandingPage = (): JSX.Element => {
  useEffect(() => {
    const order = ["#EC4899", "#EB6A6A", "#EB7D51", "#EB9630", "#EBB305"];
    const initialPixels = getPixels(5, order);
    const button = document.getElementById("pixelBtn");
    let interval: number | null = null;
    let directions = new Map<number, number>();

    let pixels = [...initialPixels];
    directions = new Map();
    updatePixels(pixels);

    const handleEnter = () => {
      if (interval) return;
      directions = new Map();
      interval = setInterval(() => {
        shiftPixels(pixels, directions, order);
      }, 75);
    };

    const handleLeave = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    button?.addEventListener("mouseenter", handleEnter);
    button?.addEventListener("mouseleave", handleLeave);

    return () => {
      button?.removeEventListener("mouseenter", handleEnter);
      button?.removeEventListener("mouseleave", handleLeave);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <>
      {" "}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen lg:h-[70vh] w-full flex flex-col flex-auto "
      >
        <div className="flex w-full h-full">
          <div className="absolute top-[2rem] inset-0 z-0 xl:z-10 2xl:z-30 w-full">
            <Earth />
          </div>

          <div className="flex flex-col md:flex-row w-full h-full justify-center md:justify-between gap-8">
            <div className="card mb-auto mx-auto lg:mx-0 flex">
              <p className="text-xs leading-5 h-full">
                <span className="font-depixel text-3xl">Yo!</span> My name is
                Jessica, and I am a Sheffield-based Software Developer, amateur
                animator, and burgeoning crazy cat lady.
                <br />
                <br />
                This is my creative dumping ground. Take a look around - any
                feedback, praise, criticisms, ~
                <span className="uppercase font-bold">job offers</span>
                ~, or questions(?) are welcome.
              </p>
            </div>

            <div className="w-full max-w-[28rem] md:max-w-[21.5rem] h-min border-4 border-primary p-8  flex flex-col gap-8 bg-card shadow mt-auto mx-auto lg:mx-0">
              <div className="h-full space-y-2">
                <h3 className="text-sm">Main Tech Stack: </h3>
              </div>
              <div className="relative z-40 gap-8 flex flex-col">
                <TechStackLogos />

                <a
                  href={MyCV}
                  download={"../assets/Jessica Harper CV.pdf"}
                  className="flex items-center justify-center"
                >
                  <button id="pixelBtn" className="btn text-sm">
                    Download my CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className=" h-full md:h-screen w-full flex flex-col flex-auto ">
        <div className="h-full flex flex-col md:flex-row w-full justify-center md:justify-between gap-8 ">
          <div className="card mb-auto mx-auto lg:mx-0 flex">
            <p className="text-xs leading-5 h-full flex flex-col gap-2">
              <span className="font-depixel text-3xl">About me...</span>I am a
              former Videogame Translator, current Web Developer and future
              [LOADING...]. My favourite animals are whales, because they are
              both graceful and majestic, and I drive to work every day in a
              clapped-out Suzuki Carry van.
              <span>
                I am interested in interactive UX/UI design, 3D modeling, insert
                more stuff here.
              </span>
            </p>
          </div>

          <div className="w-full max-w-[28rem] md:max-w-[21.5rem] h-min border-4 border-primary p-8  flex flex-col gap-8 bg-card shadow mt-auto mx-auto lg:mx-0">
            <div className="h-full space-y-2">
              <h3 className="text-sm">Key Skills: </h3>
              <p className="text-xs leading-5 h-full flex flex-col gap-2">
                Languages: JavaScript, PHP, TypeScript
                <span>
                  Testing: Test Driven Development (TDD), Jest, Supertest, Pest
                </span>
                <span>Back-end: SQL, RESTful APIs, Express, MongoDB</span>
                <span>
                  Front-end: HTML, CSS, React, React Native Next.js, Tailwind,
                  Laravel, Filament, Three.js, WordPress, Woocommerce
                </span>
                <span>Hosting: Render, Netlify</span>
                <span>
                  Other: Paired programming, technical communication, SDL, Agile
                  and SCRUM methodologies
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="projects"
        className="h-screen w-full"
      >
        <ProjectsCarousel projects={projects} />
      </motion.section>
    </>
  );
};

export default LandingPage;
