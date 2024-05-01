import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyCV from "../assets/Jessica Harper CV.pdf";
import Loading from "./Loading";

const Contact = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8400f33f-baff-49dc-b140-6ae3dc46f830");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsLoading(false);

      navigate("/thanks");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col h-[100vh] items-center justify-center sm:mt-24 mt-0 relative"
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
        className="flex flex-col w-[90%] sm:w-[550px] h-[550px] text-[#19110b] border-2 border-text rounded-2xl p-6 mt-6 z-[99999]"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="px-4 py-2 my-4 rounded-2xl bg-[#ffffff] border-2 border-[#19110b]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="px-4 py-2 my-4 rounded-2xl bg-[#ffffff] border-2 border-[#19110b]"
          required
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={8}
          className=" rounded-xl my-6 p-4 bg-[#ffffff] border-2 border-[#19110b]"
          placeholder="Type your message..."
          required
        ></textarea>
        {!isLoading ? (
          <input
            type="submit"
            value={"Submit"}
            className=" text-text my-2 border-4 border-text rounded-full cursor-pointer py-2 w-[90%] self-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-no-repeat"
          />
        ) : (
          <div className="flex items-center justify-center my-2 py-2">
            <Loading />
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
