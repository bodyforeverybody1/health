import {
  Elements,
  FullName,
  Line,
  Wrapper,
} from "../../sections/Header/styled.ts";
import { Container } from "../../styled.root.ts";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal.ts";
import { useLocation } from "react-router-dom";

export const ButtonConsult = styled.button`
  background: rgba(255, 190, 11, 1);
  border-radius: 10px;
  border: none;
  height: 60px;
  padding: 0 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 1.1vw;
  font-weight: bold;
  font-family: Inter, sans-serif;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: gray;
  }

  @media (max-width: 1023px) {
    font-size: 16px;
    white-space: nowrap;
    margin: 20px 10px 20px 10px;
    padding: 0 5px;
  }
  &:before {
    content: "";
    width: 51px;
    height: 32px;
    background: url("/Elements.png") no-repeat center;
    background-size: contain;
    @media (max-width: 1023px) {
      width: 30px;
      height: 19px;
    }
  }
  &:after {
    content: "";
    width: 51px;
    height: 32px;
    background: url("/Elements.png") no-repeat center;
    background-size: contain;
    transform: rotate(180deg);
    @media (max-width: 1023px) {
      width: 30px;
      height: 19px;
    }
  }
`;

export const StyledTopLine = styled.div`
  background: #1e1e1e;
`;
const TopLine = () => {
  const location = useLocation();
  const { openModal } = useModal();
  const handleClick = () => {
    openModal("Консультация");
  };

  const isThank = location.pathname.includes("thank");

  if (isThank) return null;
  return (
    <StyledTopLine>
      <Container>
        <div>
          <Wrapper>
            <FullName>
              <a href="/">ДМИТРИЙ ЗАЙЦЕВ</a>
            </FullName>
            <Elements>
              <a href="/#result">Результаты</a>
              <a href="/#faq">FAQ</a>
              <a href="/#about-me">Обо мне</a>
            </Elements>
            <ButtonConsult onClick={handleClick}>
              Бесплатная консультация
            </ButtonConsult>
          </Wrapper>
          <Line />
        </div>
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;
