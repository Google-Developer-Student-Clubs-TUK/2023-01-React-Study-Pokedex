import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1020px;
  height: 100%;

  margin: 80px 24px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;
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

  @media screen and (max-width: 720px) {
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

export const SearchBarWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 10px;

  margin-bottom: 10px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const SearchBar = styled.input`
  all: unset;
  font-size: 1.6rem;

  background: #ffffff68;

  width: 300px;

  padding: 10px 10px;

  border-radius: 10px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
