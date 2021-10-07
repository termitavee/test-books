import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { render } from '../test-util';

import Button from 'src/components/button';

jest.useFakeTimers();
const text = 'asdf';
const style = {};
const onPress = jest.fn();

describe('src/components/button', () => {
  it('renders', () => {
    const tree = render(<Button>{text}</Button>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with style', () => {
    const tree = render(
      <Button style={style} onPress={onPress}>
        {text}
      </Button>,
    ).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
