import React, { useEffect } from "react";
import * as S from "./index.styles";

import { Background } from "@/components/blocks/Background";
import { PokemonCards } from "@/components/organisms/PokemonCards";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIdByAmount } from "@/stores/pokemonIdSlice";

export default function PokemonPage() {
  const id: string = useParams().id || "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIdByAmount(Number(id)));
  }, []);

  return (
    <S.Wrapper>
      <PokemonCards />
      <Background />
    </S.Wrapper>
  );
}
