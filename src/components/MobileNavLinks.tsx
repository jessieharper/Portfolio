import { motion } from "framer-motion";

interface IMobileNavLinks {
  title: string;
  href: string;
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLinks = (props: IMobileNavLinks): JSX.Element => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl font-semibold uppercase text-text text-center "
    >
      <li>{props.title}</li>
    </motion.div>
  );
};

export default MobileNavLinks;
