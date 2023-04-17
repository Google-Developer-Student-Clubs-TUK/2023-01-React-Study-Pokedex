import { useQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';

const useGetEvolutionChainQuery = (id: number) =>
  useQuery(
    ['pokemon', id, 'evolution'],
    () => pokemonApi.getPokemonEvolutionChain(id),
    {
      select(data) {
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
  );

export default useGetEvolutionChainQuery;
