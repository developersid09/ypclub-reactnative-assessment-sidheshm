import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthScreen from '../screens/AuthScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useSelector } from 'react-redux';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const token = useSelector(state => state.auth.token);

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown:false }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}
