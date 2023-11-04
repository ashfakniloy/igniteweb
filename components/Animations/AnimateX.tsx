"use client";

import { motion, Variants } from "framer-motion";

type AnimateXProps = {
  xAxis: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

export function AnimateX({ xAxis, duration, delay, children }: AnimateXProps) {
  const xVariants: Variants = {
    hidden: {
      opacity: 0,
      x: xAxis,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      variants={xVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
