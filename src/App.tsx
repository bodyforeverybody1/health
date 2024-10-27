// import { useState } from "react";
// import reactLogo from "@/assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./sections/Header";
import Rate from "./sections/Rate";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Faq from "./sections/FAQ";
import { AppWrapper } from "./styled.root.ts";
import Consultation from "./sections/Consultation";
import Video from "./sections/Video";
import Result from "./sections/Result";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Rate />
      <About />
      <Consultation />
      <Result />
      <Faq />
      <Video />
      <Footer />
    </AppWrapper>
  );
}

export default App;
