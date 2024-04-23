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
      <article className="flex flex-col w-[90%] sm:w-[650px]  h-auto m-auto justify-center bg-background">
        <ul className="flex items-center w-[100%]">
          {TabsData.map((tab, index) => (
            <li
              onClick={() => setActiveTab(index)}
              className={`h-full text-xl py-4 p-6 w-[35%] text-center cursor-pointer border-t-2  border-text rounded-t-lg transition-all 0.1s ease-in-out border-x-2 ${
                index !== activeTab && "noise border-b-2"
              } ${index === activeTab && "underline"}`}
              key={tab.title}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="overflow-hidden px-8 pt-8 w-full h-full border-b-2 rounded-b-lg border-x-2 border-text">
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
