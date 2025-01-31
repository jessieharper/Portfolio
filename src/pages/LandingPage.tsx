import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";

const LandingPage = (): JSX.Element => {
  return (
    <section id="main" className="absolute top-0 h-full w-full px-12">
      <div className="container flex items-center w-full h-full">
        <div className="absolute inset-0 z-10">
          <Earth />
        </div>

        <div className="flex w-full mx-auto justify-between items-end">
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

          <div className="card space-y-4">
            <h2>Tech stack: </h2>

            <TechStackLogos />

            <a
              href={MyCV}
              download={"../assets/Jessica Harper CV.pdf"}
              className="flex items-center justify-center"
            >
              <button className="text-body border-primary border-2 px-6 py-4 bg-no-repeat bg-gradient-to-r from-pink-500 to-yellow-500 w-full shadow-sm">
                Download my CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
