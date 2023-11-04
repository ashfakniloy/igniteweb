import Card from "@/components/Cards/Card";
import { Section, Heading1 } from "@/components/Wrapper/Section";
import {
  StaggerParent,
  AnimateStaggerTop,
  AnimateFade,
  AnimateTop,
} from "@/components/Animations";
import { featuresData } from "@/data/featuresData";

function Features() {
  return (
    <Section className="bg-custom-gray">
      <div className="lg:max-w-[630px] mx-auto text-center">
        <AnimateFade>
          <p className="font-medium">Features</p>
        </AnimateFade>
        <AnimateTop>
          <Heading1 className="mt-3 leading-10 lg:leading-[64px]">
            Design that solves problems, one product at a time
          </Heading1>
        </AnimateTop>
      </div>
      <div className="mt-8 lg:mt-[47px]">
        <StaggerParent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, i) => (
              <AnimateStaggerTop key={i}>
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="bg-white"
                />
              </AnimateStaggerTop>
            ))}
          </div>
        </StaggerParent>
      </div>
    </Section>
  );
}

export default Features;
