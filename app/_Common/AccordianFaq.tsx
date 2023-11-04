"use client";

import { useState } from "react";
import X from "@/components/Icons/X";
import Plus from "@/components/Icons/Plus";
import AnimateHeight from "@/components/Animations/AnimateHeight";
import { faqData } from "@/data/faqData";

function AccordianFaq() {
  const [clicked, setClicked] = useState<number | null>(0);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {faqData.map((faq, i) => (
        <div
          key={i}
          className="flex gap-5 lg:gap-[60px] first:pt-0 py-6 lg:py-12"
        >
          <div className="text-xl lg:text-2xl font-medium text-royal-blue">
            {faq.label}
          </div>

          <div className="w-full">
            <div
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => toggle(i)}
            >
              <h4 className="flex-1 text-xl lg:text-2xl font-medium">
                {faq.title}
              </h4>
              <span className="w-8 h-8 flex justify-center items-center rounded-full group-active:bg-indigo-500 lg:group-hover:bg-indigo-500 transition-colors duration-200">
                {clicked === i ? <X /> : <Plus />}
              </span>
            </div>

            <AnimateHeight open={clicked === i}>
              <p className="lg:max-w-[624px] mt-4 font-medium">
                {faq.description}
              </p>
            </AnimateHeight>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordianFaq;
