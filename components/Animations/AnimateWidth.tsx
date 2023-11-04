"use client";

import { Variants, motion } from "framer-motion";

type AnimateWidthProps = {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

export const AnimateWidth = ({
  duration,
  delay,
  children,
}: AnimateWidthProps) => {
  const animateWidth: Variants = {
    hidden: {
      width: 1,
    },
    visible: {
      width: "auto",
    },
  };

  return (
    <motion.div
      variants={animateWidth}
      initial="hidden"
      whileInView="visible"
      className="w-full h-full overflow-hidden"
      transition={{ duration, delay }}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
