import React from "react";
import * as S from "./index.styles";

import { Background } from "@/components/blocks/Background";
import { PokemonCards } from "@/components/organisms/PokemonCards";

export default function PokemonPage() {
  return (
    <S.Wrapper>
      <PokemonCards />
      <Background />
    </S.Wrapper>
  );
}
