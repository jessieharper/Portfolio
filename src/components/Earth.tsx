import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SpriteAnimator } from "./SpriteAnimator";

const Earth = (): JSX.Element => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(0xffffff, 0);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
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
      camera.aspect = window.innerWidth / 725;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 725);
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
    <div
      className="earth w-full h-full min-h-screen flex mx-auto"
      ref={mountRef}
    />
  );
};

export default Earth;
