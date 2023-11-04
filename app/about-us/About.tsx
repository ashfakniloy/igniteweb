import Image from "next/image";
import { Heading1, Heading2, Section } from "@/components/Wrapper/Section";
import Dash from "@/components/Icons/Dash";
import DescriptionCard from "@/components/Cards/DescriptionCard";
import {
  AnimateStaggerTop,
  AnimateTop,
  StaggerParent,
} from "@/components/Animations";
import Instructing from "@/public/images/instructing.png";
import { processesData } from "@/data/processesData";
import { aboutUsData } from "@/data/aboutData";

function About() {
  return (
    <Section>
      <DescriptionCard
        title={aboutUsData.title}
        headline={aboutUsData.headline}
        description={aboutUsData.description}
        staticImage={aboutUsData.image}
      />
      <AnimateTop>
        <div className="my-10 lg:my-32">
          <div className="bg-custom-gray3 p-5 lg:p-20">
            <p className="font-medium">Who we are</p>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-[60px]">
              <div>
                <Heading2>Goal focussed</Heading2>
                <p className="mt-4">
                  We are a goal-focused team committed to delivering excellence.
                  Our mission is to transform your vision into reality with
                  precision, creativity, and unwavering dedication to success
                </p>
              </div>

              <div>
                <Heading2>Continuous improvement</Heading2>
                <p className="mt-4">
                  {`Continuous improvement is at our core. We're dedicated to
                  evolving, staying updated, and enhancing our skills,
                  technologies, and strategies to ensure you receive the best
                  solutions for your evolving needs.`}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[200px] lg:h-[340px]">
            <Image
              src={Instructing}
              alt="instructing"
              sizes="(max-width: 768px) 100vw, 80vw"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </AnimateTop>

      <div className="my-10 lg:my-32">
        <AnimateTop>
          <Heading1 className="text-center">The process we follow</Heading1>
        </AnimateTop>
        <StaggerParent>
          <div className="mt-10 lg:mt-12 mx-5 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-8">
            {processesData.map((process, i) => (
              <AnimateStaggerTop key={i}>
                <div key={process.name}>
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-royal-blue" />
                    <Dash />
                  </div>
                  <div className="mt-3 lg:mt-8 lg:w-[85%]">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      {process.name}
                    </h4>
                    <p className="mt-2">{process.description}</p>
                  </div>
                </div>
              </AnimateStaggerTop>
            ))}
          </div>
        </StaggerParent>
      </div>
    </Section>
  );
}

export default About;
