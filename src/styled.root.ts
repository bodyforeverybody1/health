import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;
export const Container = styled.div`
  max-width: 89.5vw;
  margin: 0 auto;
`;
