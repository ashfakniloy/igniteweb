import Link from "next/link";
import { Heading1, Section } from "@/components/Wrapper/Section";
import { AnimateTop } from "@/components/Animations";
import { socialLinks } from "@/data/socialLinks";

function OurWork() {
  return (
    <Section className="lg:py-[96px] bg-custom-gray">
      <AnimateTop>
        <div className="lg:max-w-[630px] mx-auto text-center">
          <p className="font-medium">What we created</p>
          <Heading1 className="mt-3">Our Work Portfolio</Heading1>
          <p className="mt-4">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
          <div className="mt-8 flex justify-center gap-[26px]">
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.name}
                href={socialLink.link}
                aria-label={socialLink.name}
                target="_blank"
              >
                {socialLink.icon}
              </Link>
            ))}
          </div>
        </div>
      </AnimateTop>
    </Section>
  );
}

export default OurWork;
