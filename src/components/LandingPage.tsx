// import MaskIcons from "./MaskIcons";
import { ICursor } from "./models/CursorProps";
import Earth from "./Earth";
import TechStackLogos from "./TechStackLogos";

const LandingPage = (props: ICursor): JSX.Element => {
  return (
    <section className="h-[80vh] flex justify-center items-center ">
      <span
        onMouseOver={() => {
          if (props.setIsHovered) props.setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (props.setIsHovered) props.setIsHovered(false);
        }}
        className="h-auto flex sm:flex-row flex-col items-center relative"
      >
        <div className="hidden sm:flex self-center justify-center align-middle border-4 border-text absolute left-[15%] rounded-full w-[500px] h-[500px] z-0">
          <Earth />
        </div>
        <h2 className="max-w-[310px] sm:max-w-[350px] sm:text-9xl text-8xl font-extrabold z-10">
          Hiya, <br />
          World
        </h2>
        <span className="ml-6 flex flex-col max-w-[310px] sm:max-w-[350px] z-10 p-2 py-4 rounded-2xl bg-background border-2 border-text">
          <p className="text-wrap">
            My name is Jessica, and I am a Sheffield-based Junior Software
            Developer, amateur animator, and burgeoning crazy cat lady. Welcome
            to my portfolio!
          </p>
          <br />
          <h3 className="font-semibold mb-2">Tech stack: </h3>
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <TechStackLogos />
          </span>
          <button className="text-background dark:text-text border-2 p-2 border-text w-[80%] self-center bg-no-repeat mt-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 z-10 font-semibold">
            See full stack
          </button>
        </span>
      </span>
    </section>
  );
};

export default LandingPage;
