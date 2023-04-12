import React from "react";
import * as S from "./index.styles";
import { PokemonTypeCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

import { Skeleton } from "@mui/material";

export function PokemonTypeCard({ types }: PokemonTypeCardProps) {
  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  return (
    <Card title="특성">
      <S.Wrapper>
        {types.map((type, index) =>
          isLoading ? (
            <Skeleton
              sx={{ bgcolor: "grey.400" }}
              variant="rounded"
              width={"100%"}
              height={"100%"}
            >
              <S.Type key={index}>{type}</S.Type>
            </Skeleton>
          ) : (
            <S.Type key={index}>{type}</S.Type>
          )
        )}
      </S.Wrapper>
    </Card>
  );
}
