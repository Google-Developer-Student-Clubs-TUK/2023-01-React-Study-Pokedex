import React, { useState } from "react";
import * as S from "./index.styles";

import { useDispatch } from "react-redux";
import { setPokeBallStatus } from "@/stores/pokeBallSlice";

import pokeBallPath from "@/assets/pokeball.png";
import throwPokeBallPath from "@/assets/throw.gif";

export function PokeBall() {
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <S.PokeBall
        alt="poke-ball"
        status={status}
        src={pokeBallPath}
        draggable={false}
        onMouseDown={(event) => {
          if (status === "threw" || status === "arrived") return;

          let ball = event.target as HTMLImageElement;

          let shiftX = event.clientX - ball.getBoundingClientRect().left;
          let shiftY = event.clientY - ball.getBoundingClientRect().top;

          ball.style.position = "absolute";
          ball.style.zIndex = "1000";

          moveAt(event.pageX, event.pageY);

          // 초기 이동을 고려한 좌표 (pageX, pageY)에서
          // 공을 이동합니다.
          function moveAt(pageX: number, pageY: number) {
            ball.style.left = pageX - shiftX + "px";
            ball.style.top = pageY - shiftY + "px";
          }

          function onMouseMove(event: MouseEvent) {
            moveAt(event.pageX, event.pageY);
          }

          // mousemove로 공을 움직입니다.
          document.addEventListener("mousemove", onMouseMove);

          // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
          ball.onmouseup = function () {
            setStatus("threw");

            setTimeout(() => {
              setStatus("arrived");

              setTimeout(() => {
                dispatch(setPokeBallStatus("catch"));
              }, 2000);
            }, 1000);

            document.removeEventListener("mousemove", onMouseMove);
            ball.onmouseup = null;
          };
        }}
      />
      {status === "threw" && <S.ThrowGif src={throwPokeBallPath} />}
    </>
  );
}
