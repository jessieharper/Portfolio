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
        <div className="hidden md:block md:w-96">
          <img className="w-full h-full" src={"/JESSICA HARPER.svg"} alt="" />
        </div>
        <nav className="flex flex-col mb-auto gap-12">
          <div className="w-auto inline-flex justify-end">
            <ThemeSelector />
          </div>
          <div className="h-full flex flex-row items-center align-center mt-2 font-depixel font-light tracking-widest uppercase text-lg gap-16">
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
