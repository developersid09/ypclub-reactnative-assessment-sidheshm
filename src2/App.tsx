import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, ActivityIndicator, View, Text, StatusBar } from 'react-native';
import { store } from './src/store';

// Lazy load screen
const ItemList = React.lazy(() => import('./src/screens/ItemList'));

import NativeLogger from './src/native/NativeLogger';

export default function App() {
  useEffect(() => {
    try {
      NativeLogger?.log?.('App mounted — calling native logger (if available)');
    } catch (e) {
      console.warn('NativeLogger missing or failed', e);
    }
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar/>
        <Suspense fallback={<LoadingFallback />}>
          <ItemList />
        </Suspense>
      </SafeAreaView>
    </Provider>
  );
}

function LoadingFallback() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 8 }}>Loading list...</Text>
    </View>
  );
}













// import { StyleSheet } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
// import AppContainer from './src/App';
// import { CustomStatusBar } from './src/components/CustomStatusBar';
// import colors from './src/utils/colors';
// import commonStyles from './src/utils/commonStyles';

// export default function App() {

//   return (
//     <SafeAreaView style={commonStyles.Container}>
//       <CustomStatusBar color={colors.colorWhite} barStyle={'dark-content'} />
//       <AppContainer />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
