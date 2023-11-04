import { Heading1, Section } from "@/components/Wrapper/Section";
import { AnimateTop } from "@/components/Animations";
import { Button } from "@/components/Button";
import Pointer from "@/components/Icons/Pointer";
import { cn } from "@/lib/utils";
import { pricingData } from "@/data/pricingData";

function PricingPlans() {
  return (
    <Section>
      <AnimateTop viewport={0}>
        <div className="lg:max-w-[562px] mx-auto text-center">
          <Heading1>Our Pricing Plans</Heading1>
          <p className="mt-4">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row lg:justify-between gap-8">
          {pricingData.map((pricing, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-custom-gray [&:nth-child(2)]:bg-tint-blue [&:nth-child(2)]:text-white px-12 py-16 flex flex-col justify-between gap-[79px] w-full rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              {i % 2 === 1 && (
                <div className="absolute -left-full bottom-[155px] w-[300%] h-[300%] bg-white/10 rounded-full" />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-4xl font-semibold">{pricing.price}</h3>
                  <p
                    className={cn(
                      "text-royal-blue",
                      i % 2 === 1 && "text-custom-yellow"
                    )}
                  >
                    {pricing.label}
                  </p>
                </div>
                <p className="mt-5 text-2xl font-medium">{pricing.name}</p>
                <p className="mt-2 leading-7">{pricing.description}</p>
              </div>

              <div className="space-y-5">
                {pricing.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>
                      <Pointer />
                    </span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  type="button"
                  aria-label="get started"
                  className={cn(
                    "px-[78px] py-4 text-lg font-semibold bg-dark-blue text-custom-gray",
                    i % 2 === 1 && "bg-custom-yellow text-dark-blue"
                  )}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </AnimateTop>
    </Section>
  );
}

export default PricingPlans;
