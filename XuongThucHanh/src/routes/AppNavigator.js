import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreenCategory from '../views/ExploreScreenCategory';
import ShopScreen from '../views/ShopScreen'
import DetailCategoryNavigatorScreen from '../views/DetailCategoryNavigatorScreen';

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen component={DetailCategoryNavigatorScreen} name='DetailCategoryNavigatorScreen' />
                <MainStack.Screen component={ShopScreen} name='ShopScreen' />
                <MainStack.Screen component={ExploreScreenCategory} name='ExploreScreenCategory' />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
