import Companies from "./Companies";
import { Heading1, Section } from "@/components/Wrapper/Section";
import Card from "@/components/Cards/Card";
import {
  AnimateStaggerTop,
  AnimateTop,
  StaggerParent,
} from "@/components/Animations";
import { benefitsData } from "@/data/benefitsData";

function Benefits() {
  return (
    <Section>
      <AnimateTop>
        <Heading1 className="lg:max-w-[600px] mx-auto text-center leading-10 lg:leading-[64px]">
          The benefits of working with us
        </Heading1>
      </AnimateTop>

      <div className="mt-8 lg:mt-[47px]">
        <StaggerParent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {benefitsData.map((benefit, i) => (
              <AnimateStaggerTop key={i}>
                <Card
                  // key={i}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  className="bg-custom-gray"
                />
              </AnimateStaggerTop>
            ))}
          </div>
        </StaggerParent>
      </div>

      <div className="mt-12">
        <Companies />
      </div>
    </Section>
  );
}

export default Benefits;
