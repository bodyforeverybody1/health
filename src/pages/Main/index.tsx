import Rate from "../../sections/Rate";
import Consultation from "../../sections/Consultation";
import Faq from "../../sections/FAQ";
import Header from "../../sections/Header";
import { TrainingProgram } from "../../sections/TrainingProgram";
import { AboutMe } from "../../sections/About-me";
import { Slider } from "../../sections/Slider";

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
        <TrainingProgram />
        <AboutMe />
        <Rate />
        <Slider />
        <Consultation />
        <Faq />
      </div>
    </>
  );
};
export default MainPage;
