import { PokemonClient } from 'pokenode-ts';

const pokemonClient = new PokemonClient();

export default {
  getPokemonBasicInfo: async (id: number) => {
    const data = await pokemonClient.getPokemonById(id);
    return data;
  },
} as const;
