import Image from "next/image";
import Link from "next/link";
import { Section, Heading1 } from "@/components/Wrapper/Section";
import { AnimateFade, AnimateTop } from "@/components/Animations";
import ArrowLink from "@/components/ArrowLink";
import Illustration from "@/public/images/illustration.webp";
import { TiltedCard } from "@/components/Cards/TiltedCard";
import { AnimateScale } from "@/components/Animations/AnimateScale";
import { Button } from "@/components/Button";

function Banner() {
  return (
    <Section className="bg-tint-blue h-[calc(100vh-76px)] flex justify-center items-center text-white">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="max-w-[480px]">
          <AnimateTop>
            <Heading1 className="leading-[45px] lg:leading-[74px]">
              Building stellar <br />
              websites for early <br />
              startups
            </Heading1>
          </AnimateTop>
          <AnimateFade delay={0.1}>
            <p className="mt-3 lg:mt-6 text-white/50">
              Empower your early-stage startup with a stunning online presence
              that sets you apart from the rest.
            </p>
          </AnimateFade>
          <div className="mt-6 lg:mt-12 mx-3 lg:mx-0 flex justify-between lg:justify-start items-center lg:gap-10">
            <AnimateScale>
              <Link href="/our-work">
                <Button
                  type="button"
                  aria-label="View our work"
                  className="px-[35px] lg:px-[56px] py-3.5 lg:py-4 text-sm font-semibold"
                >
                  View our work
                </Button>
              </Link>
            </AnimateScale>

            <AnimateFade>
              <ArrowLink href="/pricing" className="text-sm">
                View pricing
              </ArrowLink>
            </AnimateFade>
          </div>
        </div>

        <AnimateTop>
          <TiltedCard settings={{ trackOnWindow: true }}>
            <Image
              src={Illustration}
              alt="illustration"
              width={638}
              height={361}
              // quality={100}
              priority
              // className="lg:w-[638px] lg:h-[361px]"
            />
          </TiltedCard>
        </AnimateTop>
      </div>
    </Section>
  );
}

export default Banner;
