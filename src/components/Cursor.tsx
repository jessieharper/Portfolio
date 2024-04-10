import { useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = (): JSX.Element => {
  const mouse = { x: 0, y: 0 };
  const size = 32;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.x = clientX;
    mouse.y = clientY;
  };

  useEffect(() => {
    const updatePosition = () => {
      requestAnimationFrame(() => {
        moveCircle();
        updatePosition();
      });
    };
    updatePosition();

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const moveCircle = () => {
    const circle = document.getElementById("circle");
    if (circle) {
      circle.style.left = `${mouse.x}px`;
      circle.style.top = `${mouse.y}px`;
    }
  };

  return (
    <div className="relative h-screen">
      <motion.div
        id="circle"
        style={{
          backgroundColor: "#1e293b",
          width: size,
          height: size,
          position: "fixed",
          borderRadius: "50%",
          zIndex: 9999,
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
        }}
      />
    </div>
  );
};

export default Cursor;
