import { useRef, useEffect } from "react";
const Stars = (): JSX.Element => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const dotCount = 100;
    const maxWidth = 1920;
    const maxHeight = window.innerHeight;

    for (let i = 0; i < dotCount; i++) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      const randX = Math.random() * maxWidth;
      const randY = Math.random() * maxHeight;
      const size = Math.random() * 3.5 + 3;

      r.setAttribute("x", randX.toString());
      r.setAttribute("y", randY.toString());
      r.setAttribute("width", size.toString());
      r.setAttribute("height", size.toString());
      r.setAttribute("fill", "currentColor");

      r.setAttribute("opacity", (Math.random() * 0.5 + 0.3).toFixed(2));

      const twinkleDuration = (Math.random() * 3 + 2).toFixed(2);
      const twinkleDelay = (Math.random() * 5).toFixed(2);

      r.style.animation = `
        twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite alternate`;

      svg.appendChild(r);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-body overflow-hidden container">
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.1; }
            50% { opacity: 1; }
            100% { opacity: 0.1; }
          }
        `}
      </style>
      <svg
        ref={svgRef}
        className="w-full h-full text-primary"
        viewBox={`0 0 1920 ${window.innerHeight}`}
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
};

export default Stars;
