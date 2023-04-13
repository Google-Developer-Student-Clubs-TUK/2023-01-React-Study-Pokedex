import tw, { styled } from 'twin.macro';

const Button = styled.button(() => ({
  ...tw`text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md disabled:bg-black/5`,
}));

export default Button;
