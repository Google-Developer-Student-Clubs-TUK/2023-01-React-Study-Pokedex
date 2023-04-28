import type { WritableAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

type HydrateAtomsProps = {
  initialValues: Array<[WritableAtom<unknown, any[], any>, unknown]>;
  children: JSX.Element;
};

const HydrateAtoms = ({ initialValues, children }: HydrateAtomsProps) => {
  useHydrateAtoms(initialValues);
  return children;
};

export default HydrateAtoms;
