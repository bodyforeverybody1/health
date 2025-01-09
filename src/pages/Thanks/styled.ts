import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 80px;
  & h2 {
    color: rgba(255, 190, 11, 1);
    font-size: 40px;
    margin-bottom: 0;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  & p {
    margin-top: -5px;
    font-size: 40px;
    font-weight: bold;
    line-height: 36px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
