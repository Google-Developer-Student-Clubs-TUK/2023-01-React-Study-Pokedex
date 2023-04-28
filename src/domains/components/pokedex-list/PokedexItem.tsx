import 'twin.macro';

import React from 'react';
import { Link } from 'react-router-dom';

import { ImageView } from '@/components';

type PokedexItemProps = {
  pokemonName: string;
  pokemonImageSrc: string;
  id: string;
};

const PokedexItem = ({
  pokemonName,
  pokemonImageSrc,
  id,
}: PokedexItemProps) => (
  <Link
    tw='shadow-lg rounded-xl w-full h-24 flex items-center justify-center px-5 gap-6 hover:scale-125 ease-in-out duration-700'
    to={`/${id}`}>
    <div>
      <ImageView src={pokemonImageSrc} alt={pokemonName} width='60px' />
    </div>
    <p tw='text-5xl font-semibold font-fun'>{pokemonName}</p>
  </Link>
);

export default PokedexItem;
