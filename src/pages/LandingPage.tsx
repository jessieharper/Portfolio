import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";

const LandingPage = (): JSX.Element => {
  return (
    <section
      id="main"
      className="h-full w-full flex items-center justify-center lg:px-12 pt-96 lg:pt-8 pb-8 "
    >
      <div className="container flex my-auto items-center justify-center w-full h-full">
        <div className="absolute inset-0 z-10">
          <Earth />
        </div>

        <div className="flex flex-col md:flex-row w-full mx-auto justify-center md:justify-between items-center gap-10">
          <div className="card">
            <h1 className="text-4xl text-center leading-normal">
              Hiya, World!
            </h1>
            <p className="text-xs leading-6 h-full">
              My name is Jessica, and I am a Sheffield-based Junior Software
              Developer, amateur animator, and burgeoning crazy cat lady.
              Welcome to my portfolio!
            </p>
          </div>

          <div className="card space-y-2">
            <h2>Tech stack: </h2>

            <TechStackLogos />

            <a
              href={MyCV}
              download={"../assets/Jessica Harper CV.pdf"}
              className="flex items-center justify-center"
            >
              <button className="btn">Download my CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
