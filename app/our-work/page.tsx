import LetsBuild from "./LetsBuild";
import OurWork from "./OurWork";
import Projects from "./Projects";

export const metadata = {
  title: "Our work",
};

function OurWorkPage() {
  return (
    <div className="bg-custom-gray">
      <OurWork />
      <Projects />
      <LetsBuild />
    </div>
  );
}

export default OurWorkPage;
