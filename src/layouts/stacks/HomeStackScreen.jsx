import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenEnum from '../../constants/screenEnum';
import HomeScreen from '../../screens/bottom_navs/HomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import BottomSheet from '../../components/BottomSheet';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={ScreenEnum.HomeScreen}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={ScreenEnum.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen name={ScreenEnum.LoginScreen} component={LoginScreen} />
      <HomeStack.Screen
        name={ScreenEnum.BottomSheet}
        component={BottomSheet}
        options={{
          animation: 'slide_from_bottom',
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
