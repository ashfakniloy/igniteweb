import Image from "next/image";
import { Heading2 } from "../Wrapper/Section";
import ArrowLink from "../ArrowLink";
import Link from "next/link";

function ProjectCard({
  name,
  imageSrc,
  description,
  slug,
}: {
  name: string;
  imageSrc: string;
  description: string;
  slug: string;
}) {
  return (
    <div className="w-full lg:w-[623px]">
      <Link href={`/our-work/${slug}`}>
        <div className="relative w-full h-[230px] lg:h-[380px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 623px"
          />
        </div>
      </Link>
      <Heading2 className="mt-6 peer">{name}</Heading2>
      <p className="mt-3 line-clamp-2">{description}</p>
      <ArrowLink href={`/our-work/${slug}`} className="mt-6">
        View portfolio
      </ArrowLink>
    </div>
  );
}

export default ProjectCard;
