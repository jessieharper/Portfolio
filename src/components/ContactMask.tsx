import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyCV from "../assets/Jessica Harper CV.pdf";
import { IMask } from "./Mask";

const ContactMask = (props: IMask): JSX.Element => {
  return (
    <section className="flex flex-col h-[100vh] items-center justify-center mt-14 relative">
      <h2
        className="text-5xl font-semibold"
        onMouseEnter={() => {
          props.setIsHovered(true);
        }}
        onMouseLeave={() => {
          props.setIsHovered(false);
        }}
      >
        Contact Me
      </h2>
      <div
        className="flex flex-row justify-center"
        onMouseEnter={() => {
          props.setIsHovered(true);
        }}
        onMouseLeave={() => {
          props.setIsHovered(false);
        }}
      >
        <a href="https://github.com/jessieharper" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2xl" className="mt-6 mx-6" />
        </a>
        <a href="https://www.linkedin.com/in/jessie-harper/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mt-6 mx-6" />
        </a>
        <a href={MyCV} download={"../assets/Jessica Harper CV.pdf"}>
          <FontAwesomeIcon icon={faDownload} size="2xl" className="mt-6 mx-6" />
        </a>
      </div>
      <div className="flex flex-col w-[300px] sm:w-[550px] h-[550px] text-text border-2 border-text rounded-2xl p-6 mt-6 "></div>
    </section>
  );
};

export default ContactMask;
