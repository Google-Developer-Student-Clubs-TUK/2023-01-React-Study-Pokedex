import 'twin.macro';

import React from 'react';

import { useGetPokemonBasicInfoQuery, useNavigation } from '@/domains/hooks';
import { createLeadingZero } from '@/domains/utils';

const PokedexHeader = () => {
  const { currentNumber } = useNavigation();
  const { data, isLoading } = useGetPokemonBasicInfoQuery(currentNumber);

  return (
    <>
      <div tw='flex items-center px-8 mt-8 justify-between mx-auto max-w-5xl'>
        <p tw='text-2xl opacity-70 font-semibold flex gap-2 items-center'>
          Pokémon
        </p>
        <p tw='text-2xl opacity-70 font-semibold'>{`#${createLeadingZero(
          currentNumber,
        )}`}</p>
      </div>
      <div tw='flex items-center px-8 justify-between mx-auto max-w-5xl'>
        {isLoading ? (
          <div tw='animate-pulse h-24 w-[500px] bg-gray-300 rounded-2xl' />
        ) : (
          <p tw='text-8xl font-semibold opacity-70 font-fun'>{data?.name}</p>
        )}
      </div>
    </>
  );
};

export default PokedexHeader;
