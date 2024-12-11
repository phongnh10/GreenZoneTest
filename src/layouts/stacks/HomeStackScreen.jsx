
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenEnum from '../../constants/screenEnum';
import HomeScreen from '../../screens/bottom_navs/HomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';


const HomeStack = createNativeStackNavigator()
const HomeStackScreen = () => {

    return (

        <HomeStack.Navigator
            name={ScreenEnum.HomeStackScreen}
            screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name={ScreenEnum.HomeScreen} component={HomeScreen} />

            <HomeStack.Screen name={ScreenEnum.LoginScreen} component={LoginScreen} />

        </HomeStack.Navigator>

    )
}

export default HomeStackScreen

