import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SpriteAnimator } from "./SpriteAnimator";

const Earth = (): JSX.Element => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const initialHeightRef = useRef<number>(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const width = window.innerWidth;
    const height = Math.max(window.innerHeight, 725);

    initialHeightRef.current = height;

    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);

    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.minHeight = "725px";
    }

    const flipbook = new SpriteAnimator(
      "/images/spritesheet.png",
      10,
      20,
      scene
    );

    flipbook.loop(
      Array.from({ length: 200 }, (_, i) => i),
      8
    );

    camera.position.z = 1;

    const clock = new THREE.Clock();
    const animate = () => {
      camera.position.z = 1.4;
      renderer.render(scene, camera);
      const deltaTime = clock.getDelta();
      flipbook.update(deltaTime);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, initialHeightRef.current);
      camera.aspect = window.innerWidth / initialHeightRef.current;
      camera.updateProjectionMatrix();
    };

    if (window.innerWidth > 400) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-full flex mt-6 mx-auto" ref={mountRef}>
        <svg
          viewBox="0 0 500 500"
          className="absolute -z-10 left-1/2 -translate-x-1/2 top-[13.5%] w-[550px] h-[550px] flex-shrink-0"
        >
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            className="fill-none w-auto"
            stroke="#17110E"
            strokeWidth="40"
            strokeLinecap="round"
          />

          <text width="500">
            <textPath
              xlinkHref="#curve"
              startOffset="50%"
              textAnchor="middle"
              className="w-full h-full font-dogica fill-primary text-[10px] relative -mb-10"
              dx="10"
            >
              <tspan className="text-[18px]">🐈</tspan>
              <tspan dx="10">hello world</tspan>
              <tspan className="text-[18px]" dx="10">
                🐈
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
};

export default Earth;
