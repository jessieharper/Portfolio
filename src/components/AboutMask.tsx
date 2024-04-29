import { TabsData } from "./TabsData";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { IMask } from "./Mask";

const AboutMask = (props: IMask): JSX.Element => {
  const { activeTab, setActiveTab, setScrollProgress } =
    useContext(GlobalContext);

  const handleScroll = () => {
    const scrollableElement = document.getElementById("about-container");
    if (scrollableElement) {
      const scrollTop = scrollableElement.scrollTop;
      const scrollHeight = scrollableElement.scrollHeight;
      const clientHeight = scrollableElement.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const scrollableElement = document.getElementById("about-container");
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col h-[100vh] w-full mt-44 items-center relative"
    >
      <h2
        onMouseEnter={() => {
          props.setIsHovered(true);
        }}
        onMouseLeave={() => {
          props.setIsHovered(false);
        }}
        className="text-5xl font-semibold p-4 mt-4 z-20"
      >
        About Me
      </h2>
      <article className=" flex flex-col sm:w-[650px] m-auto justify-center z-10">
        <ul className="flex items-center w-[100%] relative">
          {TabsData.map((tab, index) => (
            <li
              onClick={() => setActiveTab(index)}
              className={`sm:text-xl text-md h-full py-4 p-6 sm:w-[35%] w-[33.5%] text-center cursor-pointer border-background rounded-t-xl transition-all ease-in-out font-semibold ${
                index !== activeTab && "border-b-4"
              } ${index === activeTab && "underline  border-t-4 border-x-4"} 
              
              `}
              key={tab.title}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div
          id="about-container"
          className=" h-[70vh] overflow-auto px-8 pt-8 w-full border-b-4 rounded-b-2xl border-x-4 border-background z-10"
        >
          {TabsData.map((data, index) => (
            <section
              className={
                index === activeTab
                  ? "flex my-6 leading-7 text-text "
                  : "hidden"
              }
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

export default AboutMask;
