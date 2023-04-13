import React from "react";
import * as S from "./index.styles";
import { PokemonStatCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export function PokemonStatCard({
  stats,
}: Pick<PokemonStatCardProps, "stats">) {
  const barColor = useSelector((state: RootState) => state.color.hslValue);

  return (
    <Card title="스탯">
      <S.Wrapper>
        {Object.entries(stats).map((stat, index) => (
          <S.StatWrapper key={index}>
            <S.StatName>{stat[0]}</S.StatName>
            <S.StatBar barValue={stat[1] / 2.5} barColor={barColor} />
            <S.StatValue>{stat[1]}</S.StatValue>
          </S.StatWrapper>
        ))}
      </S.Wrapper>
    </Card>
  );
}
