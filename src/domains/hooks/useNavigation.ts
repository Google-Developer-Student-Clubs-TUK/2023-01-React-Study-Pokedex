import { useAtom } from 'jotai';

import { countAtom } from '../atoms/count';

const useNavigation = () => {
  const [count, setCount] = useAtom(countAtom);

  const handlePrevious = () => {
    setCount(count - 1);
  };

  const handleNext = () => {
    setCount(count + 1);
  };

  return {
    currentNumber: count,
    handlePrevious,
    handleNext,
  };
};

export default useNavigation;
