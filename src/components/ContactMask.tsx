import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyCV from "../assets/Jessica Harper CV.pdf";
import { IMask } from "./Mask";

const ContactMask = (props: IMask): JSX.Element => {
  return (
    <section
      id="contact"
      className="flex flex-col h-[100vh] items-center justify-center mt-24 relative"
    >
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
      <form className="flex flex-col w-[300px] sm:w-[550px] text-text border-2 border-background rounded-2xl p-6 mt-6 ">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="px-4 py-2 my-4 rounded-2xl border-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="px-4 py-2 my-4 rounded-2xl border-2"
          required
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={8}
          className="rounded-xl my-6 p-4 border-2"
          placeholder="Type your message..."
          required
        ></textarea>

        <input
          type="submit"
          value={"Submit"}
          className=" text-text my-4 border-2 border-background rounded-full cursor-pointer py-2 w-[90%] self-center"
        />
      </form>
    </section>
  );
};

export default ContactMask;
