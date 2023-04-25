import 'twin.macro';

import React from 'react';

type PokedexItemProps = {
  pokemonName: string;
  pokemonImageSrc: string;
  onClick?: () => void;
};

const PokedexItem = ({
  pokemonName,
  pokemonImageSrc,
  onClick,
}: PokedexItemProps) => (
  <button
    tw='shadow-lg rounded-xl w-full h-24 flex items-center justify-center px-5 gap-6 hover:scale-125 ease-in-out duration-700'
    type='button'
    onClick={onClick}>
    <img src={pokemonImageSrc} alt={pokemonName} width='60px' />
    <p tw='text-5xl font-semibold font-fun'>{pokemonName}</p>
  </button>
);

export default PokedexItem;
