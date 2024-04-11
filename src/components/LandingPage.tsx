import { ICursor } from "./models/CursorProps";

const LandingPage = (props: ICursor): JSX.Element => {
  return (
    <section className="h-[85vh] flex justify-center items-center">
      <span
        onMouseOver={() => {
          if (props.setIsHovered) props.setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (props.setIsHovered) props.setIsHovered(false);
        }}
        className="h-auto flex sm:flex-row flex-col items-center"
      >
        <h2 className="max-w-[310px] sm:max-w-[350px] sm:text-9xl text-8xl font-extrabold">
          Hiya, <br />
          World
        </h2>
        <span className="ml-6 flex flex-col max-w-[310px] sm:max-w-[350px]">
          <p className="text-wrap">
            My name is Jessica, and I am a Sheffield-based Junior Software
            Developer, amateur animator, and burgeoning crazy cat lady. Welcome
            to my portfolio!
          </p>
          <br />
          <h3 className="font-semibold mb-2">Tech stack: </h3>
          <span className="flex sm:flex-row flex-col items-center justify-center">
            <span className="w-[310px] flex flex-row justify-between mt-4 sm:mt-0">
              <img
                src="/javascript.svg"
                alt="JavaScript logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
              />
              <img
                src="/typescript-icon.svg"
                alt="TypeScript logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
                height={48}
                width={48}
              />

              <img
                src="/tailwindcss-icon.svg"
                alt="Tailwind CSS logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
              />
            </span>
            <span className="w-[310px] flex flex-row justify-between mt-4 sm:mt-0">
              <img
                src="/react.svg"
                alt="React logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
              />
              <img
                src="/nextjs-icon.svg"
                alt="NextJs logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
              />
              <img
                src="/postgresql.svg"
                alt="PostgreSQL logo"
                className="mr-2"
                style={
                  localStorage.theme === "dark" ? { filter: "invert(1)" } : {}
                }
              />
            </span>
          </span>
        </span>
      </span>
    </section>
  );
};

export default LandingPage;
