import { SpinnerSuspense } from "@/components/Spinner";

function LoadingSingleBlog() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SpinnerSuspense />
    </div>
  );
}

export default LoadingSingleBlog;
