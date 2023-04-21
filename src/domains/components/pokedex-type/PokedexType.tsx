import 'twin.macro';

import { useAtomValue } from 'jotai';
import React from 'react';

import { colorPaletteAtom } from '@/domains/atoms/color-palette';
import { useGetPokemonInfoQueries, useNavigation } from '@/domains/hooks';
import { getBorderColor } from '@/domains/utils';

import Card from '../Card';

const PokedexType = () => {
  const { currentNumber } = useNavigation();
  const colorPalette = useAtomValue(colorPaletteAtom);
  const { pokemonBasicInfoData = { types: [] }, isLoading } =
    useGetPokemonInfoQueries(currentNumber);

  return (
    <Card
      title='Type'
      style={{ flex: 1 }}
      contents={
        <div tw='flex flex-wrap mt-3.5 gap-2 h-full'>
          {isLoading ? (
            <div tw='animate-pulse bg-gray-300 rounded-2xl w-full h-full' />
          ) : (
            pokemonBasicInfoData.types.map((type, index) => (
              <span
                tw='px-4 py-1 border rounded-md font-medium h-fit'
                style={{
                  color: getBorderColor(colorPalette),
                  borderColor: getBorderColor(colorPalette),
                }}
                key={index}>
                {type}
              </span>
            ))
          )}
        </div>
      }
    />
  );
};

export default PokedexType;
