import React from "react";
import * as S from "./index.styles";
import { CardProps } from "./index.types";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/stores/pokemonIdSlice";
import { RootState } from "@/stores/store";

export function Card({ title, children }: CardProps) {
  const dispatch = useDispatch();

  const id = useSelector((state: RootState) => state.pokemonId.id);

  const pokemonId = useSelector((state: RootState) => state.pokemon.id);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.PaginationWrapper>
        <S.Button
          aria-label="Decrement Id"
          onClick={() => dispatch(decrement())}
        >
          <S.ArrowLeft />
        </S.Button>
        <S.PagenationIndex>{`#${pokemonId
          .toString()
          .padStart(3, "0")}`}</S.PagenationIndex>
        <S.Button
          aria-label="Increment Id"
          onClick={() => dispatch(increment())}
        >
          <S.ArrowRight />
        </S.Button>
      </S.PaginationWrapper>
    </S.Wrapper>
  );
}
