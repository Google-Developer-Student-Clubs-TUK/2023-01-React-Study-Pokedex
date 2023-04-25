import React, { useState } from "react";
import * as S from "./index.styles";

export function PokeBall() {
  return (
    <div style={{ width: "3000px", height: "3000px" }}>
      <S.Goal className="droppable"></S.Goal>
      <S.PokeBall
        className="poke-ball"
        draggable={false}
        onMouseDown={(event) => {
          document.querySelector(".poke-ball")?.classList.add("throwing");
          let ball = event.target as HTMLDivElement;

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
            document.removeEventListener("mousemove", onMouseMove);
            ball.onmouseup = null;
          };
        }}
      ></S.PokeBall>
    </div>
  );
}
