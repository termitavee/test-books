import { renderHook } from '@testing-library/react-hooks';

import { useSafeArea } from 'src/hooks/use-safe-area';
import { HOC } from '../test-util';

describe('useStatusBar', () => {
  it('check insets', () => {
    const { result } = renderHook(() => useSafeArea(), { wrapper: HOC });
    expect(result?.current?.insets).toBe(undefined);
  });
});
