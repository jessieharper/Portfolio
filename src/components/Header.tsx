import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Header = (): JSX.Element => {
  const headerRef = useRef<null | HTMLButtonElement>(null);
  const spanRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target) {
        const { width } = target.getBoundingClientRect()!;
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;

        if (spanRef.current)
          spanRef.current.animate(
            { left },
            { duration: 250, fill: "forwards" }
          );
      }
    };

    const handleMouseLeave = () => {
      if (spanRef.current)
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
    };

    if (headerRef.current) {
      headerRef.current.addEventListener("mousemove", handleMouseMove);
      headerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener("mousemove", handleMouseMove);
        headerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <motion.button
        ref={headerRef}
        className="relative w-full overflow-hidden py-3 font-medium text-slate-100"
      >
        <span
          ref={spanRef}
          className="pointer-events-none absolute top-[25%] h-36 w-36 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-800"
        />
        <header className="flex flex-row h-auto w-full justify-between items-center p-4 m-auto pointer-events-none relative z-10 mix-blend-difference">
          <h1 className="text-4xl font-semibold">Jessica Harper</h1>

          <nav>
            <ul className="h-full flex flex-row items-end align-bottom mt-2">
              <li className="mr-4 hover:translat-x-4">About Me</li>
              <li className="mr-4">Projects</li>
              <li className="mr-2">Contact</li>
            </ul>
          </nav>
        </header>
      </motion.button>
    </>
  );
};

export default Header;
