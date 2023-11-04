import DescriptionCard from "@/components/Cards/DescriptionCard";
import { Section } from "@/components/Wrapper/Section";
import { featuresPageData } from "@/data/featuresPageData";

function FeaturesDescription() {
  return (
    <div>
      {featuresPageData.map((data, i) => (
        <Section
          key={i}
          className="even:bg-custom-gray [&:nth-child(4n)]:bg-custom-yellow/10"
        >
          <DescriptionCard
            title={data.title}
            headline={data.headline}
            description={data.description}
            staticImage={data.image}
            isOdd={i % 2 === 1}
          />
        </Section>
      ))}
    </div>
  );
}

export default FeaturesDescription;
