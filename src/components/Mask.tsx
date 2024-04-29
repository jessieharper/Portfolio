import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ThemeSelector from "./ThemeSelector";
import MyCV from "../assets/Jessica Harper CV.pdf";

interface IMask {
  setIsHovered: (isHovered: boolean) => void;
}

const Mask = (props: IMask): JSX.Element => {
  return (
    <>
      <header className="lg:flex flex-row h-auto w-[100%] justify-between items-center p-4 mb-10 m-auto">
        <div className="flex flex-row">
          <h1
            className="hidden md:flex text-4xl font-semibold"
            onMouseEnter={() => {
              props.setIsHovered(true);
            }}
            onMouseLeave={() => {
              props.setIsHovered(false);
            }}
          >
            Jessica Harper
          </h1>
          <a href="https://github.com/jessieharper" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" className="mt-2 mx-6" />
          </a>
          <a href="https://www.linkedin.com/in/jessie-harper/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mt-2" />
          </a>
        </div>
        <nav>
          <ul className="h-full flex flex-row items-center align-center mt-2 ">
            <div className="border-2 border-background rounded-full flex  flex-row">
              <ThemeSelector />
            </div>
            <a href="#about" className="mx-4 hidden md:flex">
              About Me
            </a>
            <a href="#projects" className="mr-4 hidden md:flex">
              Projects
            </a>
            <a href="#contact" className="mr-4 hidden md:flex">
              Contact Me
            </a>
          </ul>
        </nav>
      </header>
      <section className="h-screen flex justify-center items-center mt-[-72px]">
        <span
          className="h-auto flex sm:flex-row flex-col items-center"
          onMouseEnter={() => {
            props.setIsHovered(true);
          }}
          onMouseLeave={() => {
            props.setIsHovered(false);
          }}
        >
          <h2 className="max-w-[310px] sm:max-w-[350px] sm:text-9xl text-8xl font-extrabold ">
            Hiya, <br />
            World
          </h2>
          <span className="ml-6 flex flex-col max-w-[310px] sm:max-w-[350px] sm:p-2 sm:py-4 sm:rounded-2xl  sm:border-2 sm:border-background">
            <p className="text-wrap">
              My name is Jessica, and I am a Sheffield-based Junior Software
              Developer, amateur animator, and burgeoning crazy cat lady.
              Welcome to my portfolio!
            </p>
            <br />
            <h3 className="font-semibold mb-2">Tech stack: </h3>
            <span className="flex sm:flex-row flex-col items-center justify-between mx-4 h-[48px]">
              <p>
                JavaScript | TypeScript | Tailwind | React | NextJS | Postgres
              </p>
            </span>
            <a
              href={MyCV}
              download={"../assets/Jessica Harper CV.pdf"}
              className="flex items-center justify-center"
            >
              <button className="border-2 p-2 w-[80%] self-center bg-no-repeat mt-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 font-semibold border-background text-text">
                Download my CV
              </button>
            </a>
          </span>
        </span>
      </section>
    </>
  );
};

export default Mask;
