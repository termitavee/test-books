import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import ListScreen from 'src/screens/list';
import DetailsScreen from 'src/screens/details';
// import { RootStackTypes } from './types/navigaiton';

const Stack = createNativeStackNavigator<any>();

export default function App() {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
