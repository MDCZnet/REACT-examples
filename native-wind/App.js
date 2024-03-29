import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Karta from './screens/Karta';

export default function App() {
  return (
    <View>
      <Text className="text-red-600">Native Wind Example</Text>
      <Karta />
      <StatusBar style="auto" />
    </View>
  );
}