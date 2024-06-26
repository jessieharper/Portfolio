import { TabsData } from "./TabsData";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { GlobalContext } from "../contexts/GlobalContext";

const About = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const { activeTab, setActiveTab, scrollProgress } = useContext(GlobalContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollableElement = containerRef.current;
    if (scrollableElement) {
      const scrollHeight = scrollableElement.scrollHeight;
      const clientHeight = scrollableElement.clientHeight;
      const scrollTop = (scrollProgress / 100) * (scrollHeight - clientHeight);
      scrollableElement.scrollTop = scrollTop;
    }
  }, [scrollProgress]);

  return (
    <section
      id="about"
      className="flex flex-col h-[100vh] w-full mt-14 items-center relative"
    >
      <h2 className="text-5xl font-semibold p-4 mt-4 z-20">About Me</h2>
      <article className=" flex flex-col w-[90%] sm:w-[650px] m-auto justify-center z-10">
        <ul className="flex items-center w-[100%] z-10 relative">
          {TabsData.map((tab, index) => (
            <li
              onClick={() => setActiveTab(index)}
              className={`sm:text-xl text-md h-full py-4 p-6 sm:w-[35%] w-[33.5%] text-center cursor-pointer  border-text rounded-t-xl transition-all ease-in-out font-semibold z-10 ${
                index !== activeTab && "border-b-4"
              } ${
                index === activeTab &&
                "underline  border-t-4 border-x-4 bg-card"
              } 
              ${
                tab.title === "Experience" &&
                "text-[0.1rem] sm:text-text text-background sm:text-xl "
              } 
              ${activeTab === 1 && tab.title === "Experience" && "text-card"} 
              
              `}
              key={tab.title}
            >
              {tab.title}
            </li>
          ))}
          <li className="sm:hidden absolute left-[47%] z-10 font-semibold">
            XP
          </li>
        </ul>
        {theme === "dark" && (
          <div className="top-1 absolute self-center z-0 rounded-full block noise lg:w-[40%] md:w-[60%] w-[80%] h-[70%]"></div>
        )}
        <div
          ref={containerRef}
          className="bg-card h-[70vh] overflow-auto px-8 pt-8 w-full border-b-4 rounded-b-2xl border-x-4 border-text z-10"
        >
          {TabsData.map((data, index) => (
            <section
              className={index === activeTab ? "flex my-6 leading-7" : "hidden"}
              key={index}
            >
              {data.content}
            </section>
          ))}
        </div>
        <p></p>

        <br />
      </article>
    </section>
  );
};

export default About;
