import { ICursor } from "./models/CursorProps";

const Header = (props: ICursor): JSX.Element => {
  return (
    <>
      <header className="flex flex-row h-auto w-full justify-between items-center p-4 m-auto">
        <h1
          onMouseOver={() => {
            if (props.setIsHovered) props.setIsHovered(true);
          }}
          onMouseLeave={() => {
            if (props.setIsHovered) props.setIsHovered(false);
          }}
          className="hidden md:flex text-4xl font-semibold"
        >
          Jessica Harper
        </h1>

        <nav
          onMouseOver={() => {
            if (props.setIsHovered) props.setIsHovered(true);
          }}
          onMouseLeave={() => {
            if (props.setIsHovered) props.setIsHovered(false);
          }}
        >
          <ul className="h-full flex flex-row items-end align-bottom mt-2 ">
            <li className="mr-4">About Me</li>
            <li className="mr-4">Projects</li>
            <li className="mr-4">Contact Me</li>
            <li className="mr-2">Resources</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
// https://github.com/prplx/svg-logos //

export default Header;
