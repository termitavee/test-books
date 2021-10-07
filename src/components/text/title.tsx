import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Title as PaperTitle } from 'react-native-paper';

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

const Title = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperTitle style={[styles.text, style]} {...props}>
      {children}
    </PaperTitle>
  );
};

export default Title;
