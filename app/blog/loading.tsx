import { SpinnerSuspense } from "@/components/Spinner";

function LoadingBlog() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SpinnerSuspense />
    </div>
  );
}

export default LoadingBlog;
