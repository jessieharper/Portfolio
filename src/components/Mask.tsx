import AboutMask from "./AboutMask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import MyCV from "../assets/Jessica Harper CV.pdf";
import ProjectsMask from "./ProjectsMask";
import ContactMask from "./ContactMask";
import HeaderMask from "./HeaderMask";

export interface IMask {
  setIsHovered: (isHovered: boolean) => void;
}

const Mask = (props: IMask): JSX.Element => {
  return (
    <>
      <HeaderMask setIsHovered={props.setIsHovered} />
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
          <h2 className="max-w-[310px] sm:max-w-[350px] sm:text-9xl sm:ml-auto text-9xl font-extrabold ">
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
      <AboutMask setIsHovered={props.setIsHovered} />
      <ProjectsMask setIsHovered={props.setIsHovered} />
      <ContactMask setIsHovered={props.setIsHovered} />
      <footer className="sm:flex fixed hidden bottom-14 right-14">
        <a href="#home">
          <FontAwesomeIcon icon={faCircleUp} size="2xl" />
        </a>
      </footer>
    </>
  );
};

export default Mask;
