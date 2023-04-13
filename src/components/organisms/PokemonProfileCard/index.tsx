import React from "react";
import * as S from "./index.styles";
import { PokemonProfileCardProps } from "./index.types";

import { Card } from "@/components/blocks/Card";

import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { Skeleton } from "@mui/material";

export function PokemonProfileCard({ profile }: PokemonProfileCardProps) {
  const onLoadImage = useBackgroundColor();

  const isLoading = useSelector((state: RootState) => state.isLoading.status);

  return (
    <Card title="프로필">
      {isLoading ? (
        <Skeleton
          sx={{ bgcolor: "grey.400" }}
          variant="rounded"
          width={"100%"}
          height={"100%"}
        />
      ) : (
        <S.Image
          src={profile}
          alt="pokemon-image"
          crossOrigin="anonymous"
          onLoad={onLoadImage}
        ></S.Image>
      )}
    </Card>
  );
}
