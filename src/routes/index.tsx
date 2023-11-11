import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {Home} from '../pages/Home';
import {Perfil} from '../pages/Perfil';

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
    headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Perfil' component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}