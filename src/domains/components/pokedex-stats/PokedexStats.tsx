import 'twin.macro';

import { useAtomValue } from 'jotai';
import React from 'react';

import { colorPaletteAtom } from '@/domains/atoms/color-palette';
import { useGetPokemonStatsQuery, useNavigation } from '@/domains/hooks';
import { getBarColor, getFillStatColor, getTextColor } from '@/domains/utils';

import Card from '../Card';

const PokedexStats = () => {
  const { currentNumber } = useNavigation();
  const colorPalette = useAtomValue(colorPaletteAtom);
  const { data } = useGetPokemonStatsQuery(currentNumber);
  // TODO: 스켈레톤 UI

  return (
    <Card
      title='Stats'
      style={{ flex: 1 }}
      contents={
        <div tw='flex-1 px-1'>
          <div tw='flex gap-3 align-middle mt-1'>
            <div>
              {data?.stats.map((stat, index) => (
                <div
                  tw='flex justify-between h-6 mt-2 items-center'
                  key={index}>
                  <div
                    tw='font-semibold text-sm capitalize'
                    style={{ color: getTextColor(colorPalette) }}>
                    {stat.stat.name}
                  </div>
                </div>
              ))}
            </div>
            <div tw='flex-1'>
              {data?.stats.map((stat, index) => (
                <div tw='flex items-center mt-2 h-6' key={index}>
                  <div
                    tw='flex-1 h-3 rounded-full relative'
                    style={{ backgroundColor: getBarColor(colorPalette) }}>
                    <div
                      tw='absolute transition-all inset-y-0 left-0 rounded-full'
                      style={{
                        width: `${
                          stat.base_stat < 100 ? stat.base_stat : 100
                        }%`,
                        backgroundColor: getFillStatColor(colorPalette),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div />
          </div>
        </div>
      }
    />
  );
};

export default PokedexStats;
