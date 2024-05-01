import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { cards } from "./ProjectCards";
import { GlobalContext } from "../contexts/GlobalContext";

const Projects = (): JSX.Element => {
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
      className="relative sm:h-[100vh] h-[160vh] w-[100vw] bg-background sm:mt-44 sm:mb-0 mb-[-25%] lg:overflow-hidden overflow-x-scroll"
    >
      <div className="sm:sticky sm:top-0 flex sm:h-screen items-center">
        <motion.div
          className="flex"
          animate={{ x: -scrollX }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {cards.map((card) => (
            <section
              key={card.id}
              className="sm:group sm:relative sm:h-[100vh] h-full w-[100vw] sm:overflow-hidden bg-background"
            >
              <div className="sm:absolute sm:inset-0 z-10 sm:grid sm:place-content-center">
                <div className="flex lg:flex-row flex-col items-center justify-center">
                  {card.id !== 1 && (
                    <motion.svg
                      width="543"
                      height="249"
                      viewBox="0 0 543 249"
                      className="fill-current hidden lg:flex w-[15%] ml-8 cursor-pointer opacity-80"
                      onClick={handleScrollBackward}
                      whileTap={{ scale: 0.9 }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="542.361"
                        y="186.209"
                        width="436"
                        height="124"
                        transform="rotate(180 542.361 186.209)"
                      />
                      <path d="M0.180405 124.209L108.024 16.6652L108.337 231.439L0.180405 124.209Z" />
                    </motion.svg>
                  )}
                  <h3 className=" title uppercase lg:[writing-mode:vertical-lr] lg:rotate-180 font-black text-text backdrop-blur-lg mr-8 font-poppins my-10 sm:my-0">
                    {card.title}
                  </h3>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex sm:flex-row flex-col relative">
                      <svg
                        width="450"
                        viewBox="0 0 1296 908"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        className="hidden md:block"
                      >
                        <path
                          d="M4 79.5872H1292V867.587C1292 887.469 1275.88 903.587 1256 903.587H40C20.1177 903.587 4 887.469 4 867.587V79.5872Z"
                          strokeWidth="8"
                        />
                        <path
                          d="M1288 80H1292V76V41C1292 20.5655 1275.43 4 1255 4H41C20.5655 4 4 20.5655 4 41V76V80H8H1288Z"
                          strokeWidth="8"
                        />
                        <path
                          d="M43.1454 41.9491C43.1454 46.3466 39.3554 50.1618 34.3636 50.1618C29.3718 50.1618 25.5818 46.3466 25.5818 41.9491C25.5818 37.5516 29.3718 33.7365 34.3636 33.7365C39.3554 33.7365 43.1454 37.5516 43.1454 41.9491Z"
                          strokeWidth="6"
                        />
                        <path
                          d="M83.4001 41.9491C83.4001 46.3466 79.61 50.1618 74.6182 50.1618C69.6265 50.1618 65.8364 46.3466 65.8364 41.9491C65.8364 37.5516 69.6265 33.7365 74.6182 33.7365C79.61 33.7365 83.4001 37.5516 83.4001 41.9491Z"
                          strokeWidth="6"
                        />
                        <path
                          d="M123.654 41.9491C123.654 46.3466 119.864 50.1618 114.873 50.1618C109.881 50.1618 106.091 46.3466 106.091 41.9491C106.091 37.5516 109.881 33.7365 114.873 33.7365C119.864 33.7365 123.654 37.5516 123.654 41.9491Z"
                          strokeWidth="6"
                        />
                        <line
                          x1="1169.35"
                          y1="27.7365"
                          x2="1237.09"
                          y2="27.7365"
                          strokeWidth="6"
                        />
                        <line
                          x1="1169.35"
                          y1="52.0305"
                          x2="1237.09"
                          y2="52.0305"
                          strokeWidth="6"
                        />
                        <line
                          x1="1169.35"
                          y1="39.8835"
                          x2="1237.09"
                          y2="39.8835"
                          strokeWidth="6"
                        />
                      </svg>

                      {card.url && (
                        <img
                          src={card.url}
                          alt={`homepage of ${card.title} app on a browser`}
                          className="absolute top-6 hidden md:block rounded-b-xl border-4 border-text bg-background"
                          width={450}
                        />
                      )}

                      <svg
                        width="320"
                        height="588"
                        viewBox="0 0 320 588"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[246px] self-center align-middle mb-14"
                        stroke="currentColor"
                      >
                        <path
                          d="M3 44H317V555C317 571.569 303.569 585 287 585H33C16.4315 585 3 571.569 3 555V44Z"
                          strokeWidth="8"
                        />
                        <path
                          d="M3 33C3 16.4315 16.4315 3 33 3H287C303.569 3 317 16.4315 317 33V43.5369H3V33Z"
                          strokeWidth="8"
                        />
                        <path
                          d="M30 24.2586C30 26.6899 28.004 28.6946 25.5 28.6946C22.996 28.6946 21 26.6899 21 24.2586C21 21.8273 22.996 19.8227 25.5 19.8227C28.004 19.8227 30 21.8273 30 24.2586Z"
                          strokeWidth="4"
                        />
                        <path
                          d="M47 24.2586C47 26.6899 45.004 28.6946 42.5 28.6946C39.996 28.6946 38 26.6899 38 24.2586C38 21.8273 39.996 19.8227 42.5 19.8227C45.004 19.8227 47 21.8273 47 24.2586Z"
                          strokeWidth="4"
                        />
                        <path
                          d="M64 24.2586C64 26.6899 62.004 28.6946 59.5 28.6946C56.996 28.6946 55 26.6899 55 24.2586C55 21.8273 56.996 19.8227 59.5 19.8227C62.004 19.8227 64 21.8273 64 24.2586Z"
                          strokeWidth="4"
                        />
                      </svg>

                      {card.phoneUrl && (
                        <img
                          src={card.phoneUrl}
                          alt={`screenshot of ${card.title} app on a mobile phone`}
                          className="absolute sm:right-[93px] sm:top-[23px] top-[16.75px] right-[93px] bg-background border-4 border-text rounded-b-xl"
                          width={134}
                        />
                      )}
                      {card.link && (
                        <a
                          href={card.link}
                          target="_blank"
                          className="flex items-center justify-center"
                        >
                          <button className="sm:absolute sm:right-[60px] bottom-[-10px] w-[200px] text-background border-4 p-2 border-text bg-no-repeat rounded-full element  text-lg">
                            Visit site
                          </button>
                        </a>
                      )}
                    </div>
                    <article className="flex flex-col items-center justify-center mt-6 min-h-[200px] sm:w-[700px] w-[90%]">
                      {card.content.split("\\\n").map((line, i) => (
                        <p key={i} className="text-center m-auto">
                          {line}
                          <br />
                          <br />
                        </p>
                      ))}
                    </article>
                  </div>
                  {card.id !== cards.length && (
                    <motion.svg
                      width="543"
                      height="249"
                      viewBox="0 0 543 249"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-text w-[15%] mr-8 cursor-pointer hidden lg:flex opacity-80"
                      onClick={handleScrollForward}
                      whileTap={{ scale: 0.9 }}
                    >
                      <rect y="61.9999" width="436" height="124" />
                      <path d="M542.18 124L434.337 231.544L434.024 16.7699L542.18 124Z" />
                    </motion.svg>
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
