import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./index.styles";

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
        setPokemonList((prev) => [
          ...prev,
          ...res.results.map((item: { name: string }) => item.name),
        ]);
      });
  }, []);

  const onIntersect: IntersectionObserverCallback = ([
    { intersectionRatio },
  ]) => {
    console.log(intersectionRatio);

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

  const { setTarget } = useIntersectionObserver({ onIntersect });

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
                alt=""
              />
            </S.SpriteWrapper>
            <S.Name>{item}</S.Name>
          </S.CardWrapper>
        </Link>
      ))}
      <S.Catcher ref={setTarget}>Hi</S.Catcher>
    </S.Wrapper>
  );
}

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin = "0px",
  threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};
