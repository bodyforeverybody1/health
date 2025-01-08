import styled from "styled-components";

export const Number = styled.div`
  width: 25px;
  text-align: center;
  padding-left: 10px;
`;
export const PlusBtn = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 40px;
  padding-right: 10px;
`;

export const WrapperLine = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid rgba(90, 90, 90, 1);
`;

export const TitleLine = styled.div`
  flex: 1;
  padding-left: 30%;
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 1280px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

export const Description = styled.div<{ $isShow: boolean }>`
  overflow: hidden;
  max-height: ${({ $isShow }) => ($isShow ? "1000px" : "0")};
  opacity: ${({ $isShow }) => ($isShow ? "1" : "0")};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  padding-left: calc(30% + 25px);
  max-width: 500px;
  padding-bottom: ${({ $isShow }) => ($isShow ? "15px" : "0")};
  line-height: 20px;

  @media (max-width: 1280px) {
    padding: 0 35px 10px 35px;
    font-size: 12px;
  }
`;

export const MainLine = styled.div<{ $isActive: boolean }>`
  transition: all 0.3s;
  background: ${({ $isActive }) =>
    $isActive ? "rgba(255, 190, 11, 1)" : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "rgba(20, 20, 20, 1)" : "white")};
`;
