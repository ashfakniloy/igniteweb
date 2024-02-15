import { Suspense } from "react";
import Banner from "./_Home/Banner";
import Work from "./_Home/Work";
import Comments from "./_Home/Comments";
import FAQ from "./_Common/FAQ";
import Features from "./_Home/Features";
import Projects from "./_Home/Projects";
import Inquiry from "./_Home/Inquiry";
import OurBlog from "./_Home/OurBlog";
import { SpinnerSuspense } from "@/components/Spinner";

function HomePage() {
  return (
    <>
      <Banner />
      <Work />
      <Projects />
      <Features />
      <Comments />
      <FAQ />
      <Inquiry />
      <Suspense
        fallback={
          <div className="py-20 lg:py-32">
            <SpinnerSuspense />
          </div>
        }
      >
        <OurBlog />
      </Suspense>
    </>
  );
}

export default HomePage;
