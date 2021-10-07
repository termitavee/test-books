import { useEffect, useRef } from 'react';

const usePrevious: <T>(arg: T) => T = value => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
