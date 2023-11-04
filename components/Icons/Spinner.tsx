import { cn } from "@/lib/utils";

function Spinner({ className }: { className?: string }) {
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
}

export default Spinner;

// function Spinner() {
//   return (
//     <>
//       <span
//         role="status"
//         className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid  border-gray-600 border-r-gray-600/30 border-b-gray-600/30"
//       ></span>
//       <span className="sr-only">Loading...</span>
//     </>
//   );
// }

// export default Spinner;
