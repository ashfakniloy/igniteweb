"use client";

import { motion, Variants } from "framer-motion";

type AnimateFadeProps = {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export function AnimateFade({ duration, delay, children }: AnimateFadeProps) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerFade({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div variants={fadeVariants}>{children}</motion.div>;
}
