import React, { useEffect, useState } from "react";
import * as S from "./index.styles";

import { PokemonEvolutionChainCard } from "../PokemonEvolutionChainCard";
import { PokemonProfileCard } from "../PokemonProfileCard";
import { PokemonStatCard } from "../PokemonStatCard";
import { PokemonTypeCard } from "../PokemonTypeCard";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { usePokemon } from "@/hooks/usePokemon";
import { Skeleton } from "@mui/material";

export function PokemonCards() {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  const { name, onChangeHandler, onKeyDownHandler } = usePokemon();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        {isLoading ? (
          <Skeleton>
            <S.NameWrapper>
              <S.Index>{`#${pokemon.id.toString().padStart(3, "0")}`}</S.Index>
              <S.PokemonName>{pokemon.name}</S.PokemonName>
            </S.NameWrapper>
          </Skeleton>
        ) : (
          <S.NameWrapper>
            <S.Index>{`#${pokemon.id.toString().padStart(3, "0")}`}</S.Index>
            <S.PokemonName>{pokemon.name}</S.PokemonName>
          </S.NameWrapper>
        )}

        <S.SearchBarWrapper>
          <S.SearchBar
            placeholder="포켓몬 이름을 입력해주세요"
            value={name}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
        </S.SearchBarWrapper>
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
