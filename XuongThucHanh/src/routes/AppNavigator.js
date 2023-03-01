import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator';
import StackNavigator from './StackNavigator';
import { useSelector } from 'react-redux';

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {

    const isLogin = useSelector(state => state.isLogin);

    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
                {
                    isLogin ?
                        <MainStack.Screen component={BottomNavigator} name='BottomNavigator' />
                        :
                        <MainStack.Screen component={StackNavigator} name='StackNavigator' />
                }
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
