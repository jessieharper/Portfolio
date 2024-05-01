import { IMask } from "./Mask";
import ThemeSelector from "./ThemeSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeaderMask = (props: IMask): JSX.Element => {
  return (
    <>
      <header className="flex flex-row h-auto w-[100vw] justify-between items-center p-4 mb-10 m-auto z-20 relative">
        <div className="md:flex flex-row">
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
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="mt-2 mx-6 flex"
            />
          </a>
          <a href="https://www.linkedin.com/in/jessie-harper/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="mt-2 flex"
            />
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
            <a href="#contact" className="mr-4 hidden md:flex ml-2">
              Contact Me
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderMask;
