import { useQueries } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';
import type { PokemonBasicInfo, PokemonEvolutionChain } from '@/domains/types';

const useGetPokemonInfoQueries = (id: number) => {
  const [
    { data: pokemonBasicInfoData, isLoading: isPokemonBasicInfoLoading },
    {
      data: pokemonEvolutionChainData,
      isLoading: isPokemonEvolutionChainLoading,
    },
  ] = useQueries({
    queries: [
      {
        queryKey: ['pokemon', id],
        queryFn: () => pokemonApi.getPokemonBasicInfo(id),
        select: (data: PokemonBasicInfo) => ({
          name: data.name,
          image:
            data.sprites.other?.['official-artwork'].front_default ?? undefined,
          types: data.types.map((type) => type.type.name),
        }),
      },
      {
        queryKey: ['pokemon', id, 'evolution'],
        queryFn: async () => {
          const {
            evolution_chain: { url },
          } = await pokemonApi.getPokemonSpecies(id);
          return pokemonApi.getPokemonEvolutionChain(Number(url.split('/')[6]));
        },
        select: (data: PokemonEvolutionChain) => {
          const evolutionChain = [];
          evolutionChain.push({
            name: data.chain.species.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              data.chain.species.url.split('/')[6]
            }.png`,
          });
          let { chain } = data;
          while (chain.evolves_to.length !== 0) {
            [chain] = chain.evolves_to;
            evolutionChain.push({
              name: chain.species.name,
              url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                chain.species.url.split('/')[6]
              }.png`,
            });
          }
          return evolutionChain;
        },
      },
    ],
  });

  return {
    pokemonBasicInfoData,
    pokemonEvolutionChainData,
    isLoading: isPokemonBasicInfoLoading || isPokemonEvolutionChainLoading,
  };
};

export default useGetPokemonInfoQueries;
