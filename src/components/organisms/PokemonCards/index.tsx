import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";

import { PokemonEvolutionChainCard } from "../PokemonEvolutionChainCard";
import { PokemonProfileCard } from "../PokemonProfileCard";
import { PokemonStatCard } from "../PokemonStatCard";
import { PokemonTypeCard } from "../PokemonTypeCard";
import { PokeBall } from "../PokeBall";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { addCaughtPokemon } from "@/stores/caughtPokemonListSlice";
import { setPokeBallStatus } from "@/stores/pokeBallSlice";

import { usePokemon } from "@/hooks/usePokemon";

import { Skeleton } from "@mui/material";

export function PokemonCards() {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  const { name, onChangeHandler, onKeyDownHandler } = usePokemon();

  const pokeBallStatus = useSelector(
    (state: RootState) => state.pokeBall.status
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pokeBallStatus === "catch") {
      const pokemonListJSON = window.localStorage.getItem("caught-pokemons");

      const pokemonList: number[] = pokemonListJSON
        ? JSON.parse(pokemonListJSON)
        : [];

      // 이미 잡은 포켓몬 또 잡지말까요?
      // if (pokemonList.includes(pokemon.id)) return;

      window.localStorage.setItem(
        "caught-pokemons",
        JSON.stringify([...pokemonList, pokemon.id])
      );

      dispatch(addCaughtPokemon(pokemon.id));
      dispatch(setPokeBallStatus(""));
      navigate("/poke-encyclopedia/caught");
    }
  }, [pokeBallStatus]);

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
      <PokeBall />
    </S.Wrapper>
  );
}
