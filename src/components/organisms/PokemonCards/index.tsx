import React, { useEffect } from "react";
import * as S from "./index.styles";

import { PokemonEvolutionChainCard } from "../PokemonEvolutionChainCard";
import { PokemonProfileCard } from "../PokemonProfileCard";
import { PokemonStatCard } from "../PokemonStatCard";
import { PokemonTypeCard } from "../PokemonTypeCard";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { usePokemon } from "@/hooks/usePokemon";

export function PokemonCards() {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  usePokemon();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.PokemonName>{pokemon.name}</S.PokemonName>
        <S.Index>{`# ${pokemon.id.toString().padStart(3, "0")}`}</S.Index>
      </S.HeaderWrapper>
      <S.SubWrapper>
        <S.ProfileCardWrapper>
          <PokemonProfileCard profile={pokemon.profile} />
        </S.ProfileCardWrapper>
        <S.StatCardWrapper>
          <PokemonStatCard stats={pokemon.stats} />
        </S.StatCardWrapper>
        <S.TypeCardWrapper>
          <PokemonTypeCard types={pokemon.types} />
        </S.TypeCardWrapper>
        <S.ChainCardWrapper>
          <PokemonEvolutionChainCard evolutionChain={pokemon.evolutionChain} />
        </S.ChainCardWrapper>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
