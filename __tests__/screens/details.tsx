import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';

import DetailsScreen from '../../src/screens/details';
import { render } from '../test-util';
jest.useFakeTimers();

describe('/src/screens/details', () => {
  it('has 1 child', () => {
    const tree = render(<DetailsScreen />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
