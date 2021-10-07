import React from 'react';
import { View } from 'react-native';

import { render } from '../test-util';

import Card from 'src/components/card';

jest.useFakeTimers();
const child = <View />;
const style = {};

describe('src/components/button', () => {
  it('renders', () => {
    const tree = render(<Card>{child}</Card>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with style', () => {
    const tree = render(<Card style={style}>{child}</Card>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
