import { useInfiniteQuery } from '@tanstack/react-query';

import { pokemonApi } from '@/domains/api';

const useGetPokemonListQuery = () =>
  useInfiniteQuery(
    ['pokemon'],
    ({ pageParam = 0 }) => pokemonApi.getPokemonList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.results[lastPage.results.length - 1].url
          .split('/')
          .slice(-2, -1)[0] !== '898' && allPages.length * 20,
      select(data) {
        return {
          pageParams: data.pageParams,
          pages: data.pages.map((page) =>
            page.results.map((result) => ({
              id: result.url.split('/').slice(-2, -1)[0],
              name: result.name,
              imageSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                result.url.split('/').slice(-2, -1)[0]
              }.png`,
            })),
          ),
        };
      },
    },
  );

export default useGetPokemonListQuery;

// return data.results.map((result) => ({
//   id: result.url.split('/').slice(-2, -1)[0],
//   name: result.name,
//   imageSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
//     result.url.split('/').slice(-2, -1)[0]
//   }.png`,
// }));
