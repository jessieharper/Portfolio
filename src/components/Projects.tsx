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
                className="group relative sm:h-[100vh] w-[100vw] overflow-hidden bg-background"
              >
                <div className="absolute inset-0 z-0 "></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <section className="flex flex-row items-center justify-center">
                    <h2 className=" title uppercase [writing-mode:vertical-lr] rotate-180 font-black text-text backdrop-blur-lg mr-8 font-poppins">
                      {card.title}{" "}
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex sm:flex-row flex-col relative">
                        <img
                          src={
                            theme === "dark"
                              ? "/browser-dark.png"
                              : "/browser.png"
                          }
                          alt="laptop vector drawing"
                          width={450}
                          className="hidden sm:block"
                        />
                        {card.url && (
                          <img
                            src={card.url}
                            alt={`homepage of ${card.title} app on a browser`}
                            className="absolute top-6 hidden sm:block rounded-b-xl border-4 border-text bg-background"
                            width={450}
                          />
                        )}
                        <img
                          src={
                            theme === "dark" ? "/phone-dark.png" : "/phone.png"
                          }
                          alt="phone vector drawing"
                          className="h-[246px] relative self-center align-middle ml-14 mb-14"
                        />
                        {card.phoneUrl && (
                          <img
                            src={card.phoneUrl}
                            alt={`screenshot of ${card.title} app on a mobile phone`}
                            className="absolute right-[61px] top-[23px]  bg-background border-4  border-text rounded-b-xl"
                            width={132}
                          />
                        )}
                        {card.link && (
                          <a href={card.link} target="_blank">
                            <button className="absolute right-[3%] top-[85%] w-[200px] text-background border-4 p-2 border-text bg-no-repeat rounded-full element z-10 font-bold uppercase text-xl">
                              Visit site
                            </button>
                          </a>
                        )}
                      </div>
                      <article className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%] overflow-auto">
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
