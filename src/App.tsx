import Header from "./sections/Header";
import Rate from "./sections/Rate";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Faq from "./sections/FAQ";
import { AppWrapper } from "./styled.root.ts";
import Consultation from "./sections/Consultation";
import Video from "./sections/Video";
import Result from "./sections/Result";
import Modal from "./components/Modal";

import { Analytics } from "@vercel/analytics/react";
import FindMe from "./sections/FindMe";

function App() {
  return (
    <>
      <Modal />
      <AppWrapper>
        <Header />
        <Rate />
        <About />
        <FindMe />
        <Consultation />
        <Result />
        <Faq />
        <Video />
        <Footer />
      </AppWrapper>
      <Analytics />
    </>
  );
}

export default App;
