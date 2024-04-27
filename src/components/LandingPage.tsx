import Earth from "./Earth";
import TechStackLogos from "./TechStackLogos";

const LandingPage = (): JSX.Element => {
  return (
    <section
      id="main"
      className="h-screen flex justify-center items-center  mt-[-72px]"
    >
      <div className="flex sm:flex-row flex-col items-center relative">
        <div className="hidden sm:flex self-center border-4 border-text absolute left-[15%] rounded-full w-[500px] h-[500px] z-10">
          <div className="right-[-16%] absolute self-center z-0 rounded-full block noise w-[135%] h-[135%]"></div>
          <Earth />
        </div>

        <h2 className="max-w-[310px] sm:max-w-[350px] sm:text-9xl text-8xl font-extrabold z-10">
          Hiya, <br />
          World
        </h2>
        <span className="ml-6 flex flex-col max-w-[310px] sm:max-w-[350px] z-10 sm:p-2 sm:py-4 sm:rounded-2xl sm:bg-background sm:border-2 sm:border-text">
          <p className="text-wrap ">
            My name is Jessica, and I am a Sheffield-based Junior Software
            Developer, amateur animator, and burgeoning crazy cat lady. Welcome
            to my portfolio!
          </p>
          <br />
          <h3 className="font-semibold mb-2">Tech stack: </h3>
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <TechStackLogos />
          </span>
          <button className="text-background border-2 p-2 border-text w-[80%] self-center bg-no-repeat mt-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 z-10 font-semibold">
            See full stack
          </button>
        </span>
      </div>
    </section>
  );
};

export default LandingPage;
