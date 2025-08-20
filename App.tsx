import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AppContainer from './src/App';
import { CustomStatusBar } from './src/components/CustomStatusBar';
import colors from './src/utils/colors';
import commonStyles from './src/utils/commonStyles';

export default function App() {

  return (
    <SafeAreaView style={commonStyles.Container}>
      <CustomStatusBar color={colors.colorWhite} barStyle={'dark-content'} />
      <AppContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
