import Image from "next/image";
import { Section, Heading1 } from "@/components/Wrapper/Section";
import ArrowLink from "@/components/ArrowLink";
import { projectsData } from "@/data/projectsData";
import { AnimateWidth } from "@/components/Animations/AnimateWidth";
import { AnimateFade } from "@/components/Animations/AnimateFade";
import { AnimateTop } from "@/components/Animations";

const projects = [projectsData[5], projectsData[1], projectsData[3]];

function Projects() {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <AnimateTop>
          <Heading1>View our projects</Heading1>
        </AnimateTop>
        <ArrowLink href="/our-work" className="hidden lg:flex">
          View More
        </ArrowLink>
      </div>

      <div className="mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:h-[600px] gap-8">
          <div className="relative w-full lg:w-[800px] h-[250px] lg:h-full">
            <Image
              src={projects[0].imagesrc}
              alt={projects[0].name}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 w-full lg:w-[396px]">
              <AnimateWidth>
                <div className="w-full h-full bg-gradient-to-tl from-tint-blue to-tint-blue/[42%]">
                  <div className="absolute bottom-0 text-white px-5 lg:px-12 pb-5 lg:pb-[76px]">
                    <AnimateFade delay={0.3}>
                      <div>
                        <h4 className="text-[22px] lg:text-2xl leading-7 lg:leading-9 font-medium">
                          {projects[0].name}
                        </h4>
                        <p className="mt-2 lg:mt-4 text-gray-300 line-clamp-2">
                          {projects[0].description}
                        </p>

                        <ArrowLink
                          href={`/our-work/${projects[0].slug}`}
                          className="mt-4 lg:mt-10 text-custom-yellow"
                        >
                          View project
                        </ArrowLink>
                      </div>
                    </AnimateFade>
                  </div>
                </div>
              </AnimateWidth>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 w-full flex-1">
            {projects.slice(1).map((project, i) => (
              <div key={i} className="relative h-[250px] lg:h-full">
                <Image
                  src={project.imagesrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0">
                  <AnimateWidth>
                    <div className="w-full h-full bg-gradient-to-tl from-tint-blue to-tint-blue/[42%]">
                      <div className="absolute bottom-0 px-5 lg:px-12 pb-5 lg:pb-[45px]">
                        <AnimateFade duration={0.1} delay={0.3}>
                          <h4 className="text-[22px] lg:text-2xl font-medium text-white leading-7 lg:leading-9">
                            {project.name}
                          </h4>
                          <ArrowLink
                            href={`/our-work/${project.slug}`}
                            className="mt-[10px] text-custom-yellow"
                          >
                            View portfolio
                          </ArrowLink>
                        </AnimateFade>
                      </div>
                    </div>
                  </AnimateWidth>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-8 text-center">
          <ArrowLink href="/our-work">View More</ArrowLink>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
