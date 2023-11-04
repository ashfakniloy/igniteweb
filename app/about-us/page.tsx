import About from "./About";
import Mission from "./Mission";
import Team from "./Team";
import Benefits from "../_Common/Benefits";

export const metadata = {
  title: "About us",
};

function AboutUsPage() {
  return (
    <>
      <About />
      <Mission />
      <Benefits />
      <Team />
    </>
  );
}

export default AboutUsPage;
