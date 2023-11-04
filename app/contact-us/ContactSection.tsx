import { Heading1, Section } from "@/components/Wrapper/Section";
import ContactForm from "./ContactForm";
import { AnimateTop } from "@/components/Animations";

function Contact() {
  return (
    <Section>
      <AnimateTop>
        <div className="lg:max-w-[562px] mx-auto text-center">
          <Heading1>Contact Us</Heading1>
          <p className="mt-4">
            {`Contact us to discuss your ideas and project needs. Let's work
            together to make them a reality.`}
          </p>
        </div>

        <ContactForm />
      </AnimateTop>
    </Section>
  );
}

export default Contact;
