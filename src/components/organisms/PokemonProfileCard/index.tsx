import React from "react";
import * as S from "./index.styles";
import { PokemonProfileCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

import { useBackgroundColor } from "@/hooks/useBackgroundColor";

export function PokemonProfileCard({ profile }: PokemonProfileCardProps) {
  const onLoadImage = useBackgroundColor();

  return (
    <Card title="프로필">
      <S.Image
        src={profile}
        alt="pokemon-image"
        crossOrigin="anonymous"
        onLoad={onLoadImage}
      ></S.Image>
    </Card>
  );
}
