import { Outlet } from "react-router-dom";
import Footer from "../../sections/Footer";
import TopLine from "../TopLine";
import { Wrapper } from "./styled.ts";
import Modal from "../Modal";

export const Layout = () => {
  return (
    <>
      <Modal />
      <Wrapper>
        <TopLine />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};
