import Link from "next/link";
import { Heading1, Section } from "@/components/Wrapper/Section";
import { AnimateScale, AnimateTop } from "@/components/Animations";
import { Button } from "@/components/Button";

function LetsBuild() {
  return (
    <Section className="bg-white">
      <div className="lg:max-w-[730px] mx-auto text-center">
        <AnimateTop>
          <Heading1 className="mt-3 leading-10 lg:leading-[64px]">
            {`Let's build something great together`}
          </Heading1>
          <p className="mt-4">
            Join hands with us to create greatness together. Our passion for
            innovative design and solutions drives success in every project.
          </p>
        </AnimateTop>

        <AnimateScale>
          <Link href="/contact-us">
            <Button
              type="button"
              aria-label="Contact Us"
              className="mt-10 px-[67px] py-4 text-lg font-medium"
            >
              Contact Us
            </Button>
          </Link>
        </AnimateScale>
      </div>
    </Section>
  );
}

export default LetsBuild;
