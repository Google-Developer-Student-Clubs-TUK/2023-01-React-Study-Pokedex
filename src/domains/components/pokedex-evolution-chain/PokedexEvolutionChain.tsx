import 'twin.macro';

import { useAtomValue } from 'jotai';
import React from 'react';

import { ImageView } from '@/components';
import { colorPaletteAtom } from '@/domains/atoms/color-palette';
import { useGetPokemonInfoQueries, useNavigation } from '@/domains/hooks';
import { getTextColor } from '@/domains/utils';

import Card from '../Card';

const PokedexEvolutionChain = () => {
  const { currentNumber } = useNavigation();
  const colorPalette = useAtomValue(colorPaletteAtom);
  const { pokemonEvolutionChainData = [], isLoading } =
    useGetPokemonInfoQueries(currentNumber);
  // FIXME: 진화 정보 수정하기...
  return (
    <Card
      title='Evolution Chain'
      style={{ flex: 1 }}
      contents={
        <div tw='flex-1 relative flex items-center'>
          {isLoading ? (
            <div tw='animate-pulse bg-gray-300 rounded-2xl w-full h-full' />
          ) : (
            pokemonEvolutionChainData.map((element, index) => (
              <div
                tw='relative flex-1 flex gap-2 flex-col justify-center items-center'
                key={index}>
                <p style={{ color: getTextColor(colorPalette) }}>
                  {element.name}
                </p>
                <ImageView
                  tw='m-auto'
                  key={element.name}
                  src={element.url}
                  width={149}
                  height={149}
                />
              </div>
            ))
          )}
        </div>
      }
    />
  );
};

export default PokedexEvolutionChain;
