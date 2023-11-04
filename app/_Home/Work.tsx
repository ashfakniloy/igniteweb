import Image from "next/image";
import { Section, Heading1 } from "@/components/Wrapper/Section";
import ArrowLink from "@/components/ArrowLink";
import { worksData } from "@/data/worksData";
import {
  AnimateFade,
  AnimateStaggerTop,
  AnimateTop,
  StaggerParent,
} from "@/components/Animations";

function Work() {
  return (
    <Section className="bg-custom-gray">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20 lg:gap-[142px]">
        <div className="lg:max-w-[405px] space-y-4">
          <AnimateTop>
            <Heading1>How we work</Heading1>
          </AnimateTop>

          <AnimateFade delay={0.1}>
            <p>
              Discover our streamlined process from ideation to an outstanding
              online presence.
            </p>
          </AnimateFade>

          <ArrowLink href="/contact-us" className="text-royal-blue lg:text-lg">
            Get in touch with us
          </ArrowLink>
        </div>

        <StaggerParent>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:gap-x-6 lg:gap-y-12">
            {worksData.map((work) => (
              <div key={work.title}>
                <AnimateStaggerTop>
                  <>
                    <Image
                      src={work.icon}
                      alt={work.title}
                      className="w-10 h-10 lg:w-[50px] lg:h-[50px]"
                    />
                    <h3 className="mt-5 text-2xl lg:text-[32px] font-medium">
                      {work.title}
                    </h3>
                    <p className="mt-2">{work.description}</p>
                  </>
                </AnimateStaggerTop>
              </div>
            ))}
          </div>
        </StaggerParent>
      </div>
    </Section>
  );
}

export default Work;
