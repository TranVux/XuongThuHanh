import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreenCategory from '../views/ExploreScreenCategory';
import ShopScreen from '../views/ShopScreen'

const Main = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Main.Navigator screenOptions={{ headerShown: false }}>
                <Main.Screen component={ExploreScreenCategory} name='ExploreScreenCategory' />
                <Main.Screen component={ShopScreen} name='ShopScreen' />
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
