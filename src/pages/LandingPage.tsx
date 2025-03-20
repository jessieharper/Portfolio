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
        <div className="absolute inset-0 -z-10 xl:z-10 2xl:z-30">
          <Earth />
        </div>

        <div className="flex flex-col md:flex-row w-full mx-auto justify-center md:justify-between gap-10 h-full">
          <div className="card mb-auto mx-auto lg:mx-0 flex">
            <p className="text-xs leading-5 h-full">
              <span className="font-depixel text-3xl">Yo!</span> My name is
              Jessica, and I am a Sheffield-based Software Developer, amateur
              animator, and burgeoning crazy cat lady.
              <br />
              <br />
              This is my creative dumping ground. Take a look around - any
              feedback/praise/criticism/~
              <span className="uppercase font-bold">job offers</span>
              ~/questions(?) are welcome.
            </p>
          </div>

          <div className="w-full max-w-[28rem] md:max-w-[21.5rem] h-min border-4 border-primary p-8  flex flex-col gap-8 bg-card shadow mt-auto mx-auto lg:mx-0">
            <div className="h-full space-y-2">
              <h3 className="text-sm">Main Tech stack: </h3>
            </div>
            <div className="relative z-40 gap-8 flex flex-col">
              <TechStackLogos />

              <a
                href={MyCV}
                download={"../assets/Jessica Harper CV.pdf"}
                className="flex items-center justify-center"
              >
                <button className="btn text-sm">Download my CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
