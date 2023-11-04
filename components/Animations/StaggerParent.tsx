"use client";

import { motion, Variants } from "framer-motion";

type StaggerParentProps = {
  interval?: number;
  customVariants?: Variants;
  children: React.ReactNode;
};

// const defaultVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

export function StaggerParent({
  interval = 0.15,
  // customVariants = defaultVariants,
  children,
}: StaggerParentProps) {
  return (
    <motion.div
      // variants={customVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: interval }}
      viewport={{ amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
