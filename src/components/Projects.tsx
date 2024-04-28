import { motion, useAnimation } from "framer-motion";
import { useState, useContext } from "react";
import { cards } from "./ProjectCards";
import { ThemeContext } from "../contexts/ThemeContext";

const Projects = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const [scrollX, setScrollX] = useState<number>(0);
  const controls = useAnimation();

  const handleScrollForward = () => {
    const nextScrollX = scrollX + window.innerWidth;
    setScrollX(nextScrollX);
    controls.start({ x: -nextScrollX });
  };

  const handleScrollBackward = () => {
    const nextScrollX = Math.max(0, scrollX - window.innerWidth);
    setScrollX(nextScrollX);
    controls.start({ x: -nextScrollX });
  };

  return (
    <section
      id="projects"
      className="relative h-[100vh] bg-background mt-44 overflow-hidden"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <motion.div
          className="flex"
          animate={{ x: -scrollX }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {cards.map((card) => (
            <section
              key={card.id}
              className="group relative h-[100vh] w-[100vw] overflow-hidden bg-background"
            >
              <div className="absolute inset-0 z-10 grid place-content-center">
                <div className="flex flex-row items-center justify-center">
                  {card.id !== 1 && (
                    <motion.img
                      src={
                        theme === "dark"
                          ? "/arrows/left-arrow.png"
                          : "/arrows/left-arrow-dark.png"
                      }
                      alt="left arrow"
                      className="hidden sm:flex w-[15%] mr-8 cursor-pointer opacity-80"
                      onClick={handleScrollBackward}
                      whileTap={{ scale: 0.9 }}
                    />
                  )}
                  <h3 className=" title uppercase [writing-mode:vertical-lr] rotate-180 font-black text-text backdrop-blur-lg mr-8 font-poppins">
                    {card.title}
                  </h3>
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
                    <article className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%]">
                      {card.content.split("\\\n").map((line) => (
                        <p className="text-center">
                          {line}
                          <br />
                          <br />
                        </p>
                      ))}
                    </article>
                  </div>
                  {card.id !== cards.length && (
                    <motion.img
                      src={
                        theme === "dark"
                          ? "/arrows/right-arrow.png"
                          : "/arrows/right-arrow-dark.png"
                      }
                      alt="right arrow"
                      className="w-[15%] ml-8 cursor-pointer text-text opacity-80"
                      onClick={handleScrollForward}
                      whileTap={{ scale: 0.9 }}
                    />
                  )}
                </div>
              </div>
            </section>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
