import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelector = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = ["system", "dark", "light"];

  useEffect(() => {
    const updateTheme = () => {
      if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      if (theme === "dark" || theme === "light") {
        localStorage.setItem("theme", theme);
      } else {
        localStorage.removeItem("theme");
      }
    };

    updateTheme();

    if (theme === "system") {
      darkQuery.addEventListener("change", updateTheme);
      return () => darkQuery.removeEventListener("change", updateTheme);
    }
  }, [theme, darkQuery]);

  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <button
          key={option}
          className="my-1 flex justify-center"
          onClick={() => setTheme(option)}
          aria-label={`Set theme to ${option}`}
        >
          <div
            style={{
              maskImage: `url('/images/icons/${option}.svg')`,
              WebkitMaskImage: `url('/images/icons/${option}.svg')`,
            }}
            className={`h-6 w-6 icon-mask  ${
              theme === option ? "bg-accent" : "bg-primary"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
