import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { getPokemon } from "@/stores/pokemonSlice";
import { setIsLoading, setIsLoaded } from "@/stores/isLoadingSlice";

export function usePokemon() {
  const id = useSelector((state: RootState) => state.pokemonId.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading());
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then(async (res) => {
        const pokemon = {
          id: res.id,
          name: res.species.name,
          profile: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`,
          stats: getStats(res.stats),
          types: getTypes(res.types),
          evolutionChain: await getEvolutionChain(res.id),
        };
        dispatch(getPokemon(pokemon));
      })
      .then(() => dispatch(setIsLoaded()));
  }, [id]);

  const [name, setName] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(setIsLoading());
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => res.json())
        .then(async (res) => {
          const pokemon = {
            id: res.id,
            name: res.species.name,
            profile: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`,
            stats: getStats(res.stats),
            types: getTypes(res.types),
            evolutionChain: await getEvolutionChain(res.id),
          };
          dispatch(getPokemon(pokemon));
        })
        .then(() => dispatch(setIsLoaded()))
        .catch(() => alert("포켓몬 이름을 다시 확인해주세요"));
    }
  };

  return { name, onChangeHandler, onKeyUpHandler };
}

function getStats(rawStats: { base_stat: number; stat: { name: string } }[]) {
  const stats: {
    Hp: number;
    Attack: number;
    Defense: number;
    "Sp. Atk": number;
    "Sp. Def": number;
    Speed: number;
  } = {
    Hp: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Atk": 0,
    "Sp. Def": 0,
    Speed: 0,
  };

  rawStats.forEach((stat) => {
    switch (stat.stat.name) {
      case "hp":
        stats["Hp"] = stat.base_stat;
      case "attack":
        stats["Attack"] = stat.base_stat;
      case "defense":
        stats["Defense"] = stat.base_stat;
      case "special-attack":
        stats["Sp. Atk"] = stat.base_stat;
      case "special-defense":
        stats["Sp. Def"] = stat.base_stat;
      case "speed":
        stats["Speed"] = stat.base_stat;
    }
  });

  return stats;
}

function getTypes(rawTypes: { type: { name: string } }[]) {
  return rawTypes.map((type) => type.type.name);
}

async function getEvolutionChain(id: number) {
  const rawEvolutionChainUrl = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  )
    .then((res) => res.json())
    .then((res) => res.evolution_chain.url);

  const rawChain = await fetch(rawEvolutionChainUrl)
    .then((res) => res.json())
    .then((res) => res.chain);

  return findPokemonFromChain(rawChain);
}

function findPokemonFromChain(
  chain: IRawEvolutionChain
): { id: number; name: string }[] {
  if (chain.evolves_to.length === 0)
    return [
      {
        id: +chain.species.url
          .replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species/, "")
          .replace(/\//g, ""),
        name: chain.species.name,
      },
    ];

  return [
    {
      id: +chain.species.url
        .replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species/, "")
        .replace(/\//g, ""),
      name: chain.species.name,
    },
    ...findPokemonFromChain(chain.evolves_to[0]),
  ];
}

interface IRawEvolutionChain {
  evolves_to: IRawEvolutionChain[];
  species: { name: string; url: string };
}
