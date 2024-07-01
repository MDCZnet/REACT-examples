import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native';

export default function Second({navigation, pin}) {
  const onButtonPressed = () => {
    navigation.reset({
      routes: [{ name: 'First page' }],
    })
  }

  return (
    <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40}}>
      <Text style={{fontSize: 20}} >
        PIN v paměti: {pin}
      </Text>
      <Text />
      <Text />
      <Button title='< Zpět...' onPress={onButtonPressed} />
    </View>
  );
}