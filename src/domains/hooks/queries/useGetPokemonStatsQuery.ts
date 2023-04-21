import { useQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';

const useGetPokemonStatsQuery = (id: number) =>
  useQuery(['pokemon', id], () => pokemonApi.getPokemonBasicInfo(id), {
    select(data) {
      return {
        stats: data.stats,
      };
    },
    keepPreviousData: true,
  });

export default useGetPokemonStatsQuery;
