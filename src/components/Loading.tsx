import { motion, spring } from "framer-motion";

const ballStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem",
};

const bounceTransition = {
  y: {
    duration: 0.4,
    type: "spring",
    repeatType: "mirror",
    repeat: Infinity,
    ease: "easeInOut",
  },
  backgroundColor: {
    duration: 0,
    repeatType: "mirror",
    type: "spring",
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 0.4,
  },
};

const Loading = (): JSX.Element => {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["#ec489", "#eab308"],
        }}
      />
    </div>
  );
};

export default Loading;
