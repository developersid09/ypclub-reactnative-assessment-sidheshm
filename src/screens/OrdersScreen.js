import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrders } from '../store/ordersSlice';

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orders = useSelector(s => s.orders.orders);

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  return (
    <View style={{flex:1}}>
      <FlatList
        data={orders}
        keyExtractor={o => o.id}
        ListEmptyComponent={() => <View style={{padding:20}}><Text>No past orders.</Text></View>}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={{fontWeight:'700'}}>{item.id}</Text>
            <Text>Items: {item.items.length}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
            <Text>Placed: {new Date(item.createdAt).toLocaleString()}</Text>
            <Text>Ship to: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card:{padding:12, borderBottomWidth:1, borderColor:'#eee'}
});
