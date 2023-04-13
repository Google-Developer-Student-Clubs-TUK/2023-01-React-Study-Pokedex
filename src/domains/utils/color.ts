export const RGBToHSL = ([r, g, b]: number[]): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.round(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    ),
    Math.round((100 * (2 * l - s)) / 2),
  ];
};

export const constrainValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
