import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;

  width: 100%;

  display: flex;
  gap: 10px;

  padding: 20px 30px;

  ${() =>
    !window.location.pathname.includes("detail") &&
    css`
      background-color: #fff;
      box-shadow: rgb(234 234 236) 0px 1px 0px;
    `}

  z-index: 1000;
`;

export const HeaderItem = styled(Link)`
  all: unset;

  font-size: 2rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #545454;
  }
`;
