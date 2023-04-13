import 'twin.macro';

import React from 'react';

import { ImageView } from '@/components';
import Navigation from '@/components/Navigation';

import {
  useBackgroundColor,
  useGetPokemonBasicInfoQuery,
  useNavigation,
} from '../../hooks';
import { createLeadingZero } from '../../utils';

const PokedexPicture = () => {
  const { currentNumber, handleNext, handlePrevious } = useNavigation();
  const { data, isLoading } = useGetPokemonBasicInfoQuery(currentNumber);
  const { handleLoadImage } = useBackgroundColor();

  return (
    <div tw='bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72'>
      <div tw='flex'>
        <p tw='font-semibold flex-1 text-lg text-black/70'>Picture</p>
      </div>
      <div tw='flex-1 relative max-h-[204px]'>
        {isLoading ? (
          <div tw='animate-pulse w-[264px] h-[204px] bg-gray-300 rounded-2xl' />
        ) : (
          <ImageView
            tw='absolute inset-0 w-full h-full object-contain object-center'
            src={data?.image}
            alt={data?.name ?? ''}
            crossOrigin='anonymous'
            width={264}
            height={204}
            key={data?.name ?? ''}
            onLoad={handleLoadImage}
          />
        )}
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
