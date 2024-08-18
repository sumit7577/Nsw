import { View, Text } from 'react-native'
import React from 'react'
import { AuthStackScreen, BottomStackScreen } from '../navigators'
import { NavigationContainer } from '@react-navigation/native';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import AppStorge from '../constants/database';
import { loginResp } from '../networking/resp-type';
import userAuth from '../hooks/auth';


export default function Home() {
  const { user } = userAuth()
  return (
    <NavigationContainer>
      {user ? <BottomStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>

  )
}