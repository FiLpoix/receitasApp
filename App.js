import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitasScreen from './screens/ReceitasScreen';
import DetalhesScreen from './screens/DetalhesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:''}} />
        <Stack.Screen name="Receitas" component={ReceitasScreen} options={{title:''}} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{title:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
