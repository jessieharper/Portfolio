import { useRef, useEffect } from "react";

export default function HyperspaceStars() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const dotCount = 100;
    const svgWidth = window.innerWidth;
    const svgHeight = window.innerHeight;

    for (let i = 0; i < dotCount; i++) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      const randX = Math.random() * svgWidth;
      const randY = Math.random() * svgHeight;
      const size = Math.random() * 3.5 + 2;

      r.setAttribute("x", randX.toString());
      r.setAttribute("y", randY.toString());
      r.setAttribute("width", size.toString());
      r.setAttribute("height", size.toString());
      r.setAttribute("fill", "currentColor");

      r.setAttribute("opacity", (Math.random() * 0.4 + 0.3).toFixed(2));

      const twinkleDuration = (Math.random() * 3 + 2).toFixed(2);
      const twinkleDelay = (Math.random() * 5).toFixed(2);

      const jitterDuration = (Math.random() * 6 + 4).toFixed(2);
      const jitterDelay = (Math.random() * 5).toFixed(2);

      r.style.animation = `
        twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite alternate,
        jitter ${jitterDuration}s ease-in-out ${jitterDelay}s infinite alternate
      `;

      svg.appendChild(r);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-body">
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }

          @keyframes jitter {
            0%   { transform: translate(0, 0); }
            50%  { transform: translate(1px, -1px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
      <svg
        ref={svgRef}
        className="w-full h-full text-primary"
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="none"
      />
    </div>
  );
}
