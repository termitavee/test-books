import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { darkTheme, lightTheme } from 'src/assets/themes';
import { ContextProvider } from 'src/hooks/use-context';
import { initialWindowMetrics, SafeAreaProvider } from 'src/hooks/use-safe-area';
import Navigation from 'src/navigation/index';
import { themeType } from 'src/types/context';

export default function App() {
  const [themeContext, setTheme] = useState<themeType>('light');
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const theme = (newTheme: themeType) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme === 'light' ? lightTheme : darkTheme);
  };

  return (
    <PaperProvider theme={currentTheme}>
      <ContextProvider value={{ themeContext, set: { theme } }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <View style={styles.container}>
            <Navigation />
          </View>
        </SafeAreaProvider>
      </ContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 500,
    height: '100%',
  },
});
