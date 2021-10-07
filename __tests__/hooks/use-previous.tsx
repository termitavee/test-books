import { renderHook } from '@testing-library/react-hooks';

import usePrevious from 'src/hooks/use-previous';

describe('usePrevious', () => {
  it('should has the same value', () => {
    const { result } = renderHook(() => usePrevious(undefined));
    expect(result.current).toBe(undefined);
    // result.rerender(1);
    // expect(result.current).toBe(undefined);
    // rerender(2);
    // expect(result.all).toBe(1);
  });
});
