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
        className="flex flex-col h-[100vh] items-center justify-center mt-14  relative"
      >
        <h2 className="text-5xl font-semibold">Contact Me</h2>
      </section>
    </>
  );
};

export default Contact;
