import React from 'react'
import Aktivace from './screens/Aktivace'
import Karta from './screens/Karta'
import Prihlaseni from './screens/Prihlaseni'

import { Provider } from 'react-native-paper'
import { theme } from './theme'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Přihlášení do aplikace'
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name='Přihlášení do aplikace' component={Prihlaseni} />
          <Stack.Screen name='Aktivace aplikace' component={Aktivace} />
          <Stack.Screen name='Zákaznická karta' component={Karta} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
