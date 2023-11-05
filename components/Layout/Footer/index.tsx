import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import { navLinks } from "../Navbar/navLinks";
import Logo from "../Logo";
import { AnimateFade, AnimateWidth } from "@/components/Animations";

function Footer() {
  return (
    <>
      <div className="bg-tint-blue text-white">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row gap-[70px] lg:gap-[260px] py-[50px] lg:py-[100px]">
            <div className="lg:max-w-[400px]">
              <Logo />
              <p className="mt-6 text-gray-300 leading-[28px]">
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>

            <div className="lg:max-w-[400px] pb-24">
              <h1 className="text-3xl lg:text-5xl font-semibold">Lets Talk!</h1>
              <p className="mt-[14px] text-gray-300 leading-[28px]">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="mt-7 flex gap-[26px]">
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
          </div>

          <div className="absolute inset-x-0 lg:left-0 bottom-0 lg:w-[517px] h-[80px] lg:h-[84px]">
            <AnimateWidth>
              <div className="w-full bg-custom-yellow ">
                <AnimateFade duration={0.1} delay={0.3}>
                  <div className="px-3 lg:px-10 py-4 text-dark-blue flex justify-between lg:justify-start lg:gap-8">
                    <div>
                      <p className="text-lg font-medium">Email me at</p>
                      <p>contact@website.com</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium">Call us</p>
                      <p>0927 6277 28525</p>
                    </div>
                  </div>
                </AnimateFade>
              </div>
            </AnimateWidth>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 lg:py-8">
        <div className="container flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between font-medium">
          <p className="mt-2 lg:mt-0">Copyright 2023, IgniteWeb</p>
          <p>
            Developed by:{" "}
            <Link
              href="https://niloy.vercel.app"
              target="_blank"
              className="underline text-royal-blue"
            >
              Ashfak Ahmed Niloy
            </Link>
          </p>
          <ul className="order-first lg:order-none flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start lg:gap-8 ">
            {navLinks.map((navLink) => (
              <li key={navLink.link}>
                <Link href={navLink.link}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
