import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HyperspaceStars() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const dotCount = 150;
    const svgWidth = 500;
    const svgHeight = 500;
    const maxStretch = 100;

    for (let i = 0; i < dotCount; i++) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      const randX = Math.random() * svgWidth;
      const randY = Math.random() * svgHeight;
      const size = Math.random() * 2 + 0.2;

      r.setAttribute("x", randX.toString());
      r.setAttribute("y", randY.toString());
      r.setAttribute("width", size.toString());
      r.setAttribute("height", size.toString());
      r.setAttribute("fill", "currentColor");
      const randOpacity = Math.random() * 0.8 + 0.2;

      r.setAttribute("opacity", randOpacity.toFixed(2));

      r.setAttribute("data-baseY", randY.toString());
      r.setAttribute("data-baseSize", size.toString());

      svg.appendChild(r);
    }

    const dots = svg.querySelectorAll("rect");
    let lastY = window.scrollY;
    let velocity = 0;
    let stretch = 0;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      lastY = currentY;

      velocity = velocity * 0.8 + delta * 0.2;
      stretch = Math.min(Math.abs(velocity) * 4, maxStretch);

      dots.forEach((dot) => {
        const baseY = parseFloat(dot.getAttribute("data-baseY") || "0");
        const baseSize = parseFloat(dot.getAttribute("data-baseSize") || "1");
        const offset = stretch / 2;

        const newY = baseY - (velocity > 0 ? offset : -offset);
        const newH = baseSize + stretch;

        gsap.set(dot, {
          y: newY,
          height: newH,
        });
      });

      if (stretch > 0.1) {
        stretch *= 10;
      } else {
        stretch = 0;
      }

      // requestAnimationFrame(update);
    };

    // requestAnimationFrame(update);

    return () => {};
  }, []);

  return (
    <div className=" absolute top-0 w-full h-full ">
      <svg
        ref={svgRef}
        className="sticky top-0 -z-20 w-full h-full overflow-visible text-primary"
        viewBox="0 0 500 150"
      />
    </div>
  );
}
