import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useItems } from '../hooks/useItems';
import ItemCard from '../components/ItemCard';

export default function ItemList() {
  const { items, loading, error, refresh, loadMore } = useItems();

  return (
    <View style={{ flex: 1 }}>
      {error ? <Text style={{ color: 'red', padding: 8 }}>{error}</Text> : null}
      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => <ItemCard item={item} />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.4}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        ListEmptyComponent={
          loading ? null : <Text style={{ padding: 12 }}>No items</Text>
        }
      />
    </View>
  );
}
