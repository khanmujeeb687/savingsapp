import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from '../screens/home';
import {NavigationScreenNames} from './navigationScreenNames';
import {StatusBar} from 'react-native';
import LoginScreen from '../screens/login';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackAnimation: 'simple_push',
        headerShown: false,
      }}>
        <Stack.Screen name={NavigationScreenNames.HomeScreen} component={Home} />
        <Stack.Screen
        name={NavigationScreenNames.LoginScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
