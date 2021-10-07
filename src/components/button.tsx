import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
  },
});

interface IButtonProps {
  mode?: 'text' | 'outlined' | 'contained';
  dark?: boolean;
  compact?: boolean;
  color?: string;
  loading?: boolean;
  icon?: IconSource;
  disabled?: boolean;
  children: React.ReactNode;
  uppercase?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  theme?: ReactNativePaper.Theme;
  testID?: string;
}

const Button = ({ style, children, ...props }: IButtonProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <PaperButton style={[styles.button, style]} {...props}>
      {children}
    </PaperButton>
  );
};

export default Button;
