
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/color'
import ScreenEnum from '../constants/screenEnum';
import HomeStackScreen from './stacks/HomeStackScreen';
import OtherStackScreen from './stacks/OtherStackScreen';
import VoucherStackScreen from './stacks/VoucherStackScreen';
import MerchantStackScreen from './stacks/MerchantStackScreen';
import OrderStackScreen from './stacks/OrderStackScreen';



const BottomTab = createBottomTabNavigator()

const MainNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={ScreenEnum.HomeStackScreen}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ScreenEnum.HomeStackScreen) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ScreenEnum.OrderStackScreen) {
            iconName = focused ? 'cafe' : 'cafe-outline';
          } else if (route.name === ScreenEnum.MerchantStackScreen) {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === ScreenEnum.VoucherStackScreen) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ScreenEnum.OtherStackScreen) {
            iconName = focused ? 'list-sharp' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen name={ScreenEnum.HomeStackScreen} component={HomeStackScreen} />
      <BottomTab.Screen name={ScreenEnum.OrderStackScreen} component={OrderStackScreen} />
      <BottomTab.Screen name={ScreenEnum.MerchantStackScreen} component={MerchantStackScreen} />
      <BottomTab.Screen name={ScreenEnum.VoucherStackScreen} component={VoucherStackScreen} />
      <BottomTab.Screen name={ScreenEnum.OtherStackScreen} component={OtherStackScreen} />


    </BottomTab.Navigator>
  )
}

export default MainNavigation