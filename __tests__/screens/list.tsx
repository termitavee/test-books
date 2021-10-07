import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ListScreen from '../../src/screens/list';
import { render } from '../test-util';
jest.useFakeTimers();

describe('/src/screens/list', () => {
  it('has 1 child', () => {
    const tree = render(<ListScreen />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
