import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from './Screen/Login'
import  Registration  from './Screen/Registration'
import  Home  from './Screen/Home'
import firebase from 'firebase'
import { Button } from 'react-native'

const Stack = createStackNavigator();



export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#e6b150'
        },
        headerTintColor: 'white'
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
