import React from "react";
import * as S from "./index.styles";

import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIdByAmount } from "@/stores/pokemonIdSlice";

export default function CaughtPage() {
  const caughtPokemonList = useSelector(
    (state: RootState) => state.caughtPokemonList.pokemonList
  );

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.Title>내 동료들</S.Title>
      <S.PokemonWrapper>
        {caughtPokemonList.map((pokemonId, index) => (
          <Link
            to={`/poke-encyclopedia/detail`}
            key={index}
            onClick={() => dispatch(setIdByAmount(pokemonId))}
          >
            <S.PokemonSprite
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt={`caught-pokemon-${pokemonId}`}
            />
          </Link>
        ))}
      </S.PokemonWrapper>
    </S.Wrapper>
  );
}
