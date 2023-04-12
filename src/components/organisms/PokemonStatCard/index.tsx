import React from "react";
import * as S from "./index.styles";
import { PokemonStatCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { Skeleton } from "@mui/material";

export function PokemonStatCard({
  stats,
}: Pick<PokemonStatCardProps, "stats">) {
  const barColor = useSelector((state: RootState) => state.color.hslValue);

  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  return (
    <Card title="스탯">
      {isLoading ? (
        <S.Wrapper>
          {Object.entries(stats).map((stat, index) => (
            <Skeleton sx={{ bgcolor: "grey.400" }} variant="rounded">
              <S.StatWrapper key={index}>
                <S.StatName>{stat[0]}</S.StatName>
                <S.StatBar barValue={stat[1] / 2.5} barColor={barColor} />
                <S.StatValue>{stat[1]}</S.StatValue>
              </S.StatWrapper>
            </Skeleton>
          ))}
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          {Object.entries(stats).map((stat, index) => (
            <S.StatWrapper key={index}>
              <S.StatName>{stat[0]}</S.StatName>
              <S.StatBar barValue={stat[1] / 2.5} barColor={barColor} />
              <S.StatValue>{stat[1]}</S.StatValue>
            </S.StatWrapper>
          ))}
        </S.Wrapper>
      )}
    </Card>
  );
}
