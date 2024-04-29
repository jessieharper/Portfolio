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
      className="relative h-[100vh] w-[100vw] bg-background sm:mt-44 sm:overflow-hidden my-[25%] sm:mb-[0%] overflow-x-scroll"
    >
      <div className="sm:sticky sm:top-0 flex sm:h-screen  h-[150%] items-center">
        <motion.div
          className="flex"
          animate={{ x: -scrollX }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {cards.map((card) => (
            <section
              key={card.id}
              className="sm:group relative sm:h-[100vh] h-full w-[100vw] sm:overflow-hidden bg-background"
            >
              <div className="sm:absolute sm:inset-0 z-10 sm:grid sm:place-content-center">
                <div className="flex sm:flex-row flex-col items-center justify-center">
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
                  <h3 className=" title uppercase sm:[writing-mode:vertical-lr] sm:rotate-180 font-black text-text backdrop-blur-lg mr-8 font-poppins my-10 sm:my-0">
                    {card.title}
                  </h3>
                  <div className="flex flex-col items-center justify-center">
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
                        className="h-[246px]  self-center align-middle sm:ml-14 mb-14"
                      />
                      {card.phoneUrl && (
                        <img
                          src={card.phoneUrl}
                          alt={`screenshot of ${card.title} app on a mobile phone`}
                          className="absolute sm:right-[1px] sm:top-[23px] top-[16.75px] right-[34px] bg-background border-4 border-text rounded-b-xl"
                          width={132}
                        />
                      )}
                      {card.link && (
                        <a href={card.link} target="_blank">
                          <button className="sm:absolute sm:right-[-30px] top-[85%] w-[200px] text-background border-2 p-2 border-text bg-no-repeat rounded-full element z-10 font-bold uppercase text-xl">
                            Visit site
                          </button>
                        </a>
                      )}
                    </div>
                    <article className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%]">
                      {card.content.split("\\\n").map((line, i) => (
                        <p key={i} className="text-center">
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
                      className="w-[15%] ml-8 cursor-pointer text-text opacity-80 hidden sm:flex"
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
