import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="flex flex-col h-[100vh] items-center justify-center mt-44 relative"
    >
      <div className="flex flex-row">
        <h2 className="text-5xl font-semibold">Contact Me</h2>
        <FontAwesomeIcon icon={faGithub} size="2xl" className="mt-2 mx-6" />
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mt-2" />
      </div>
      <form
        action=""
        className="flex flex-col w-[310px] sm:w-[550px] text-background border-2 border-text rounded-2xl p-6 mt-8"
      >
        <input
          type="text"
          placeholder="Name*"
          className="px-4 py-2 my-4 rounded-2xl"
          required
        />
        <input
          type="email"
          placeholder="Email*"
          className="px-4 py-2 my-4 rounded-2xl"
          required
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="rounded-xl my-6 p-4"
          placeholder="Type your message..."
          required
        ></textarea>

        <input
          type="submit"
          value={"Submit"}
          className=" text-text my-4 border-2 border-text rounded-full cursor-pointer py-2 w-[90%] self-center"
        />
      </form>
    </section>
  );
};

export default Contact;
