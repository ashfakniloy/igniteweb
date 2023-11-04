import { useCallback } from "react";

type Props = {
  itemsLength: number;
  selectedIndex: number;
  scrollTo: (index: number) => void;
};

function CarouselDots({ itemsLength, selectedIndex, scrollTo }: Props) {
  const arr = new Array(itemsLength).fill(0);

  const handleDotClick = useCallback(
    (index: number) => {
      scrollTo(index);
    },
    [scrollTo]
  );

  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;

        return (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 bg-indigo-400 cursor-pointer ${
              !selected && "opacity-50"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        );
      })}
    </div>
  );
}

export default CarouselDots;
