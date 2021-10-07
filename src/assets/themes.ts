import { Theme } from 'react-native-paper/lib/typescript/types';
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  dark: false,
  // mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
  roundness: 5,
};

export const darkTheme: Theme = {
  ...DarkTheme,
  roundness: 5,
};
