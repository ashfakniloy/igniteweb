import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Section, Heading2 } from "@/components/Wrapper/Section";
import { AnimateTop } from "@/components/Animations/AnimateTop";
import { commentsData } from "@/data/commentsData";

function Comments() {
  return (
    <Section className="bg-custom-gray2">
      <AnimateTop>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          <div className="lg:max-w-[327px] space-y-4">
            <Heading2>What our clients say about us</Heading2>
            <p>Client testimonials that speak to our exceptional service</p>
          </div>
          <div className="flex-1 lg:max-w-[843px]">
            <Carousel>
              {commentsData.map((comment, i) => {
                return (
                  // flex[0_0_100%]
                  //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                  //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                  <div key={i} className="flex-[0_0_100%] mx-5">
                    <h4 className="text-lg lg:text-[32px] font-medium lg:leading-[48px]">
                      {comment.description}
                    </h4>
                    <div className="mt-6 lg:mt-12 flex gap-4">
                      <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden">
                        <Image
                          src={comment.image}
                          alt={comment.user}
                          fill
                          className="object-cover"
                          sizes="52px"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-medium">{comment.user}</p>
                        <p className="text-xs font-medium">
                          {comment.position}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </AnimateTop>
    </Section>
  );
}

export default Comments;
