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
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const flipbook = new SpriteAnimator("/images/spritesheet.png", 3, 2, scene);
    flipbook.loop([0, 1, 2, 3, 4], 0.3);

    // let currentTile = 0;
    // const tilesHorizontal = 3;
    // const tilesVertical = 2;

    // const textureLoader = new THREE.TextureLoader();
    // const map = textureLoader.load("/images/spritesheet.png", (texture) => {
    //   texture.colorSpace = THREE.SRGBColorSpace;
    //   texture.minFilter = THREE.NearestFilter;
    //   texture.magFilter = THREE.NearestFilter;
    //   const tileWidth = 1000;
    //   const tileHeight = 800;
    //   const tileAspectRatio = tileWidth / tileHeight;

    //   sprite.scale.set(tileAspectRatio, 1, 1);
    // });

    // const material = new THREE.SpriteMaterial({ map });
    // const sprite = new THREE.Sprite(material);

    // sprite.position.x = 0;

    // map.repeat.set(1 / tilesHorizontal, 1 / tilesVertical);

    // const offsetX = (currentTile % tilesHorizontal) / tilesHorizontal;
    // const offsetY =
    //   (tilesVertical - Math.floor(currentTile / tilesHorizontal) - 1) /
    //   tilesVertical;

    // map.offset.x = offsetX;
    // map.offset.y = offsetY;

    // scene.add(sprite);

    camera.position.z = 0.8;

    const clock = new THREE.Clock();
    const animate = () => {
      renderer.render(scene, camera);
      let deltaTime = clock.getDelta();
      flipbook.update(deltaTime);

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
