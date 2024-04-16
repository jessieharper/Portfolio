import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelector = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      name: faDesktop,
      text: "system",
    },
    {
      name: faMoon,
      text: "dark",
    },
    {
      name: faSun,
      text: "light",
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  return (
    <>
      {options.map((option) => (
        <button
          key={option.text}
          className={`w-6 h-auto my-1 mx-1 flex justify-center ${
            theme === option.text && "text-[#ec4c95]"
          }`}
          aria-hidden="true"
          onClick={() => setTheme(option.text)}
        >
          <FontAwesomeIcon icon={option.name} />
        </button>
      ))}
    </>
  );
};

export default ThemeSelector;
