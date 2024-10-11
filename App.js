import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterScreen from './screens/CharacterScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import VehicleScreen from './screens/VehicleScreen';
import MovieScreen from './screens/MovieScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={CharacterScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
        <Stack.Screen name="Vehicles" component={VehicleScreen} />
        <Stack.Screen name="Movies" component={MovieScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

