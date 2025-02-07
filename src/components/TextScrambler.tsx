import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const getRandomLetters = (text: string) => {
  const letters = text.split("");
  return letters.sort(() => Math.random() - 0.5);
};

const TextShuffler = ({ text }: { text: string }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const location = useLocation();

  useEffect(() => {
    let iteration = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const shuffledLetters = getRandomLetters(text);

    const interval = setInterval(() => {
      setScrambledText((prev) =>
        prev
          .split("")
          .map((_, index) =>
            index < iteration
              ? text[index]
              : shuffledLetters[
                  Math.floor(Math.random() * shuffledLetters.length)
                ]
          )
          .join("")
      );

      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(interval);
        setScrambledText(text);
      }
    }, 50);

    timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, location.pathname]);

  return <span>{scrambledText}</span>;
};

export default TextShuffler;
