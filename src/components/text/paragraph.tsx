import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Paragraph as PaperParagraph } from 'react-native-paper';

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

const Paragraph = ({ style, children, ...props }: ICardProps) => {
  return (
    <PaperParagraph style={[styles.text, style]} {...props}>
      {children}
    </PaperParagraph>
  );
};

export default Paragraph;
