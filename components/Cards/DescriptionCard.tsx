import Image from "next/image";
import { StaticImageData } from "next/image";
import { Heading1 } from "../Wrapper/Section";
import { cn } from "@/lib/utils";
import { AnimateTop, AnimateX } from "../Animations";

function DescriptionCard({
  title,
  headline,
  description,
  staticImage,
  isOdd,
}: {
  title: string;
  headline: string;
  description: string;
  staticImage: StaticImageData;
  isOdd?: boolean;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-[140px]">
      <AnimateTop>
        <div className="lg:max-w-[623px]">
          <p className="text-lg font-medium">{title}</p>
          <Heading1 className="leading-[45px] lg:leading-[74px]">
            {headline}
          </Heading1>
          <p className="mt-3 lg:mt-8">{description}</p>
        </div>
      </AnimateTop>

      <div
        className={cn("lg:w-[547px] lg:h-[336px]", isOdd && "lg:order-first")}
      >
        <AnimateX xAxis={isOdd ? -40 : 40}>
          <Image src={staticImage} alt={title} placeholder="blur" />
        </AnimateX>
      </div>
    </div>
  );
}

export default DescriptionCard;
