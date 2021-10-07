import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';

import { Card as PaperCard } from 'react-native-paper';
import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
  },
});

interface ICardProps extends ViewProps {
  children: childrenType;
}

const Card = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperCard style={[styles.card, style]} {...props}>
      {children}
    </PaperCard>
  );
};

export default Card;
