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
        className="flex flex-row h-min w-full justify-between items-center p-4 z-20 relative"
      >
        <div
          style={{
            maskImage: "url('/JESSICA HARPER.svg')",
            WebkitMaskImage: "url('/JESSICA HARPER.svg')",
          }}
          className="hidden md:block w-72 lg:w-96 h-20 lg:h-32 icon-mask bg-primary"
        ></div>
        <nav className="flex flex-col lg:gap-8">
          <div className="w-auto inline-flex justify-end">
            <ThemeSelector />
          </div>
          <div className="h-full w-full flex items-center font-depixel tracking-widest uppercase text-sm lg:text-lg gap-4 lg:gap-8">
            <a href="#about" className="hidden md:flex">
              About Me
            </a>
            <a href="#projects" className="hidden md:flex">
              Projects
            </a>
            <a href="#contact" className="hidden md:flex ">
              Contact Me
            </a>
          </div>
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
