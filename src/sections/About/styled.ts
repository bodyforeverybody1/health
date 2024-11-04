import styled, { css } from "styled-components";

export const Card = styled.div<{ left: boolean }>`
  width: 26.8vw;
  position: relative;

  @media (max-width: 1280px) {
    width: 100%;
  }

  ${({ left }) => {
    return !left
      ? css`
          position: relative;
          right: -29.6vw;

          @media (max-width: 1280px) {
            right: 0;
          }
          &:before {
            //content: "";
            //width: 13px;
            //height: 13px;
            //background: rgba(90, 90, 90, 1);
            //position: absolute;
            //top: 28px;
            //left: -41px;
            //border-radius: 50%;

            @media (max-width: 1280px) {
              content: "";
              width: 13px;
              height: 13px;
              background: rgba(90, 90, 90, 1);
              position: absolute;
              border-radius: 50%;
              top: 13px;
              left: -27px;
            }
          }
        `
      : css`
          text-align: right;
          @media (max-width: 1280px) {
            text-align: left;
          }
          &:before {
            content: "";
            width: 13px;
            height: 13px;
            background: rgba(90, 90, 90, 1);
            position: absolute;
            top: 28px;
            right: -27px;
            border-radius: 50%;

            @media (max-width: 1280px) {
              top: 13px;
              left: -27px;
            }
          }
        `;
  }}
`;

export const Title = styled.h2`
  font-size: 2vw;
  margin-bottom: 0;
  text-wrap: nowrap;

  @media (max-width: 1280px) {
    font-size: 20px;
  }
  span {
    color: rgba(255, 190, 11, 1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 90px;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Content = styled.div`
  border-right: 1px solid rgba(90, 90, 90, 1);
  padding: 20px;

  @media (max-width: 1280px) {
    border-right: none;
    border-left: 1px solid rgba(90, 90, 90, 1);
  }
`;

export const Description = styled.div`
  font-size: 0.8vw;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`;
