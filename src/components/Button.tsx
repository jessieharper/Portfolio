import { getPixels, updatePixels, shiftPixels } from "../utils/buttonFn";

import { useEffect } from "react";

interface IButton {
  href: string;
  download?: string;
  title: string;
  id: string;
  colours: string[];
}

const Button = (props: IButton): JSX.Element => {
  useEffect(() => {
    let direction = 1;

    const initialPixels = getPixels(4, props.colours);
    const button = document.getElementById("btnContainer");
    let interval: number | null = null;
    let pixels = [...initialPixels];

    updatePixels(pixels);

    const handleEnter = () => {
      if (interval) return;
      interval = setInterval(() => {
        direction = shiftPixels(pixels, props.colours, direction, 4);
      }, 75);
    };

    const handleLeave = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    button?.addEventListener("mouseenter", handleEnter);
    button?.addEventListener("mouseleave", handleLeave);

    return () => {
      button?.removeEventListener("mouseenter", handleEnter);
      button?.removeEventListener("mouseleave", handleLeave);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <a
      id="btnContainer"
      href={props.href}
      download={props.href}
      className="flex items-center min-w-max h-16 justify-center btn overflow-hidden"
    >
      <div
        id={props.id}
        className="absolute top-0 left-1/2 w-[150%] h-auto -translate-x-2/3"
      ></div>
      <p className="absolute z-0 text-sm">{props.title}</p>
    </a>
  );
};

export default Button;
