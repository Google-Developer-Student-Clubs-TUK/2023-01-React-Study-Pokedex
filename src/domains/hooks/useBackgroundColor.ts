import ColorThief from 'colorthief';
import { useAtom } from 'jotai';

import { colorPaletteAtom } from '../atoms/color-palette';
import { constrainValue, RGBToHSL } from '../utils';

const colorThief = new ColorThief();

const useBackgroundColor = () => {
  const [colorPalette, setColorPalette] = useAtom(colorPaletteAtom);

  const handleLoadImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const image = e.currentTarget;
    const color = colorThief.getColor(image);
    setColorPalette(RGBToHSL(color));
  };

  const color = `linear-gradient(
		45deg,
		hsl(${constrainValue(colorPalette[0] + 25, 0, 360)}deg ${constrainValue(
    colorPalette[1] + 50,
    0,
    100,
  )}% ${constrainValue(colorPalette[2] - 10, 0, 100)}%) 0%,
		hsl(${constrainValue(colorPalette[0] - 25, 0, 360)}deg ${constrainValue(
    colorPalette[1] + 25,
    0,
    100,
  )}% ${constrainValue(colorPalette[2] + 10, 0, 100)}%) 100%
	)`;

  const iconColor = `hsl(${colorPalette[0]}deg ${constrainValue(
    colorPalette[1] + 25,
    0,
    100,
  )}% ${constrainValue(colorPalette[2] - 10, 0, 100)}%)`;

  return {
    handleLoadImage,
    color,
    iconColor,
  };
};

export default useBackgroundColor;
