import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from 'react-native-simple-store';

export default function App() {
  store.push('pin', 1234);

  store.get('pin').then(
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
