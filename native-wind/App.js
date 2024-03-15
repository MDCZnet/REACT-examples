import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text>Native Wind Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}