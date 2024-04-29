import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { cards } from "./ProjectCards";
import { ThemeContext } from "../contexts/ThemeContext";
import { GlobalContext } from "../contexts/GlobalContext";
import { IMask } from "./Mask";

const ProjectsMask = (props: IMask): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const { scrollX, setScrollX } = useContext(GlobalContext);
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
      className="relative h-[100vh] w-[100vw] sm:mt-44 sm:overflow-hidden my-[25%] sm:mb-[0%] overflow-x-scroll"
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
              className="sm:group relative sm:h-[100vh] h-full w-[100vw] sm:overflow-hidden"
            >
              <div className="sm:absolute sm:inset-0 z-10 sm:grid sm:place-content-center">
                <div className="flex sm:flex-row flex-col items-center justify-center">
                  {card.id !== 1 && (
                    <motion.img
                      src={
                        theme === "dark"
                          ? "/arrows/left-arrow-dark.png"
                          : "/arrows/left-arrow.png"
                      }
                      alt="left arrow"
                      className="hidden sm:flex w-[15%] mr-8 cursor-pointer opacity-80"
                      onClick={handleScrollBackward}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => {
                        props.setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        props.setIsHovered(false);
                      }}
                    />
                  )}
                  <h3
                    className=" title uppercase sm:[writing-mode:vertical-lr] sm:rotate-180 font-black text-text backdrop-blur-lg mr-8 font-poppins my-10 sm:my-0"
                    onMouseEnter={() => {
                      props.setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      props.setIsHovered(false);
                    }}
                  >
                    {card.title}
                  </h3>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex sm:flex-row flex-col relative">
                      <img
                        src={
                          theme === "dark"
                            ? "/browser.png"
                            : "/browser-dark.png"
                        }
                        alt="laptop vector drawing"
                        width={450}
                        className="hidden sm:block"
                      />

                      <img
                        src={
                          theme === "dark" ? "/phone.png" : "/phone-dark.png"
                        }
                        alt="phone vector drawing"
                        className="h-[246px]  self-center align-middle sm:ml-14 mb-14"
                      />

                      {card.link && (
                        <a
                          href={card.link}
                          target="_blank"
                          onMouseEnter={() => {
                            props.setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            props.setIsHovered(false);
                          }}
                        >
                          <button className="sm:absolute sm:right-[-30px] top-[85%] w-[200px] border-2 p-2 bg-no-repeat border-background text-text rounded-full element font-bold uppercase text-xl">
                            Visit site
                          </button>
                        </a>
                      )}
                    </div>
                    <article
                      className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%]"
                      onMouseEnter={() => {
                        props.setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        props.setIsHovered(false);
                      }}
                    >
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
                          ? "/arrows/right-arrow-dark.png"
                          : "/arrows/right-arrow.png"
                      }
                      alt="right arrow"
                      className="w-[15%] ml-8 cursor-pointer opacity-80 hidden sm:flex"
                      onClick={handleScrollForward}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => {
                        props.setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        props.setIsHovered(false);
                      }}
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

export default ProjectsMask;
