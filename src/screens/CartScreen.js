import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQty } from '../store/cartSlice';

export default function CartScreen({ navigation }) {
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();

  const subtotal = items.reduce((s, i) => s + i.qty * i.product.price, 0);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={i => i.productId}
        ListEmptyComponent={() => <View style={{ padding: 20 }}><Text>Your cart is empty.</Text></View>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.product.name}</Text>
              <Text style={styles.price}>Rs.{item.product.price.toFixed(2)}</Text>
            </View>

            <View style={styles.chip}>
              <TouchableOpacity onPress={() => dispatch(updateQty(item.productId, item.qty + 1))}>
                <Text>{'+  '}</Text>
              </TouchableOpacity>
              <View >
                <Text>{item.qty}</Text>
              </View>
              <TouchableOpacity onPress={() => {
                if (item.qty <= 1) {
                  dispatch(removeFromCart(item.productId));
                } else {
                  dispatch(updateQty(item.productId, item.qty - 1));
                }
              }}>
                <Text>{'  -'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={{ fontSize: 18 }}>Subtotal: Rs. {subtotal.toFixed(2)}</Text>
        <Button role="button" title="Checkout" onPress={() => {
          if (items.length === 0) { Alert.alert('Cart empty', 'Add items to checkout'); return; }
          navigation.navigate('Checkout');
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  footer: { padding: 12, borderTopWidth: 1, borderColor: '#eee' },
  chip: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderWidth: 0.8, borderRadius: 12, borderColor: 'grey', padding: 8, width: 100 },
  title: { fontWeight: '600', marginBottom: 6, fontSize: 18 },
  price: { marginTop: 6, fontSize: 16 }
});
