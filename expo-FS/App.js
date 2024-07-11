import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function App() {
  const [value, setValue] = useState()

  const saveSecureValue = async () => {
    await SecureStore.setItemAsync('pin', value)
    setValue()
  }

  const retrieveSecureValue = async () => {
    let result = await SecureStore.getItemAsync('pin')
    setValue(result)
  }
  
/*   const [data, setData] = useState() */

/*   useEffect(() => {
    const init = async () => {
      await SecureStore.setItemAsync('pin','1234');
      const pin = await SecureStore.getItemAsync('pin');
      setData(pin);
    };
    init();
  }, [data]); */

/*   useEffect(()=>{ 
    if(pin === null) {
      alert('Funguje.');
      setPIN(Math.floor(1000 + Math.random() * 9000).toString())
      ()=>{saveValue('pin', '1234')}
    }

  }, [] ) */

/*   return (
    <View style={styles.container}>
      <Text>PIN: {pin}</Text>
      <StatusBar style="auto" />
    </View>
  ); */

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder='Value' />
      <Text />
      <Button title='Save' onPress={saveSecureValue} />
      <Text />
      <Button title='Retrieve' onPress={retrieveSecureValue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
