import { useNavigationState } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, ViewProps, ScrollView, View, ViewStyle, StyleProp } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSafeArea } from 'src/hooks/use-safe-area';

import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 10,
  },
});

interface ICardProps extends ViewProps {
  children: childrenType | childrenType[];
  noHeader?: boolean;
  leftHeaderContent?: childrenType;
  tightHeaderContent?: childrenType;
  title?: string;
  subtitle?: string;
  innerStyle?: StyleProp<ViewStyle>;
}

const Container = ({
  style,
  children,
  noHeader,
  leftHeaderContent,
  tightHeaderContent,
  title,
  subtitle,
  ...props
}: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  const {
    padding: { paddingTop },
  } = useSafeArea();

  return (
    <ScrollView style={style} showsVerticalScrollIndicator={false} {...props}>
      {!noHeader && (
        <Appbar.Header>
          {leftHeaderContent}
          <Appbar.Content title={title} subtitle={subtitle} />
          {tightHeaderContent}
        </Appbar.Header>
      )}
      <View style={[styles.scroll, { paddingTop: noHeader ? paddingTop : 10 }]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
