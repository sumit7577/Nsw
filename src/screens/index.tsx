import { View, Text } from 'react-native'
import React from 'react'
import { AuthStackScreen, BottomStackScreen } from '../navigators'
import { NavigationContainer } from '@react-navigation/native';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import AppStorge from '../constants/database';


export default function Home() {
  const database = useMMKVStorage("user", AppStorge);
  return (
    <NavigationContainer>
      {database[0] ? <BottomStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>

  )
}