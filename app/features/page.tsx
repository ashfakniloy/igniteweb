import FeatureBanner from "./FeatureBanner";
import FeaturesDescription from "./FeaturesDescription";
import Benefits from "../_Common/Benefits";
import FAQ from "../_Common/FAQ";

export const metadata = {
  title: "Features",
};

function FeaturesPage() {
  return (
    <>
      <FeatureBanner />
      <Benefits />
      <FeaturesDescription />
      <FAQ />
    </>
  );
}

export default FeaturesPage;
