import React from "react";
import * as S from "./index.styles";
import { PokemonEvolutionChainCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

export function PokemonEvolutionChainCard({
  evolutionChain,
}: PokemonEvolutionChainCardProps) {
  return (
    <Card title="진화 계보">
      <S.Wrapper>
        {evolutionChain.map((item, index) => (
          <S.ItemWrapper key={index}>
            <S.ItemTitle>{item.name}</S.ItemTitle>
            <S.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
              alt=""
            />
          </S.ItemWrapper>
        ))}
      </S.Wrapper>
    </Card>
  );
}
