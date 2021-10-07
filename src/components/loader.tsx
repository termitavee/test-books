import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
  loader: {
    // padding: 10,
    // margin: 10,
  },
});

type ActivityIndicatorProps = React.ComponentPropsWithRef<typeof View> & {
  animating?: boolean;
  color?: string;
  size?: 'small' | 'large' | number;
  hidesWhenStopped?: boolean;
  style?: StyleProp<ViewStyle>;
  theme?: ReactNativePaper.Theme;
};

const Loader = ({ style, ...props }: ActivityIndicatorProps) => (
  <ActivityIndicator style={[styles.loader, style]} {...props} />
);

export default Loader;
