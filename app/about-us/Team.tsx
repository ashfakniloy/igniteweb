import Link from "next/link";
import Image from "next/image";
import { Heading1, Section } from "@/components/Wrapper/Section";
import Facebook from "@/components/Icons/Facebook";
import Linkedin from "@/components/Icons/Linkedin";
import Twitter from "@/components/Icons/Twitter";
import { teamData } from "@/data/teamData";
import { AnimateStaggerTop, StaggerParent } from "@/components/Animations";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: <Facebook />,
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com",
    icon: <Twitter />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com",
    icon: <Linkedin />,
  },
];

function Team() {
  return (
    <Section className="bg-custom-gray">
      <Heading1 className="mx-auto text-center">Meet our team</Heading1>

      <StaggerParent>
        <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row lg:justify-between gap-6">
          {teamData.map((member, i) => (
            <div key={i} className="w-full">
              <AnimateStaggerTop>
                <div className="bg-white flex flex-col items-center w-full lg:max-w-[296px] pt-12 pb-8 text-center group hover:shadow-md transition-shadow duration-200">
                  <div className="relative w-[168px] h-[168px] rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 translate-y-full translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 rounded-full bg-gradient-to-tl from-royal-blue/60 to-white/20 transition-all duration-300">
                      <div className="absolute bottom-10 inset-x-0 opacity-0 group-hover:opacity-100 group-hover:delay-300 duration-100 flex justify-center gap-6">
                        {socials.map((social, i) => (
                          <span key={i} className="scale-150 text-white">
                            <Link
                              href={social.link}
                              target="_blank"
                              aria-label={social.name}
                            >
                              {social.icon}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-[30px] text-2xl font-medium">
                    {member.name}
                  </h4>
                  <p className="mt-2 text-gray-600">{member.position}</p>
                </div>
              </AnimateStaggerTop>
            </div>
          ))}
        </div>
      </StaggerParent>
    </Section>
  );
}

export default Team;
