import ColorThief from "colorthief";

import { useDispatch } from "react-redux";
import { setHslValue, setBackgroundColor } from "@/stores/colorSlice";

import { RGBToHSL, constrainValue } from "@/utils/color";

export function useBackgroundColor() {
  const dispatch = useDispatch();

  const onLoadImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const colorThief = new ColorThief();
    const img = event.currentTarget;
    const colorPalette = RGBToHSL(colorThief.getColor(img));

    const color = `linear-gradient(
        45deg,
        hsl(${constrainValue(colorPalette[0] + 25, 0, 360)}deg ${constrainValue(
      colorPalette[1] + 50,
      0,
      100
    )}% ${constrainValue(colorPalette[2] - 10, 0, 100)}%) 0%,
        hsl(${constrainValue(colorPalette[0] - 25, 0, 360)}deg ${constrainValue(
      colorPalette[1] + 25,
      0,
      100
    )}% ${constrainValue(colorPalette[2] + 10, 0, 100)}%) 100%
      )`;

    dispatch(setHslValue(colorPalette));
    dispatch(setBackgroundColor(color));
  };

  return onLoadImage;
}
