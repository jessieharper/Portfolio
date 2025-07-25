// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MyCV from "../assets/Jessica Harper CV.pdf";

const Contact = (): JSX.Element => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const navigate = useNavigate();

  // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   const formData = new FormData(event.currentTarget);
  //   formData.append("access_key", "8400f33f-baff-49dc-b140-6ae3dc46f830");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setIsLoading(false);

  //     navigate("/thanks");
  //     event.currentTarget.reset();
  //   } else {
  //     console.log("Error", data);
  //   }
  // };

  return (
    <>
      <section
        id="contact"
        className="container flex flex-col h-[20vh] items-start justify-center mt-8 relative"
      >
        <div className="px-8">
          <h2 className="text-5xl font-semibold my-auto flex">Contact Me</h2>
        </div>
      </section>
    </>
  );
};

export default Contact;
