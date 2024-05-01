import { AnimatePresence, motion } from "framer-motion";
import MobileNavLinks from "./MobileNavLinks";

interface INavBar {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact Me", href: "#contact" },
];

const menuVariables = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const containerVariables = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const NavBar = (props: INavBar): JSX.Element => {
  const toggleMenu = () => {
    props.setIsOpen(!props.isOpen);
  };
  return (
    <>
      <AnimatePresence>
        {props.isOpen && (
          <motion.div
            variants={menuVariables}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top backdrop-blur-lg text-text p-10 z-20"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-start">
                <p
                  className="cursor-pointer text-md text-text"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVariables}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link) => {
                  return (
                    <div
                      key={link.title}
                      className="overflow-hidden"
                      onClick={() => props.setIsOpen(!props.isOpen)}
                    >
                      <MobileNavLinks title={link.title} href={link.href} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
