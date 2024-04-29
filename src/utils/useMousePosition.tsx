import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: null | number;
    y: null | number;
  }>({ x: null, y: null });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePosition;
