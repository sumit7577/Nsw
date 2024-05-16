import { View, Text } from 'react-native'
import React from 'react'
import { AuthStackScreen } from '../navigators'
import { NavigationContainer } from '@react-navigation/native';


export default function Home() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>

  )
}