import { cn } from "@/lib/utils";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <>
      <span
        role="status"
        className={cn(
          "inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-gray-600 border-r-gray-600/30 border-b-gray-600/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
};

export const SpinnerSuspense = ({ className }: { className?: string }) => {
  return (
    <div className="flex justify-center items-center">
      <span
        role="status"
        className={cn(
          "inline-block size-20 animate-spin rounded-full border-[6px] border-solid border-blue-600 border-r-blue-600/30 border-b-blue-600/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
