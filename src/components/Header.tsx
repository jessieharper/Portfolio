import { gsap } from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        className="fixed flex flex-row h-min w-full justify-between items-center p-4 z-20 container"
      >
        <Link to="/">
          <div
            style={{
              maskImage: "url('/JESSICA_HARPER.svg')",
              WebkitMaskImage: "url('/JESSICA_HARPER.svg')",
            }}
            className="hidden md:block w-72 lg:w-96 h-20 lg:h-32 icon-mask bg-primary"
          ></div>
        </Link>
        <nav className="flex flex-col lg:gap-8">
          <div className="w-auto inline-flex justify-end">
            <ThemeSelector />
          </div>
          <div className="h-full w-full flex items-center text-sm lg:text-lg gap-4 lg:gap-8">
            <Link to="/about" className="hidden md:flex">
              About Me
            </Link>
            <Link to="/projects" className="hidden md:flex">
              Projects
            </Link>
            <Link to="/contact" className="hidden md:flex ">
              Contact Me
            </Link>
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
