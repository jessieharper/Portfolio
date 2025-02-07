import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";
import NavBar from "./NavBar";
import TextShuffler from "./TextScrambler";

const Header = (): JSX.Element => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        id="home"
        className="flex flex-row h-min w-full justify-between items-center p-4 z-20 container"
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
        <nav className="flex flex-col lg:gap-8 h-[96px]">
          <div className="w-auto inline-flex justify-end">
            <ThemeSelector />
          </div>
          <div className="h-full w-full flex items-center text-sm lg:text-lg gap-4 lg:gap-8 ">
            <Link to="/about" className="hidden md:flex">
              {!isHomePage ? <TextShuffler text="About Me" /> : "About Me"}
            </Link>

            <Link to="/projects" className="hidden md:flex">
              {!isHomePage ? <TextShuffler text="Projects" /> : "Projects"}
            </Link>
            <Link to="/contact" className="hidden md:flex ">
              {!isHomePage ? <TextShuffler text="Contact" /> : "Contact"}
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
