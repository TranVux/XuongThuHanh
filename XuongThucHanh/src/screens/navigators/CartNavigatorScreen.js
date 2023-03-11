import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PaymentScreen from '../PaymentScreen';
import ItemScreen from '../ItemScreen';
import OrderSuccessfullScreen from '../OrderSuccessfullScreen';
import { CartScreen, DetailProductScreen, OnGoings, ShopScreen } from '..';

const CartNavigatorStack = createNativeStackNavigator();

const CartNavigatorScreen = () => {
    return (
        <CartNavigatorStack.Navigator screenOptions={{ headerShown: false }}>
            <CartNavigatorStack.Screen component={CartScreen} name='CartScreen' />
            <CartNavigatorStack.Screen component={PaymentScreen} name='PaymentScreen' />
            <CartNavigatorStack.Screen component={OrderSuccessfullScreen} name='OrderSuccessfullScreen' />
            <CartNavigatorStack.Screen component={ItemScreen} name='ItemScreen' />
            <CartNavigatorStack.Screen component={ShopScreen} name='ShopScreen' />
            <CartNavigatorStack.Screen component={OnGoings} name='OnGoings' />
        </CartNavigatorStack.Navigator>
    )
}

export default CartNavigatorScreen