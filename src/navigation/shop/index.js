import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Categories, Products, ProductDetail } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ contentStyle: { backgroundColor: theme.colors.background } }}>
      <Stack.Screen
        name="Home"
        component={Categories}
        options={{ title: 'Categorias de productos' }}
      />
      <Stack.Screen name="Products" component={Products} options={{ title: 'Categoria X' }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Detalle de prod X' }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
