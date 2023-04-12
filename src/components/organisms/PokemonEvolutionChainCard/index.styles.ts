import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  height: 100%;

  @media screen and (max-width: 720px) {
    width: 300px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  height: 100%;
`;

export const ItemTitle = styled.div`
  color: rgb(96, 61, 32);
  font-size: 1.6rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
