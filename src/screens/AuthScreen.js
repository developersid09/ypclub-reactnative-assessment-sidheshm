import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { login, register } from '../store/authSlice';

export default function AuthScreen() {
  const [mode, setMode] = useState('login'); // or 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = async () => {
    try {
      if (mode === 'login') {
        await dispatch(login(email.trim(), password));
      } else {
        await dispatch(register(name.trim(), email.trim(), password));
      }
    } catch(e) {
      Alert.alert('Error', e.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{mode === 'login' ? 'Login' : 'Register'}</Text>
      {mode === 'register' && (
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      )}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button role="button" title={mode === 'login' ? 'Login' : 'Register'} onPress={submit} />
      <TouchableOpacity onPress={() => setMode(mode === 'login' ? 'register' : 'login')}>
        <Text style={{marginTop:12, color:'blue'}}>{mode === 'login' ? 'Create an account' : 'Have an account? Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:16, justifyContent:'center'},
  input:{borderWidth:1, borderColor:'#ccc', padding:10, marginBottom:12, borderRadius:6},
  header:{fontSize:24, fontWeight:'700', marginBottom:16}
});
