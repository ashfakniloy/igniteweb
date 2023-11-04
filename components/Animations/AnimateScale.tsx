"use client";

import { motion, Variants } from "framer-motion";

type AnimateScaleProps = {
  initialScale?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

export function AnimateScale({
  initialScale = 0.9,
  duration,
  delay,
  children,
}: AnimateScaleProps) {
  const scaleVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={scaleVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
