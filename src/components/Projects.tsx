import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useContext } from "react";
import { cards } from "./ProjectCards";
import { ThemeContext } from "../contexts/ThemeContext";

const Projects = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[300vh] bg-background mt-44"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="group relative sm:h-[650px] h-screen w-[100vw] overflow-hidden bg-background"
              >
                <div className="absolute inset-0 z-0 "></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <section className="flex flex-row items-center justify-center">
                    <h2 className="text-9xl [writing-mode:vertical-lr] rotate-180 font-black text-text backdrop-blur-lg text-center mr-8">
                      {card.title}{" "}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex sm:flex-row flex-col relative">
                        <img
                          src="/laptop.png"
                          alt="laptop vector drawing"
                          width={500}
                          className="hidden sm:block"
                        />
                        <img
                          src={card.url}
                          alt="homepage of a website called NC News"
                          className="absolute left-11 top-5 hidden sm:block"
                          width={412}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="250"
                          height="256"
                          viewBox="0 0 256 256"
                          className="relative self-center"
                        >
                          <defs></defs>
                          <g
                            fill={theme === "dark" ? "#9c9fa8" : "#544c55"}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(3 2.61)"
                          >
                            <path
                              d="M 63.063 3 c 1.157 0 2.098 0.941 2.098 2.098 v 79.803 c 0 1.157 -0.941 2.098 -2.098 2.098 H 26.937 c -1.157 0 -2.098 -0.941 -2.098 -2.098 V 5.098 C 24.839 3.941 25.78 3 26.937 3 H 63.063 M 63.063 0 H 26.937 c -2.816 0 -5.098 2.283 -5.098 5.098 v 79.803 c 0 2.816 2.283 5.098 5.098 5.098 h 36.126 c 2.816 0 5.098 -2.283 5.098 -5.098 V 5.098 C 68.161 2.283 65.879 0 63.063 0 L 63.063 0 z"
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                            <path
                              d="M 32.176 1.992 c 0 2.824 1.857 5.134 4.126 5.134 h 17.396 c 2.269 0 4.126 -2.31 4.126 -5.134 H 32.176 z M 47.862 4.5 h -9.466 c -0.276 0 -0.5 -0.224 -0.5 -0.5 s 0.224 -0.5 0.5 -0.5 h 9.466 c 0.276 0 0.5 0.224 0.5 0.5 S 48.139 4.5 47.862 4.5 z M 50.908 4.696 c -0.384 0 -0.696 -0.312 -0.696 -0.696 s 0.312 -0.696 0.696 -0.696 S 51.604 3.616 51.604 4 S 51.292 4.696 50.908 4.696 z"
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                          </g>
                        </svg>
                        <img
                          src={card.phoneUrl}
                          alt="screenshot of CodeLingo app on a mobile phone"
                          className="absolute right-14 top-24"
                          width={120}
                        />
                        {card.link && (
                          <a href={card.link} target="_blank">
                            <button className="absolute right-[2%] top-[87%] w-[200px] text-text border-2 p-2 border-text bg-no-repeat rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 z-10 font-semibold ">
                              Visit site
                            </button>
                          </a>
                        )}
                      </div>
                      <article className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%] overflow-auto">
                        <span className="w-full flex flex-row justify-between mb-4 bg-text rounded-full px-6 py-2">
                          {card.techStack.map((logo) => (
                            <img src={`/logos/${logo}.svg`} />
                          ))}
                        </span>
                        {card.content.split("\\\n").map((line) => (
                          <p className="text-center">
                            {line}
                            <br />
                            <br />
                          </p>
                        ))}
                      </article>
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
