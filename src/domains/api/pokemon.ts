import type {
  PokemonBasicInfo,
  PokemonEvolutionChain,
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
} as const;
