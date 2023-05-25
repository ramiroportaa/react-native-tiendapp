import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Cart } from '../../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.fontFamily.bold,
          fontSize: theme.fonts.fontSize.title,
        },
      }}>
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito' }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
