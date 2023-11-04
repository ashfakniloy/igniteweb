"use client";

import { MotionConfig, MotionProps } from "framer-motion";

const scrollAnimationConfig: MotionProps = {
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <MotionConfig {...scrollAnimationConfig}>{children}</MotionConfig>;
}
