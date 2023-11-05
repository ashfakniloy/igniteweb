import Image from "next/image";
import { Heading2, Section } from "@/components/Wrapper/Section";
import { ProjectType } from "@/data/projectsData";
import LetsBuild from "../LetsBuild";
import { AnimateTop } from "@/components/Animations";

function Project({ project }: { project: ProjectType | undefined }) {
  if (!project) return;

  const {
    name,
    type,
    imagesrc,
    client,
    description,
    about_project,
    deliverable,
    service,
    how_we_do,
    keywords,
  } = project;

  return (
    <Section>
      <div className="lg:mx-[100px]">
        <AnimateTop>
          <div className="lg:max-w-[646px]">
            <p className="text-xl font-medium text-gray-600">{type}</p>
            <Heading2 className="mt-4">{name}</Heading2>
          </div>
          <p className="mt-4 lg:max-w-[817px] leading-[28px]">{description}</p>
          <div className="relative mt-12 w-full h-[230px] lg:h-[641px]">
            <Image
              src={imagesrc}
              alt={name}
              priority
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
          <div className="mt-12 flex flex-col lg:flex-row lg:justify-between gap-5 font-medium border-b-2 border-gray-300 pb-8">
            <div>
              <p className="text-gray-600">Cient</p>
              <p className="text-xl lg:text-2xl">{client}</p>
            </div>
            <div>
              <p className="text-gray-600">Service</p>
              <p className="text-xl lg:text-2xl">{service}</p>
            </div>
            <div>
              <p className="text-gray-600">Deliverable</p>
              <p className="text-xl lg:text-2xl">{deliverable}</p>
            </div>
          </div>

          <div className="lg:mx-[95px]">
            <div className="mt-[96px]">
              <h3 className="text-[32px] font-semibold">About the project</h3>
              <div className="mt-8 leading-[28px]">{about_project}</div>
            </div>
            <div className="mt-16">
              <h3 className="text-[32px] font-semibold">How we do it</h3>
              <div className="mt-8 leading-[28px]">{how_we_do}</div>
            </div>
          </div>

          <div className="mt-[112px] flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-5 py-[26px] border-y-2 border-gray-300">
            <p className="text-2xl lg:text-[27px] font-medium text-royal-blue">
              Keywords
            </p>
            <div className="flex flex-wrap justify-between lg:justify-start items-center gap-x-8 gap-y-5 lg:gap-[60px]">
              {keywords.map((keyword, i) => (
                <p key={i} className="text-lg font-medium text-gray-600">
                  {keyword}
                </p>
              ))}
            </div>
          </div>
        </AnimateTop>

        <div className="-mb-20">
          <LetsBuild />
        </div>
      </div>
    </Section>
  );
}

export default Project;
