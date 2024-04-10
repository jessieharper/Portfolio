import { useEffect } from "react";
import { motion } from "framer-motion";
import { ICursor } from "./models/CursorProps";

const Cursor = (props: ICursor): JSX.Element => {
  const mouse = { x: 0, y: 0 };
  const size = props.isHovered ? 200 : 64;

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
  }, [props.isHovered]);

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
        className="fixed bg-slate-100 rounded-full mix-blend-difference pointer-events-none"
        style={{
          width: size,
          height: size,
          zIndex: 9999,
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
      />
    </div>
  );
};

export default Cursor;
