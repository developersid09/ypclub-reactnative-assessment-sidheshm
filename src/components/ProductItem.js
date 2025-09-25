import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductItem({ product, onAdd }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
        <Text style={styles.price}>Rs.{product.price.toFixed(2)}</Text>
      </View>
      <Button role="button" title="Add" onPress={() => onAdd(product)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  title: { fontWeight: '600', marginBottom: 6, fontSize: 18 },
  description: { marginBottom: 6, fontSize: 14 },
  price: { marginTop: 6, fontSize: 16 }
});
