import styled from "styled-components";
import { BackgroundProps } from "./index.types";

export const Wrapper = styled.div<Pick<BackgroundProps, "backgroundColor">>`
  position: fixed;
  z-index: -10;
  inset: 0px;
  opacity: 0.5;
  transition: background-image 0.5s ease 0s;

  background-image: ${(props) => props.backgroundColor};
`;
