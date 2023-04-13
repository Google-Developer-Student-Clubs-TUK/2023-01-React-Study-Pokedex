export const properCase = (str: string) =>
  str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const createLeadingZero = (num: number) =>
  num.toString().padStart(3, '0');
