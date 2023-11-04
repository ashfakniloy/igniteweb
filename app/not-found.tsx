import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

function NotFoundPage() {
  return (
    <div className="pt-[92px] flex flex-col justify-center items-center h-[50vh] lg:h-[70vh]">
      <h1 className="text-6xl lg:text-9xl font-bold text-red-400">404</h1>
      <h5 className="font-bold text-3xl lg:text-5xl text-red-700">
        Page not found
      </h5>
    </div>
  );
}

export default NotFoundPage;
