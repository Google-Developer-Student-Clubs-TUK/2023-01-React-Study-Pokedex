import { MainClient } from 'pokenode-ts';

const api = new MainClient();

export default {
  getPokemonBasicInfo: async (id: number) => {
    const data = await api.pokemon.getPokemonById(id);
    return data;
  },
  getPokemonEvolutionChain: async (id: number) => {
    const data = await api.evolution.getEvolutionChainById(id);
    return data;
  },
} as const;
