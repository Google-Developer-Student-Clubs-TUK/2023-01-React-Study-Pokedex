import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export function PokemonList() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0/"
  );
  const [pokemonList, setPokemonList] = useState<string[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUrl(res.next);
        setPokemonList(res.results.map((item: { name: string }) => item.name));
      });
  }, []);

  const onIntersect: IntersectionObserverCallback = ([
    { intersectionRatio },
  ]) => {
    if (intersectionRatio > 0.25) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setUrl(res.next);
          setPokemonList((prev) => [
            ...prev,
            ...res.results.map((item: { name: string }) => item.name),
          ]);
        });
    }
  };

  const { target } = useInfiniteScroll({ onIntersect });

  return (
    <S.Wrapper>
      {pokemonList.map((item, index) => (
        <Link
          to={`/poke-encyclopedia/${index + 1}`}
          key={index}
          style={{ all: "unset" }}
        >
          <S.CardWrapper>
            <S.SpriteWrapper>
              <S.Sprite
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  index + 1
                }.png`}
                alt={`pokemon-sprite-${index + 1}`}
              />
            </S.SpriteWrapper>
            <S.Name>{item}</S.Name>
          </S.CardWrapper>
        </Link>
      ))}
      <S.Catcher ref={target}>Hi</S.Catcher>
    </S.Wrapper>
  );
}