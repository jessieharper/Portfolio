import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { cards } from "../components/ProjectCards";
import { GlobalContext } from "../contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LargeProjectCard from "../components/LargeProjectCard";
import SmallProjectCard from "../components/SmallProjectCard";

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
      className="relative sm:h-[100vh] h-[160vh] w-[100vw] bg-background sm:mt-44 lg:overflow-hidden overflow-x-scroll"
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
                      className="fill-current hidden lg:flex w-[15%] ml-8 cursor-pointer opacity-90"
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
                      <LargeProjectCard />
                      {card.url && (
                        <img
                          src={card.url}
                          alt={`homepage of ${card.title} app on a browser`}
                          className="absolute top-6 hidden md:block rounded-b-xl border-4 border-text bg-background"
                          width={450}
                        />
                      )}
                      <SmallProjectCard />
                      {card.phoneUrl && (
                        <img
                          src={card.phoneUrl}
                          alt={`screenshot of ${card.title} app on a mobile phone`}
                          className="absolute sm:right-[93px] sm:top-[23px] top-[16.75px] right-[93px] bg-background border-4 border-text rounded-b-xl"
                          width={134}
                        />
                      )}
                      <motion.div className="flex flex-row items-center justify-center">
                        {card.id !== 1 && (
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="block sm:hidden cursor-pointer m-4 mt-[-5%]"
                            size="2xl"
                            onClick={handleScrollBackward}
                          />
                        )}
                        {card.id !== cards.length && (
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="block sm:hidden cursor-pointer m-4 mt-[-5%]"
                            size="2xl"
                            onClick={handleScrollForward}
                          />
                        )}
                      </motion.div>
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
                      className="fill-current text-text w-[15%] mr-8 cursor-pointer hidden lg:flex opacity-90"
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
