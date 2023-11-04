import { cn } from "@/lib/utils";
import { TiltedCard, TiltedParallaxItem } from "./TiltedCard";

function Card({
  icon,
  title,
  description,
  className,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <TiltedCard
      className={cn(
        "p-8 lg:p-12 lg:max-w-[405px] hover:shadow-lg transition-shadow duration-200",
        className
      )}
      settings={{ gyroscope: false }}
    >
      <span>{icon}</span>
      <h4 className="mt-5 lg:mt-[22px] text-[22px] lg:text-2xl font-medium">
        {title}
      </h4>
      <p className="mt-[12px] text-gray-600">{description}</p>
    </TiltedCard>
  );
}

export default Card;
