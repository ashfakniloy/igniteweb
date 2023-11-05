"use client";

import { MotionConfig, MotionConfigProps } from "framer-motion";

const scrollAnimationConfig: MotionConfigProps = {
  transition: { duration: 0.3, ease: "easeOut" },
};

export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <MotionConfig {...scrollAnimationConfig}>{children}</MotionConfig>;
}
