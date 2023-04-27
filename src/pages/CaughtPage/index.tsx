import React from "react";
import * as S from "./index.styles";

import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CaughtPage() {
  const caughtPokemonList = useSelector(
    (state: RootState) => state.caughtPokemonList.pokemonList
  );
  return (
    <S.Wrapper>
      <S.Title>내 동료들</S.Title>
      <S.PokemonWrapper>
        {caughtPokemonList.map((pokemonId, index) => (
          <Link to={`/poke-encyclopedia/${pokemonId}`} key={index}>
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
