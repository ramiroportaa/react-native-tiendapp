import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef, useEffect } from 'react';
import { Animated, View, Text } from 'react-native';

import CartNavigator from './../cart';
import OrdersNavigator from './../orders';
import ShopNavigator from './../shop';
import { theme } from '../../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const tabIconAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    tabIconAnimation();
  }, [tabIconAnimation]);
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
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <Tab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
