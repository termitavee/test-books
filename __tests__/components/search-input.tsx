import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { render } from '../test-util';

import { View } from 'react-native';

import SearchInput from 'src/components/search-input';

jest.useFakeTimers();
const child = <View />;
const onPress = jest.fn();

describe('src/components/button', () => {
  it('renders', () => {
    const tree = render(<SearchInput />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with props', () => {
    const tree = render(<SearchInput onChangeText={onPress} value="" />).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
