import Image from "next/image";
import { Heading1, Section } from "@/components/Wrapper/Section";
import ArrowLink from "@/components/ArrowLink";
import FormInquiry from "./FormInquiry";
import Writing from "@/public/images/writing.webp";
import { AnimateScaleScroll } from "@/components/Animations";

function Inquiry() {
  return (
    <Section className="bg-custom-gray">
      <AnimateScaleScroll>
        <div className="flex flex-col lg:flex-row text-white bg-tint-blue lg:h-[691px]">
          <div className="relative lg:w-[656px]">
            <Image
              src={Writing}
              alt="writing"
              className="opacity-50"
              placeholder="blur"
            />
            <div className="absolute top-0 p-5 lg:p-24">
              <Heading1 className="leading-[45px] lg:leading-[70px]">
                Building stellar websites for early startups
              </Heading1>
              <p className="mt-3 lg:mt-6 leading-6 lg:leading-7 font-medium">
                Empower your early-stage startup with a stunning online presence
                that sets you apart from the rest.
              </p>
            </div>
          </div>

          <div className="flex-1 px-5 py-8 lg:p-24">
            <h4 className="text-[28px] lg:text-[32px] font-medium">
              Send inquiry
            </h4>
            <p className="mt-4 text-custom-gray">
              {`Have questions or need assistance? Send us your inquiries, and we'll respond with detailed information and support.`}
            </p>

            <div className="mt-10">
              <FormInquiry />
            </div>

            <div className="mt-7 text-center">
              <ArrowLink href="/contact-us" className="text-base lg:text-lg">
                Get in touch with us
              </ArrowLink>
            </div>
          </div>
        </div>
      </AnimateScaleScroll>
    </Section>
  );
}

export default Inquiry;
