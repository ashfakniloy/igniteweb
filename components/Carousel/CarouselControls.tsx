import { useCallback } from "react";
import AngleLeft from "../Icons/Angle-left";
import AngleRight from "../Icons/Angle-right";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

function CarouselControls({
  canScrollNext,
  canScrollPrev,
  onNext,
  onPrev,
}: Props) {
  const handlePrevClick = useCallback(() => {
    if (canScrollPrev) {
      onPrev();
    }
  }, [canScrollPrev, onPrev]);

  const handleNextClick = useCallback(() => {
    if (canScrollNext) {
      onNext();
    }
  }, [canScrollNext, onNext]);

  return (
    <div className="flex justify-end gap-[10px] pt-5 pl-3 lg:pl-5 bg-custom-gray2">
      <button
        type="button"
        aria-label="previous"
        onClick={handlePrevClick}
        disabled={!canScrollPrev}
        className={`h-10 lg:h-12 w-10 lg:w-12 flex justify-center items-center rounded-full bg-white active:bg-indigo-600  lg:hover:bg-indigo-600 group transition-colors duration-200 ${
          canScrollPrev ? "opacity-100" : "opacity-50"
        }`}
      >
        <AngleLeft />
      </button>
      <button
        type="button"
        aria-label="next"
        onClick={handleNextClick}
        disabled={!canScrollNext}
        className={`h-10 lg:h-12 w-10 lg:w-12 flex justify-center items-center rounded-full bg-white active:bg-indigo-600 lg:hover:bg-indigo-600 group transition-colors duration-200 ${
          canScrollNext ? "opacity-100" : "opacity-50"
        }`}
      >
        <AngleRight />
      </button>
    </div>
  );
}
export default CarouselControls;
