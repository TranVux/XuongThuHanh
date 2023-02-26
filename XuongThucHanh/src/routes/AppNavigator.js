import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreCategoryScreen from '../views/ExploreCategoryScreen';
import ShopScreen from '../views/ShopScreen'
import DetailCategoryNavigatorScreen from '../views/DetailCategoryNavigatorScreen';
import PaymentScreen from '../views/PaymentScreen';
import MyPager from '../components/Pager/MyPager';

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen component={ExploreCategoryScreen} name='ExploreCategoryScreen' />
                <MainStack.Screen component={ShopScreen} name='ShopScreen' />
                <MainStack.Screen component={DetailCategoryNavigatorScreen} name='DetailCategoryNavigatorScreen' />
                <MainStack.Screen component={PaymentScreen} name='PaymentScreen' />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
