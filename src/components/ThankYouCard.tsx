import { Link } from "react-router-dom";

const ThankYouCard = (): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col w-[300px] sm:w-[550px] h-[550px] text-text border-2 border-text rounded-2xl  p-6 mt-6 items-center justify-center">
        <h3 className="text-4xl font-semibold">
          Thank you for your message! I'll get back to you ASAP.
        </h3>
        <Link to="/">Go back</Link>
      </div>
    </section>
  );
};

export default ThankYouCard;
