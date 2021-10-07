import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Caption as PaperCaption } from 'react-native-paper';

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

const Caption = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperCaption style={[styles.text, style]} {...props}>
      {children}
    </PaperCaption>
  );
};

export default Caption;
