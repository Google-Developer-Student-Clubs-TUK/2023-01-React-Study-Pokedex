import 'twin.macro';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import { useGetPokemonListQuery } from '@/domains/hooks';

import PokedexItem from './PokedexItem';

const PokedexList = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useGetPokemonListQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div tw='flex flex-col gap-6'>
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((item) => (
            <PokedexItem
              key={item.id}
              pokemonImageSrc={item.imageSrc}
              pokemonName={item.name}
              onClick={() => {
                navigate(`/${item.id}`);
              }}
            />
          ))}
        </React.Fragment>
      ))}

      <div tw='w-full h-24 flex justify-center' ref={ref}>
        {isFetchingNextPage && (
          <div tw='animate-spin text-black rounded-full border-8 border-solid border-l-current w-20 h-20' />
        )}
      </div>
    </div>
  );
};

export default PokedexList;
