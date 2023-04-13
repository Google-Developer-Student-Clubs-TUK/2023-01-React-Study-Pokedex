import React, { useState } from "react";
import * as S from "./index.styles";

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export function Background() {
  const backgroundColor = useSelector(
    (state: RootState) => state.color.backgroundColor
  );

  return <S.Wrapper backgroundColor={backgroundColor}></S.Wrapper>;
}
