// import { useState } from "react";
// import { useLocation } from "react-router-dom";

const Header = (): JSX.Element => {
  // const location = useLocation();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const menuIcon = !isOpen ? "menu.svg" : "times.svg";
  // let logo: string;

  // switch (location.pathname) {
  //   case "/about":
  //     logo = "about-logo";
  //     break;
  //   case "/projects":
  //     logo = "projects-logo";
  //     break;
  //   default:
  //     logo = "jessharper";
  // }

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <header
        id="home"
        className="container bg-transparent flex flex-row h-30 w-full items-center py-2 md:py-4 relative z-50"
      >
        <h1 className="text-6xl lg:text-7xl xl:text-8xl w-full h-full text-center text-accent leading-normal md:leading-normal lg:leading-normal xl:leading-normal md:text-nowrap header relative">
          Jessica Harper
        </h1>
        {/* <Link to="/">
          <div
            style={{
              maskImage: `url('/images/logos/${logo}.svg')`,
              WebkitMaskImage: `url('/images/logos/${logo}.svg')`,
            }}
            className="block w-56 md:w-72 lg:w-96 h-20 md:h-24 lg:h-32 icon-mask bg-primary"
          ></div>
        </Link> */}
        {/* <nav className="flex flex-col lg:gap-8 h-[96px]">
          <div className="hidden w-auto md:inline-flex justify-end">
            <ThemeSelector />
          </div>
          <div className="h-full w-full flex items-center text-sm lg:text-lg gap-4 lg:gap-8 ">
            <Link to="/about" className="hidden md:flex">
              About Me
            </Link>

            <Link to="/projects" className="hidden md:flex">
              Projects
            </Link>
            <Link to="/contact" className="hidden md:flex ">
              Contact
            </Link>
          </div>
        </nav>
        <button
          className="md:hidden flex cursor-pointer ml-2"
          onClick={toggleMenu}
        >
          <div
            style={{
              maskImage: `url('/images/icons/${menuIcon}')`,
              WebkitMaskImage: `url('/images/icons/${menuIcon}')`,
            }}
            className="icon-mask bg-primary h-10 w-10"
          ></div>
        </button> */}
      </header>
      {/* <NavBar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
};
// https://github.com/prplx/svg-logos //

export default Header;
