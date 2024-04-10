import { useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = (): JSX.Element => {
  const mouse = { x: 0, y: 0 };
  const size = 64;

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
      const circleRect = circle.getBoundingClientRect();
      const offsetX = circleRect.width / 2;
      const offsetY = circleRect.height / 2;
      circle.style.left = `${mouse.x - offsetX}px`;
      circle.style.top = `${mouse.y - offsetY}px`;
    }
  };

  return (
    <div className="relative h-screen">
      <motion.div
        id="circle"
        className="fixed bg-slate-100 rounded-full mix-blend-difference"
        style={{
          width: size,
          height: size,
          zIndex: 9999,
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
        }}
      />
    </div>
  );
};

export default Cursor;
