import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.95 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.95 },
};

type Props = {
  children: ReactNode;
};

function Route({ children }: Props) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.2,
        type: 'easeInOut',
        // stiffness: 260,
        // damping: 20,
      }}
    >
      {children}
    </motion.main>
  );
}

export default Route;
