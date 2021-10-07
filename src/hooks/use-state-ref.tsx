import React from 'react';

const useStateRef: <T>(arg: T) => [T, (newVal: T) => void, React.MutableRefObject<T>] = defaultValue => {
  const [state, setState] = React.useState(defaultValue);
  const ref = React.useRef(state);

  const dispatch = React.useCallback(function (val) {
    ref.current = typeof val === 'function' ? val(ref.current) : val;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
};

export default useStateRef;
