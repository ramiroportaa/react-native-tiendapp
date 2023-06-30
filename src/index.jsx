import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';

import { theme } from './constants/theme';
import { init } from './db';
import AppNavigator from './navigation';
import store from './store/index';
import { styles } from './styles';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed.');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    'Epilogue-Regular': require('../assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Bold': require('../assets/fonts/Epilogue-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
