import FAQ from "../_Common/FAQ";
import PricingPlans from "./PricingPlans";

export const metadata = {
  title: "Pricing",
};

function PricingPage() {
  return (
    <>
      <PricingPlans />
      <div className="mt-[-128px]">
        <FAQ />
      </div>
    </>
  );
}

export default PricingPage;
