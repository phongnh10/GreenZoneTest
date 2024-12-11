
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenEnum from '../../constants/screenEnum';
import LoginScreen from '../../screens/auth/LoginScreen';
import OtherScreen from '../../screens/bottom_navs/OtherScreen';


const OtherStack = createNativeStackNavigator()
const OtherStackScreen = () => {

    return (

        <OtherStack.Navigator
            name={ScreenEnum.OtherStackScreen}
            screenOptions={{ headerShown: false }}>
            <OtherStack.Screen name={ScreenEnum.OtherScreen} component={OtherScreen} />

            <OtherStack.Screen name={ScreenEnum.LoginScreen} component={LoginScreen} />

        </OtherStack.Navigator>

    )
}

export default OtherStackScreen

