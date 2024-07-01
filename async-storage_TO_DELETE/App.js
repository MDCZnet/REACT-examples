import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import First from './First';
import Second from './Second';

const Stack = createNativeStackNavigator();
const pin = Math.floor(1000 + Math.random() * 9000).toString()

export default function App() {
  const savePIN = async() => {
    await AsyncStorage.setItem('pin', pin)
  }

  const getPIN = async () => {
    const result = await AsyncStorage.getItem('pin')
    console.log(result)
  }
  
  useEffect(() => {
    savePIN()
    getPIN()
  }, [])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='First'
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name='First page' component={First} />
          <Stack.Screen name='Second page' component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
