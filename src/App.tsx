import React from "react";

import styled from "styled-components";

import { Background } from "@/components/blocks/Background";
import { PokemonCards } from "@/components/organisms/PokemonCards";

export default function App() {
  return (
    <Wrapper>
      <PokemonCards />
      <Background />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
