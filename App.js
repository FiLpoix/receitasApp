import React, { useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitasScreen from './screens/ReceitasScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import { ReceitasProvider } from './components/context';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Manter o Splash visível enquanto carrega
        await SplashScreen.preventAutoHideAsync();
        // Simula carregamento (ex: carregar recursos)
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        // Esconde o Splash Screen
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);


  return (
    <ReceitasProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:''}} />
        <Stack.Screen name="Receitas" component={ReceitasScreen} options={{title:''}} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{title:''}} />
      </Stack.Navigator>
    </NavigationContainer>
    </ReceitasProvider>
  );
}
