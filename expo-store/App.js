import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Storage } from 'expo-storage'

export default function App() {
  let pin = 'empty'
  
  Storage.setItem('pin', 1234);

  Storage.getItem('pin').then(
    res => pin=(res)
  );

  return (
    <View style={styles.container}>
      <Text>PIN: {pin}</Text>
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
