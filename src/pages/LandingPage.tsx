import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";

const LandingPage = (): JSX.Element => {
  return (
    <section id="main" className="absolute top-0 h-full w-full ">
      <div className="container flex items-center h-full">
        <div className="absolute inset-0 z-10">
          <Earth />
        </div>

        <div className="relative mt-12 flex flex-col w-full max-w-[21.5rem] z-10">
          <div className="absolute left-14 top-2 w-full h-full bg-primary opacity-75 z-0"></div>

          <div className="relative w-full bg-card border-4 border-primary p-8 ml-12 gap-8 justify-center items-center flex flex-col">
            <h1 className="text-4xl text-center">Hiya, World!</h1>
            <p className="text-xs leading-6 h-full">
              My name is Jessica, and I am a Sheffield-based Junior Software
              Developer, amateur animator, and burgeoning crazy cat lady.
              Welcome to my portfolio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
