import 'twin.macro';

import React from 'react';

import { ImageView } from '@/components';

import {
  useBackgroundColor,
  useGetPokemonInfoQueries,
  useNavigation,
} from '../../hooks';
import Card from '../Card';

const PokedexPicture = () => {
  const { currentNumber } = useNavigation();
  const { pokemonBasicInfoData, isLoading } =
    useGetPokemonInfoQueries(currentNumber);
  const { handleLoadImage } = useBackgroundColor();

  return (
    <Card
      title='picture'
      contents={
        <div tw='flex-1 relative max-h-[204px]'>
          {isLoading ? (
            <div tw='animate-pulse w-[264px] h-[204px] bg-gray-300 rounded-2xl' />
          ) : (
            <ImageView
              tw='absolute inset-0 w-full h-full object-contain object-center'
              src={pokemonBasicInfoData?.image}
              alt={pokemonBasicInfoData?.name ?? ''}
              crossOrigin='anonymous'
              width={264}
              height={204}
              key={pokemonBasicInfoData?.name ?? ''}
              onLoad={handleLoadImage}
            />
          )}
        </div>
      }
    />
  );
};

export default PokedexPicture;
