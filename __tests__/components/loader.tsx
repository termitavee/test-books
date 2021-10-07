import React from 'react';

import { render } from '../test-util';

import Loader from 'src/components/loader';

jest.useFakeTimers();

describe('src/components/button', () => {
  it('renders', () => {
    const tree = render(<Loader />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with style', () => {
    const tree = render(<Loader style={{}} />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
