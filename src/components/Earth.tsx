import { useEffect, useRef } from "react";
import * as THREE from "three";

const Earth = (): JSX.Element => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load("/images/spritesheet.png", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      const tileWidth = 1000;
      const tileHeight = 800;
      const tileAspectRatio = tileWidth / tileHeight;

      sprite.scale.set(tileAspectRatio, 1, 1);
    });

    const material = new THREE.SpriteMaterial({ map });
    const sprite = new THREE.Sprite(material);

    sprite.position.x = 0;

    let currentTile = 0;
    const tileHorizontal = 3;
    const tileVertical = 2;
    map.repeat.set(1 / tileHorizontal, 1 / tileVertical);
    map.offset.x = 0;
    map.offset.y = 0;

    scene.add(sprite);

    camera.position.z = 0.7;

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Earth;
