import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

const Earth = () => {
  const scene = useRef<null | HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: scene,
    offset: ["start end", "end start"],
  });

  const smoothRotation = useSpring(scrollYProgress, { damping: 20 });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/earthcloudmap.jpg",
    "/normal.png",
    "/earthmap1k.jpg",
  ]);

  return (
    <Canvas className="border-4 border-text rounded-full">
      <ambientLight intensity={0.25} />
      <directionalLight intensity={3.5} position={[-4.75, 0, 1.25]} />
      <motion.mesh
        scale={3}
        rotation-y={smoothRotation}
        rotation={[-Math.PI / 0.1, 0, 0.1]}
      >
        <sphereGeometry args={[1, 64, 64]} />

        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
};

export default Earth;
