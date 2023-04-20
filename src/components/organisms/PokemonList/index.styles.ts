import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Catcher = styled.div`
  position: absolute;
  bottom: 0;
  height: 20px;
  background-color: limegreen;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 20px 20px 16px;
  border-radius: 24px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    background-color: rgb(253, 253, 255);
    box-shadow: rgb(0 0 0 / 12%) 6px 8px 16px;
    transform: translateY(-2px);
  }
`;

export const SpriteWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const Sprite = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Name = styled.span`
  font-size: 2rem;
`;
