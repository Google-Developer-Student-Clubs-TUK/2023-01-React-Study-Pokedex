import React from "react";
import * as S from "./index.styles";
import { PokemonEvolutionChainCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { Skeleton } from "@mui/material";

export function PokemonEvolutionChainCard({
  evolutionChain,
}: PokemonEvolutionChainCardProps) {
  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  return (
    <Card title="진화 계보">
      <S.Wrapper>
        {evolutionChain.map((item, index) =>
          isLoading ? (
            <Skeleton
              key={index}
              sx={{ bgcolor: "grey.400" }}
              variant="rounded"
              width={"100%"}
              height={"100%"}
            >
              <S.ItemWrapper>
                <S.ItemTitle>{item.name}</S.ItemTitle>

                <S.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                  alt=""
                />
              </S.ItemWrapper>
            </Skeleton>
          ) : (
            <S.ItemWrapper key={index}>
              <S.ItemTitle>{item.name}</S.ItemTitle>
              <S.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                alt=""
              />
            </S.ItemWrapper>
          )
        )}
      </S.Wrapper>
    </Card>
  );
}
