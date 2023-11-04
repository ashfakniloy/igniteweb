import Banner from "./_Home/Banner";
import Work from "./_Home/Work";
import Comments from "./_Home/Comments";
import FAQ from "./_Common/FAQ";
import Features from "./_Home/Features";
import Projects from "./_Home/Projects";
import Inquiry from "./_Home/Inquiry";

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
    </>
  );
}

export default HomePage;
