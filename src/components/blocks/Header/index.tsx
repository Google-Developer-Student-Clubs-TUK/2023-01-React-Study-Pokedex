import React from "react";
import * as S from "./index.styles";

import { useLocation } from "react-router-dom";

export function Header() {
  const isLocationCaught = useLocation().pathname.includes("caught");

  return (
    <S.Wrapper>
      <S.HeaderItem to="/poke-encyclopedia/">메인 페이지</S.HeaderItem>
      {!isLocationCaught && <S.HeaderItem to="/poke-encyclopedia/caught">동료들</S.HeaderItem>}
    </S.Wrapper>
  );
}
