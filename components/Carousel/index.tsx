"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarouselDots from "./CarouselDots";
import CarouselControls from "./CarouselControls";

// Define the props
type Props = React.PropsWithChildren & EmblaOptionsType;

function Carousel({ children, ...options }: Props) {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        {/* 3. The inner div must have a display:flex property */}
        {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
        <div className="flex">{children}</div>
      </div>
      {/* <CarouselDots
        itemsLength={length}
        selectedIndex={selectedIndex}
        scrollTo={(index) => emblaApi?.scrollTo(index)}
      /> */}
      <div className="absolute right-[-1px] bottom-0">
        <CarouselControls
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      </div>
    </div>
  );
}

export default Carousel;
