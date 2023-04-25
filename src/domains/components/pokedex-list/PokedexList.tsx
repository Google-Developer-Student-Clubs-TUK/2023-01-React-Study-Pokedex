import 'twin.macro';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPokemonListQuery } from '@/domains/hooks';

import PokedexItem from './PokedexItem';

const PokedexList = () => {
  const { data = [] } = useGetPokemonListQuery(0);
  const navigate = useNavigate();

  return (
    <div tw='flex flex-col gap-6'>
      {data.map((item) => (
        <PokedexItem
          key={item.id}
          pokemonImageSrc={item.imageSrc}
          pokemonName={item.name}
          onClick={() => {
            navigate(`/${item.id}`);
          }}
        />
      ))}
      <div tw='w-full h-24' />
    </div>
  );
};

export default PokedexList;
