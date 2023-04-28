import styled, { css, keyframes } from "styled-components";
import { PokeBallProps } from "./index.types";

const ballFly = (left: number, top: number) => keyframes`
  100% {
    left: ${`${left}px`};
    top: ${`${top}px`};
  }
`;

const catchAnimation = keyframes`
  0% {
    transform: rotate(30deg);
  }
  25% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

export const PokeBall = styled.img<PokeBallProps>`
  position: fixed;
  bottom: 50px;
  right: 50px;

  @media screen and (max-width: 720px) {
    bottom: 30px;
    right: 30px;
  }

  width: 30px;
  height: 30px;

  cursor: pointer;

  ${(props) =>
    props.status === "threw" &&
    css`
      animation: ${ballFly(540, 290)} 1s linear;

      @media screen and (max-width: 720px) {
        animation: ${ballFly(170, 280)} 1s linear;
      }
    `}

  ${(props) =>
    props.status === "arrived" &&
    css`
      animation: ${catchAnimation} 1s linear;
      left: 540px !important;
      top: 290px !important;

      @media screen and (max-width: 720px) {
        left: 170px !important;
        top: 280px !important;
      }
    `}
`;

export const ThrowGif = styled.img`
  position: fixed;
  bottom: 50px;
  right: 50px;

  @media screen and (max-width: 720px) {
    bottom: 30px;
    right: 30px;
  }

  width: 100px;
  height: 100px;
`;
