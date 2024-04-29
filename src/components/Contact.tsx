import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyCV from "../assets/Jessica Harper CV.pdf";

const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="flex flex-col h-[100vh] items-center justify-center sm:mt-24 mt-44 relative"
    >
      <h2 className="text-5xl font-semibold">Contact Me</h2>
      <div className="flex flex-row justify-center">
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
      <form
        action="https://formsubmit.co/jessieharper12@gmail.com"
        method="POST"
        className="flex flex-col w-[300px] sm:w-[550px] text-[#19110b] border-2 border-text rounded-2xl p-6 mt-6 z-[99999]"
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="px-4 py-2 my-4 rounded-2xl bg-[#fef8f0] border-2 border-[#19110b]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="px-4 py-2 my-4 rounded-2xl bg-[#fef8f0] border-2 border-[#19110b]"
          required
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={8}
          className=" rounded-xl my-6 p-4 bg-[#fef8f0] border-2 border-[#19110b]"
          placeholder="Type your message..."
          required
        ></textarea>

        <input
          type="submit"
          value={"Submit"}
          className=" text-text my-4 border-4 border-text rounded-full cursor-pointer py-2 w-[90%] self-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-no-repeat"
        />
      </form>
    </section>
  );
};

export default Contact;
