//https://reactnavigation.org/docs/modal/

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import ScreenKarta from './screens/ScreenKarta';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ navigation }) => ({ 
      headerRight: () => (<Button
        onPress={ () => navigation.navigate("Karta") }
        title="Karta"
        color="#00cc00"
      />)
    })}>
      <Tab.Group screenOptions={{ presentation: 'modal', tabBarButton: (props) => null }}>
        <Tab.Screen name="Karta" component={ScreenKarta} />
      </Tab.Group>
      <Tab.Group>
        <Tab.Screen name="Tab 1" component={Screen1} />
        <Tab.Screen name="Tab 2" component={Screen2} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

