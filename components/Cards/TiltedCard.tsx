"use client";

import Tilt, { ReactParallaxTiltProps } from "react-parallax-tilt";
import { cn } from "@/lib/utils";

export const TiltedCard = ({
  // glareRadius,
  // trackOnWindow,
  className,
  settings,
  children,
}: {
  // glareRadius?: number;
  // trackOnWindow?: boolean;
  className?: string;
  settings?: ReactParallaxTiltProps;
  children: React.ReactNode;
}) => {
  return (
    <Tilt
      // perspective={1000}
      // glareEnable={true}
      // glareMaxOpacity={0.45}
      // glareBorderRadius={`${glareRadius}px`}
      // glarePosition="all"
      // scale={1.02}
      // trackOnWindow={settings?.trackOnWindow}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={1000}
      gyroscope={true}
      {...settings}
      className={cn(className)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Tilt>
  );
};

export const TiltedParallaxItem = ({
  className,
  translateZ = 60,
  children,
}: {
  className?: string;
  translateZ?: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
    >
      {children}
    </div>
  );
};

// // example

// function ExampleCard() {
//   return (
//     <TiltCard
//       className="bg-red-800 h-[300px] w-[250px] rounded-lg text-white  flex-col justify-between"
//       glareRadius={8}
//     >
//       <p className="p-5 text-sm">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
//         assumenda exercitationem nulla incidunt unde aliquid excepturi
//       </p>
//       <TiltParallaxItem className="mx-auto px-4 py-2 rounded-lg bg-amber-300 text-gray-800 text-lg font-bold shadow-lg active:scale-90 transition-transform duration-300">
//         Click
//       </TiltParallaxItem>
//     </TiltCard>
//   );
// }

// export default ExampleCard;
