const ThankYouCard = (): JSX.Element => {
  return (
    <section id="thanks">
      <div className="flex flex-col w-[300px] sm:w-[550px] h-[550px] text-text border-2 border-text rounded-2xl  p-6 mt-6">
        <h3>Thank you!</h3>
        <p>I'll try to get back to you ASAP.</p>
      </div>
    </section>
  );
};

export default ThankYouCard;
