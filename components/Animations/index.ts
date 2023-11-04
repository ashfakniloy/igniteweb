import { Variants } from "framer-motion";
import { StaggerParent } from "./StaggerParent";
import { MotionWrapper } from "./MotionWrapper";
import { AnimateFade, AnimateStaggerFade } from "./AnimateFade";
import { AnimateWidth } from "./AnimateWidth";
import { AnimateTop, AnimateStaggerTop } from "./AnimateTop";
import { AnimateScaleScroll } from "./AnimateScaleScroll";
import { AnimateScale } from "./AnimateScale";
import { AnimateX } from "./AnimateX";

export type AnimateProps = {
  duration?: number;
  delay?: number;
  isStagger?: boolean;
  variants?: Variants;
  children: React.ReactNode;
};

export {
  MotionWrapper,
  AnimateFade,
  AnimateTop,
  AnimateWidth,
  AnimateScale,
  AnimateX,
  StaggerParent,
  AnimateStaggerTop,
  AnimateStaggerFade,
  AnimateScaleScroll,
};
