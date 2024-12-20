import Rate from "../../sections/Rate";
import About from "../../sections/About";
import FindMe from "../../sections/FindMe";
import Consultation from "../../sections/Consultation";
import Result from "../../sections/Result";
import Faq from "../../sections/FAQ";
import Video from "../../sections/Video";
import Header from "../../sections/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
        <Rate />
        <About />
        <FindMe />
        <Consultation />
        <Result />
        <Faq />
        <Video />
      </div>
    </>
  );
};
export default MainPage;
