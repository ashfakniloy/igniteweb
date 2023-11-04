import Link from "next/link";
import AccordianFaq from "./AccordianFaq";
import { Heading2, Section } from "@/components/Wrapper/Section";
import { AnimateTop } from "@/components/Animations/AnimateTop";

function FAQ() {
  return (
    <Section>
      <AnimateTop>
        {" "}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-[110px]">
          <div className="lg:max-w-[327px] space-y-4">
            <Heading2>Frequently asked questions</Heading2>
            <Link
              href="/contact-us"
              className="inline-block text-royal-blue text-lg font-medium"
            >
              Contact us for more info
            </Link>
          </div>

          <div className="flex-1 lg:max-w-[846px]">
            <AccordianFaq />
          </div>
        </div>
      </AnimateTop>
    </Section>
  );
}

export default FAQ;
