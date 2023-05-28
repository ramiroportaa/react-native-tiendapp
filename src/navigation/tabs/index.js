import { Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './../cart';
import OrdersNavigator from './../orders';
import ShopNavigator from './../shop';
import { theme } from '../../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.fontFamily.regular,
          fontSize: 12,
        },
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarIconStyle: {
          fontSize: theme.fonts.fontSize.title,
        },
      }}>
      <Tab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => <Entypo name="shop" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size + 7} color={color} />,
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => <Entypo name="shopping-bag" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
