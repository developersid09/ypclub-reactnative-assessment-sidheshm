import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAppSelector } from '../hooks/redux';

export default function RootNavigator() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
