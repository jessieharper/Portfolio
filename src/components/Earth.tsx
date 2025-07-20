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

    camera.position.z = 1.4;

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
      // Always use the captured initial height to avoid jumpiness
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

  return <div className="w-full h-full flex mx-auto" ref={mountRef} />;
};

export default Earth;
