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

    camera.position.z = 1.2;

    const clock = new THREE.Clock();
    const animate = () => {
      renderer.render(scene, camera);
      const deltaTime = clock.getDelta();
      flipbook.update(deltaTime);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="max-w-screen-2xl" ref={mountRef} />;
};

export default Earth;
