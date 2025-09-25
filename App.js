import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import store from './src/store';
import RootNavigator from './src/navigation';
import { restoreAuth } from './src/store/authSlice';

function AppInner() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(restoreAuth()); // restore token / user
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <RootNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}
