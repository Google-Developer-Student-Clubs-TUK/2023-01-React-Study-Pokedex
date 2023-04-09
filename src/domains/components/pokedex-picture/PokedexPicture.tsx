import 'twin.macro';

import React from 'react';

import Navigation from '@/components/Navigation';

import { useNavigation } from '../../hooks';
import { createLeadingZero } from '../../utils';

const PokedexPicture = () => {
  const { currentNumber, handleNext, handlePrevious } = useNavigation();

  return (
    <div tw='bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72'>
      <div tw='flex'>
        <p tw='font-semibold flex-1 text-lg text-black/70'>Picture</p>
      </div>

      <div tw='flex-1 relative'>
        <img
          tw='absolute inset-0 w-full h-full object-contain object-center'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          alt='bulbasaur'
        />
      </div>
      <Navigation
        currentHashTagNumber={`#${createLeadingZero(currentNumber)}`}
        onPreviousButtonClick={handlePrevious}
        onNextButtonClick={handleNext}
      />
    </div>
  );
};

export default PokedexPicture;
