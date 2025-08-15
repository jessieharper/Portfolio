import { useEffect } from "react";
import { motion } from "framer-motion";

import {
  generatePixels,
  updateButtonBackground,
  animatePixels,
} from "../utils/buttonFn";

interface IButtonProps {
  href: string;
  download?: string;
  title: string;
  id: string;
  colours?: string[];
  range?: number;
  delay?: number;
}

const Button = ({
  href,
  download,
  title,
  id,
  colours = [],
  range = 4,
  delay = 75,
}: IButtonProps): JSX.Element => {
  useEffect(() => {
    if (!colours.length) return;

    let direction = 1;
    let interval: number | null = null;
    let pixels = generatePixels(range, colours, direction);

    updateButtonBackground(pixels, id);

    const container = document.getElementById(`${id}Container`);

    const handleEnter = () => {
      if (interval) return;
      interval = window.setInterval(() => {
        const [newPixels, newDirection] = animatePixels(
          pixels,
          colours,
          direction,
          range
        );
        pixels = newPixels;
        direction = newDirection;
        updateButtonBackground(pixels, id);
      }, delay);
    };

    const handleLeave = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    container?.addEventListener("mouseenter", handleEnter);
    container?.addEventListener("mouseleave", handleLeave);

    return () => {
      container?.removeEventListener("mouseenter", handleEnter);
      container?.removeEventListener("mouseleave", handleLeave);
      if (interval) clearInterval(interval);
    };
  }, [colours, range, delay, id]);

  let letters = title.split("");

  return (
    <a
      target={download ? undefined : "_blank"}
      id={`${id}Container`}
      href={href}
      download={download || undefined}
      aria-label={title}
      className="flex items-center min-w-max h-16 justify-center btn overflow-hidden relative group"
    >
      <div id={id} className="absolute top-0 w-full h-auto"></div>
      <div aria-hidden="true" className="absolute z-0 text-sm">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`${letter === " " ? "mx-4" : ""}inline-block`}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </a>
  );
};

export default Button;
