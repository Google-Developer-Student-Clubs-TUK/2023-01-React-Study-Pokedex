import styled, { css } from "styled-components";
import { PokemonStatCardProps } from "./index.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  height: 100%;

  padding: 10px 10px;
`;

export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatName = styled.div`
  color: rgb(65, 98, 79);
  font-weight: 600;
  font-size: 1.4rem;

  white-space: nowrap;

  min-width: 60px;
`;

// 최고 스탯값은 250 => 너비 100 기준으로 스탯 / 2.5 해서 크기 계산
export const StatBar = styled.div<Omit<PokemonStatCardProps, "stats">>`
  position: relative;

  width: 450px;
  height: 12px;

  background-color: rgb(73, 90, 86);
  border-radius: 9999px;

  &::after {
    content: "";

    position: absolute;
    top: 0px;
    left: 0px;

    width: ${(props) => `${props.barValue}%`};
    height: 100%;


    background-color: ${(props) => `hsl(${props.barColor[0]}, 50%, 62%);`} 

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    border-radius: 9999px;
  }

  @media screen and (max-width: 720px) {
    width: 200px;
  }
`;

export const StatValue = styled.div`
  color: rgb(65, 98, 90);
  font-weight: 600;
  font-size: 1.2rem;

  min-width: 20px;

  margin-left: 4px;
`;
