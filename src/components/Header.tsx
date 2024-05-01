import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";
import NavBar from "./NavBar";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        id="home"
        className="flex flex-row h-auto w-full justify-between items-center p-4 mb-10 m-auto z-20 relative"
      >
        <div className="flex flex-row">
          <h1 className="md:flex text-4xl font-semibold">Jessica Harper</h1>

          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="mt-2 mx-6 hidden lg:flex"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="mt-2 hidden lg:flex"
          />
        </div>
        <nav>
          <ul className="h-full flex flex-row items-center align-center mt-2 ">
            <div className="border-2 border-text rounded-full flex  flex-row">
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
        <button
          className="md:hidden flex cursor-pointer ml-2"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};
// https://github.com/prplx/svg-logos //

export default Header;
