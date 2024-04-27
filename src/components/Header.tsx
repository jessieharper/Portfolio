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
        className="flex flex-row h-auto w-full justify-between items-center p-4 mb-10 m-auto"
      >
        <h1 className="hidden md:flex text-4xl font-semibold">
          Jessica Harper
        </h1>
        <nav>
          <ul className="h-full flex flex-row items-center align-center mt-2 ">
            <div className="border-2 border-text rounded-full flex  flex-row">
              <ThemeSelector />
            </div>
            <li className="mx-4 hidden md:flex">About Me</li>
            <li className="mr-4 hidden md:flex">Projects</li>
            <li className="mr-4 hidden md:flex">Contact Me</li>
          </ul>
        </nav>
        <button
          className="md:hidden flex cursor-pointer mr-4"
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
