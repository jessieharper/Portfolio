import { TabsData } from "./TabsData";
import { useState } from "react";

const About = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="about"
      className="flex flex-col h-[100vh] w-full mt-10 items-center"
    >
      <h2 className="text-5xl font-semibold p-4 mt-4">About Me</h2>
      <article className=" flex flex-col w-[90%] sm:w-[650px] m-auto justify-center bg-background">
        <ul className="flex items-center w-[100%]">
          {TabsData.map((tab, index) => (
            <li
              onClick={() => setActiveTab(index)}
              className={` bg-card h-full text-xl py-4 p-6 w-[35%] text-center cursor-pointer  border-text rounded-t-xl transition-all ease-in-out font-bold  ${
                index !== activeTab && "noise border-b-2"
              } ${index === activeTab && "underline  border-t-2 border-x-2 "} $
               
              `}
              key={tab.title}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="bg-card dark:bg-background h-[560px] overflow-auto px-8 pt-8 w-full border-b-2 rounded-b-2xl border-x-2 border-text">
          {TabsData.map((data, index) =>
            data.content.split("\\\n").map((line) => (
              <p
                className={index === activeTab ? "flex" : "hidden"}
                key={index}
              >
                {line}
                <br />
                <br />
              </p>
            ))
          )}
        </div>
        <p></p>

        <br />
      </article>
    </section>
  );
};

export default About;
