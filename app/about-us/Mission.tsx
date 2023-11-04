import { Section } from "@/components/Wrapper/Section";
import DescriptionCard from "@/components/Cards/DescriptionCard";
import { missionVisionData } from "@/data/aboutData";

function Mission() {
  return (
    <Section className="bg-custom-gray">
      <div className="space-y-12 lg:space-y-[98px]">
        {missionVisionData.map((data, i) => (
          <DescriptionCard
            key={i}
            title={data.title}
            headline={data.headline}
            description={data.description}
            staticImage={data.image}
            isOdd={i % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}

export default Mission;
