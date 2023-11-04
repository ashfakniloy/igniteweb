import Image from "next/image";
import { Heading1, Section } from "@/components/Wrapper/Section";
import Illustration2 from "@/public/images/illustration2.webp";
import Link from "next/link";
import { TiltedCard } from "@/components/Cards/TiltedCard";
import { AnimateFade, AnimateScale, AnimateTop } from "@/components/Animations";
import { Button } from "@/components/Button";

function FeatureBanner() {
  return (
    <Section className="bg-tint-blue h-[calc(100vh-76px)] flex justify-center items-center text-white">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="max-w-[480px]">
          <AnimateTop>
            <Heading1 className="leading-[45px] lg:leading-[74px]">
              All the features <br /> you need
            </Heading1>
          </AnimateTop>
          <AnimateFade delay={0.1}>
            <p className="mt-3 lg:mt-6 text-white/50">
              Unleash the full potential of your digital journey with our
              comprehensive feature set. Explore the essential tools that power
              success.
            </p>
          </AnimateFade>

          <div className="mt-6 lg:mt-12 mx-3 lg:mx-0 flex items-center">
            <AnimateScale>
              <Link href="/pricing">
                <Button
                  type="button"
                  aria-label="View pricing"
                  className="px-[35px] lg:px-[56px] py-3.5 lg:py-4 text-sm font-semibold"
                >
                  View pricing
                </Button>
              </Link>
            </AnimateScale>
          </div>
        </div>

        <AnimateTop>
          <TiltedCard settings={{ trackOnWindow: true }}>
            <Image
              src={Illustration2}
              alt="illustration2"
              width={638}
              height={361}
              quality={100}
              priority
            />
          </TiltedCard>
        </AnimateTop>
      </div>
    </Section>
  );
}

export default FeatureBanner;
