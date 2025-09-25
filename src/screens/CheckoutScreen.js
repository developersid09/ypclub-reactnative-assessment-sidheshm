import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../store/ordersSlice';
import { clearCart } from '../store/cartSlice';

export default function CheckoutScreen({ navigation }) {
  const items = useSelector(s => s.cart.items);
  const user = useSelector(s => s.auth.user);
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');

  const total = items.reduce((s,i)=>s + i.qty * i.product.price, 0);

  const placeOrder = async () => {
    if (!address.trim()) { Alert.alert('Validation','Please enter shipping address'); return; }

    const order = {
      id: 'o-' + Date.now(),
      user: user || { name: 'Guest' },
      items,
      total,
      address,
      createdAt: new Date().toISOString()
    };

    try {
      await dispatch(createOrder(order));
      dispatch(clearCart());
      Alert.alert('Success', 'Order placed successfully');
      navigation.navigate('Orders');
    } catch(e) {
      Alert.alert('Error', e.message || 'Failed to create order');
    }
  };

  return (
    <View style={{flex:1,padding:12}}>
      <Text style={{fontWeight:'700',fontSize:18}}>Checkout</Text>
      <Text style={{marginTop:12}}>Total: ${total.toFixed(2)}</Text>

      <TextInput placeholder="Shipping Address" style={styles.input} value={address} onChangeText={setAddress} />
      <Button role="button" title="Place Order" onPress={placeOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{borderWidth:1, borderColor:'#ddd', padding:10, marginVertical:12, borderRadius:6}
});
