import React from 'react';
import { View } from 'react-native';

import { render } from '../test-util';

import Container from 'src/components/container';

jest.useFakeTimers();

const child = <View />;
const style = {};

describe('src/components/button', () => {
  it('renders', () => {
    const tree = render(<Container>{child}</Container>).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });

  it('renders with style', () => {
    const tree = render(
      <Container style={style} leftHeaderContent={child} tightHeaderContent={child}>
        {child}
      </Container>,
    ).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
  it('renders with no header', () => {
    const tree = render(
      <Container noHeader style={style}>
        {child}
      </Container>,
    ).toJSON();
    // @ts-ignore
    expect(tree?.children?.length).toBe(1);
  });
});
