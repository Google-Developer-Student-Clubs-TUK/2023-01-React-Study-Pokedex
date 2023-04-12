import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1020px;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column-reverse;
  }
`;

export const PokemonName = styled.h1`
  font-weight: 600;
  font-size: 6rem;
  font-family: ruddy, sans-serif;
`;

export const Index = styled.span`
  font-weight: 600;
  font-size: 3rem;
`;

export const SubWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  grid-template-areas:
    "profile stat stat"
    "type chain chain";

  @media screen and (max-width: 420px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);

    grid-template-areas:
      "profile"
      "stat"
      "type"
      "chain";
  }
`;

export const ProfileCardWrapper = styled.div`
  grid-area: profile;
`;

export const StatCardWrapper = styled.div`
  grid-area: stat;
`;

export const TypeCardWrapper = styled.div`
  grid-area: type;
`;

export const ChainCardWrapper = styled.div`
  grid-area: chain;
`;
