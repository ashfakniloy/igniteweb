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
        <div className="flex flex-col lg:flex-row text-white bg-tint-blue">
          <div className="relative lg:w-[656px]">
            {/* <Image
              src={Writing}
              alt="writing"
              className="opacity-50"
              placeholder="blur"
            /> */}
            <div className="relative w-full h-[300px] lg:h-full">
              <Image
                src="/images/writing.webp"
                alt="writing"
                className="opacity-50 object-cover"
                fill
              />
            </div>
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

          <div className="flex-1 py-10 px-6 lg:p-20">
            <h2 className="text-[28px] lg:text-[32px] font-medium">
              Contact Us
            </h2>
            <p className="mt-4 text-custom-gray">
              {`Contact us to discuss your ideas and project needs. Let's work together to make them a reality.`}
            </p>

            <div className="mt-7">
              <FormInquiry />
            </div>

            {/* <div className="mt-7 text-center">
              <ArrowLink href="/contact-us" className="text-base lg:text-lg">
                Get in touch with us
              </ArrowLink>
            </div> */}
          </div>
        </div>
      </AnimateScaleScroll>
    </Section>
  );
}

export default Inquiry;
