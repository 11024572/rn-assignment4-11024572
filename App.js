import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'C:/Users/User/Desktop/rn-assignment4-11024572/DCIT 202 Assignment 4/Screens/HomeScreen.js';
import HomeScreen from 'C:/Users/User/Desktop/rn-assignment4-11024572/DCIT 202 Assignment 4/Screens/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}