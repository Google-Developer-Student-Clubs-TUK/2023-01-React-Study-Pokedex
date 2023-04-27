import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

export const PokemonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const PokemonSprite = styled.img`
  border: 1px solid rgb(0 0 0 / 12%);
  border-radius: 12px;

  &:hover {
    background-color: rgb(253, 253, 255);
    box-shadow: rgb(0 0 0 / 12%) 6px 8px 16px;
    transform: translateY(-2px);
  }
`;
