import { useQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';

const useGetPokemonBasicInfoQuery = (id: number) =>
  useQuery(['pokemon', id], () => pokemonApi.getPokemonBasicInfo(id), {
    select(data) {
      return {
        name: data.name,
        image:
          data.sprites.other?.['official-artwork'].front_default ?? undefined,
      };
    },
    keepPreviousData: true,
  });

export default useGetPokemonBasicInfoQuery;
