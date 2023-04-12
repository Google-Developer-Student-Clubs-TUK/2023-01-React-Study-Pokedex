import React from "react";
import * as S from "./index.styles";
import { PokemonTypeCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

export function PokemonTypeCard({ types }: PokemonTypeCardProps) {
  return (
    <Card title="특성">
      <S.Wrapper>
        {types.map((type, index) => (
          <S.Type key={index}>{type}</S.Type>
        ))}
      </S.Wrapper>
    </Card>
  );
}
