"use client";

import { motion, Variants } from "framer-motion";

type AnimateTopProps = {
  duration?: number;
  delay?: number;
  viewport?: number;
  children: React.ReactNode;
};

const topVariants: Variants = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function AnimateTop({
  duration,
  delay,
  viewport,
  children,
}: AnimateTopProps) {
  return (
    <motion.div
      variants={topVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      viewport={{ amount: viewport }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerTop({ children }: { children: React.ReactNode }) {
  return <motion.div variants={topVariants}>{children}</motion.div>;
}
