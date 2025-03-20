import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLinks from "./MobileNavLinks";
import Footer from "./Footer";

interface INavBar {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
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
  useEffect(() => {
    if (props.isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [props.isOpen]);

  return (
    <>
      <AnimatePresence>
        {props.isOpen && (
          <motion.div
            variants={menuVariables}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 origin-top w-full h-full bg-body text-text z-40 container py-4"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVariables}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full w-full justify-center divide-primary-50 divide-y-2"
              >
                {navLinks.map((link) => (
                  <div
                    key={link.title}
                    className="overflow-hidden"
                    onClick={() => props.setIsOpen(!props.isOpen)}
                  >
                    <MobileNavLinks title={link.title} href={link.href} />
                  </div>
                ))}
              </motion.div>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
