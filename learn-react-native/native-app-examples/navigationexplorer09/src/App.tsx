import React from 'react'
// navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList = {
  Home: undefined
  Details: {productId: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
