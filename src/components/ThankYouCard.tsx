const ThankYouCard = (): JSX.Element => {
  return (
    <section className="h-[100vh] w-[100vw] flex items-center justify-center  overflow-hidden">
      <div className="flex flex-col w-[300px] sm:w-[550px] h-[550px] text-text border-2 border-text rounded-2xl  p-6 mt-6 items-center justify-center">
        <h3 className="text-4xl font-semibold text-center pb-6">
          Thank you for your message! I'll try to get back to you ASAP.
        </h3>
        <a
          href="https://jessicaharper.netlify.app/"
          className="border-2 border-text rounded-2xl p-2 bg-gradient-to-r from-pink-500 to-yellow-500 bg-no-repeat font-semibold"
        >
          Go back
        </a>
      </div>
    </section>
  );
};

export default ThankYouCard;
