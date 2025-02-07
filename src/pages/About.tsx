import { useEffect } from "react";

const About = (): JSX.Element => {
  useEffect(() => {
    document.documentElement.classList.add("about");
    return () => {
      document.documentElement.classList.remove("about");
    };
  }, []);

  return <></>;
};

export default About;
