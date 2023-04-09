import 'twin.macro';

import React from 'react';

import Navigation from '@/components/Navigation';

import { useGetPokemonBasicInfoQuery, useNavigation } from '../../hooks';
import { createLeadingZero } from '../../utils';

const PokedexPicture = () => {
  const { currentNumber, handleNext, handlePrevious } = useNavigation();
  const { data } = useGetPokemonBasicInfoQuery(currentNumber);
  // TODO: Image 처리하기

  return (
    <div tw='bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72'>
      <div tw='flex'>
        <p tw='font-semibold flex-1 text-lg text-black/70'>Picture</p>
      </div>
      <div tw='flex-1 relative'>
        <img
          tw='absolute inset-0 w-full h-full object-contain object-center'
          src={data?.image}
          alt={data?.name ?? ''}
          crossOrigin='anonymous'
        />
      </div>
      <Navigation
        currentHashTagNumber={`#${createLeadingZero(currentNumber)}`}
        onPreviousButtonClick={handlePrevious}
        onNextButtonClick={handleNext}
        nextButtonDisabled={currentNumber === 898}
        previousButtonDisabled={currentNumber === 1}
      />
    </div>
  );
};

export default PokedexPicture;
