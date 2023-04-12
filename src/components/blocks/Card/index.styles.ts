import styled from "styled-components";

import { ReactComponent as ArrowLeftIcon } from "@/assets/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "@/assets/arrow-right.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgb(245, 245, 245, 0.7);

  padding: 12px 16px;

  border-radius: 0.75rem;
`;

export const Title = styled.h3`
  color: #000000b3;
  font-weight: 600;
  font-size: 2rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 150px;

  padding: 10px 4px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #0000000d;
    border-radius: 0.375rem;
  }
`;

export const ArrowLeft = styled(ArrowLeftIcon)``;

export const PagenationIndex = styled.div`
  color: #000c;
  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;

  flex: 1 1 100%;
`;

export const ArrowRight = styled(ArrowRightIcon)``;
