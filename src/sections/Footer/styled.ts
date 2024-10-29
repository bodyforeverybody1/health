import styled from "styled-components";

export const Column = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  @media (max-width: 900px) {
    padding: 20px 0;
    position: relative;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ${Column}:not(:nth-child(1)) {
    padding-top: 30px;
  }

  a {
    transition: all 0.3s;
    &:hover {
      color: rgba(255, 190, 11, 1);
    }
  }
`;

export const PersonalTrainer = styled.div`
  font-size: 18px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const nameStyle = `
    font-size: 85px;
    color: rgba(255, 190, 11, 1);
    font-family: "Bebas Neue", sans-serif;
    font-weight: bold;
    letter-spacing: -0.4vw;
    text-transform: uppercase;
    
    @media (max-width: 768px){
        font-size: 35px;
    }
    `;
export const PersonalTrainerFirstName = styled.div`
  ${nameStyle};
  position: relative;
  top: -25px;
  @media (max-width: 768px) {
    top: -10px;
  }
`;
export const PersonalTrainerLastName = styled.div`
  ${nameStyle};
  position: relative;
  top: -65px;
  @media (max-width: 768px) {
    top: -30px;
  }
`;

export const Section = styled.section`
  background: rgba(30, 30, 30, 1);
  border-radius: 35px 35px 0 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  color: rgba(90, 90, 90, 1);
  a {
    color: rgba(90, 90, 90, 1);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const WrapperColumn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
