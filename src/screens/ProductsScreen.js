import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/productSlice';
import ProductItem from '../components/ProductItem';
import { addToCart } from '../store/cartSlice';
import { logout } from '../store/authSlice';
import { loadOrders } from '../store/ordersSlice';

export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { data: products, categories } = useSelector(s => s.products);
  const cart = useSelector(s => s.cart);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadOrders());
  }, [dispatch]);

  const filtered = products.filter(p =>
    (cat === 'All' || p.category === cat) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <TextInput placeholder="Search" style={styles.search} value={search} onChangeText={setSearch} />
        <Button role="button" title="Logout" onPress={() => dispatch(logout())} />
      </View>

      <View style={styles.categoryBar}>
        <TouchableOpacity onPress={() => setCat('All')} style={[styles.chip, cat==='All' && styles.chipActive]}>
          <Button role="button" title="All" onPress={() => setCat('All')} />
        </TouchableOpacity>
        {categories.map(c => (
          <TouchableOpacity key={c} onPress={() => setCat(c)} style={[styles.chip, cat===c && styles.chipActive]}>
            <Button role="button" title={c} onPress={() => setCat(c)} />
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({item}) => <ProductItem product={item} onAdd={(p)=> dispatch(addToCart(p))} />}
        ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#f0f0f0'}} />}
      />

      <View style={styles.footer}>
        <Button role="button" title={`Go to Cart (${cart.items.reduce((s,i)=>s+i.qty,0)})`} onPress={() => navigation.navigate('Cart')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{flexDirection:'row', padding:12, alignItems:'center', justifyContent:'space-between'},
  search:{flex:1, borderWidth:1, borderColor:'#ddd', padding:8, marginRight:8, borderRadius:6},
  categoryBar:{flexDirection:'row', padding:8, flexWrap:'wrap'},
  chip:{marginRight:8},
  chipActive:{backgroundColor:'#eef'},
  footer:{padding:12, borderTopWidth:1, borderColor:'#eee'}
});
