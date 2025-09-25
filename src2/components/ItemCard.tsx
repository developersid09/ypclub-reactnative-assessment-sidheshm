import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Item } from '../slices/itemsSlice';

export default function ItemCard({ item }: { item: Item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      {item.body ? <Text style={styles.body}>{item.body}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontSize: 16, fontWeight: '600' },
  body: { marginTop: 6, color: '#444' },
});
