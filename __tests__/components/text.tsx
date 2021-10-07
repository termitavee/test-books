import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { render } from '../test-util';

import Caption from 'src/components/text/caption';
import Headline from 'src/components/text/headline';
import Paragraph from 'src/components/text/paragraph';
import Subheading from 'src/components/text/subheading';
import Text from 'src/components/text/text';
import Title from 'src/components/text/title';

jest.useFakeTimers();
const text = 'asdf';
const style = {};
const onPress = jest.fn();

describe('src/components/text/caption', () => {
  it('renders', () => {
    const tree = render(<Caption>{text}</Caption>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});

describe('src/components/text/headline', () => {
  it('renders', () => {
    const tree = render(<Headline>{text}</Headline>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with style', () => {
    const tree = render(
      <Headline style={style} onPress={onPress}>
        {text}
      </Headline>,
    ).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});

describe('src/components/text/paragraph', () => {
  it('renders', () => {
    const tree = render(<Paragraph>{text}</Paragraph>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});

describe('src/components/text/subheading', () => {
  it('renders', () => {
    const tree = render(<Subheading>{text}</Subheading>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});

describe('src/components/text/text', () => {
  it('renders', () => {
    const tree = render(<Text>{text}</Text>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});

describe('src/components/text/title', () => {
  it('renders', () => {
    const tree = render(<Title>{text}</Title>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
