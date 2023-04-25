import type {
  PokemonBasicInfo,
  PokemonEvolutionChain,
  PokemonList,
  PokemonSpecies,
} from '../types';

export default {
  getPokemonBasicInfo: async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: PokemonBasicInfo = await response.json();
    return data;
  },

  getPokemonSpecies: async (id: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    );
    const data: PokemonSpecies = await response.json();
    return data;
  },

  getPokemonEvolutionChain: async (id: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}`,
    );
    const data: PokemonEvolutionChain = await response.json();
    return data;
  },

  getPokemonList: async (offset: number) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
    );
    const data: PokemonList = await response.json();
    return data;
  },
} as const;
