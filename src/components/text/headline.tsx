import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Headline as PaperHeadline } from 'react-native-paper';

const styles = StyleSheet.create({
  text: {
    // padding: 10,
    // width: '100%',
    // margin: 10,
  },
});

interface ICardProps extends TextProps {
  children: string | JSX.Element | (string | JSX.Element)[];
}

const Headline = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperHeadline style={[styles.text, style]} {...props}>
      {children}
    </PaperHeadline>
  );
};

export default Headline;
