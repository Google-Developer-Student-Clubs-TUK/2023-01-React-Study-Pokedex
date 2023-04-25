import { useQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';

// TODO: infinite query 적용하기
const useGetPokemonListQuery = (offset: number) =>
  useQuery(['pokemon'], () => pokemonApi.getPokemonList(offset), {
    select(data) {
      return data.results.map((result) => ({
        id: result.url.split('/').slice(-2, -1)[0],
        name: result.name,
        imageSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          result.url.split('/').slice(-2, -1)[0]
        }.png`,
      }));
    },
  });

export default useGetPokemonListQuery;
