import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";

const LandingPage = (): JSX.Element => {
  const cardContainer =
    "shadow relative mt-12 flex flex-col w-full max-w-[21.5rem] z-10";
  const cardClass =
    "w-full h-full bg-card border-4 border-primary p-8 gap-8  flex flex-col";
  return (
    <section id="main" className="absolute top-0 h-full w-full ">
      <div className="container flex items-center w-full h-full">
        <div className="absolute inset-0 z-10">
          <Earth />
        </div>

        <div className="flex w-full mx-auto justify-between">
          <div className={cardContainer}>
            <div className={cardClass}>
              <h1 className="text-4xl text-center">Hiya, World!</h1>
              <p className="text-xs leading-6 h-full">
                My name is Jessica, and I am a Sheffield-based Junior Software
                Developer, amateur animator, and burgeoning crazy cat lady.
                Welcome to my portfolio!
              </p>
            </div>
          </div>

          <div className={cardContainer}>
            <div className={`${cardClass} font-depixel`}>
              <h2>Tech Stack:</h2>
              <p className="text-xs leading-6 h-full"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
