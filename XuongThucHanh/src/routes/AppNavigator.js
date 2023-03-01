import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    DetailCategoryNavigatorScreen, CartScreen, ShopScreen,
    PaymentScreen, EditProfile, ExploreCategoryScreen, MyCard,
    ChangePass, ItemScreen, OrderFailedScreen, OrderSuccessfullScreen,
    Profile, Orders, NewCard, FavouriteEmpty, Favourite, Account,
    DetailProductScreen, Address, NewAddress, OnGoings, EditAddress, Login
} from '../screens'

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnGoings">
                <MainStack.Screen component={NewCard} name='NewCard' />
                <MainStack.Screen component={MyCard} name='MyCard' />
                <MainStack.Screen component={CartScreen} name='CartScreen' />
                <MainStack.Screen component={ChangePass} name='ChangePass' />
                <MainStack.Screen component={DetailCategoryNavigatorScreen} name='DetailCategoryNavigatorScreen' />
                <MainStack.Screen component={ShopScreen} name='ShopScreen' />
                <MainStack.Screen component={ExploreCategoryScreen} name='ExploreCategoryScreen' />
                <MainStack.Screen component={PaymentScreen} name='PaymentScreen' />
                <MainStack.Screen component={EditProfile} name='EditProfile' />
                <MainStack.Screen component={ItemScreen} name='ItemScreen' />
                <MainStack.Screen component={OrderFailedScreen} name='OrderFailedScreen' />
                <MainStack.Screen component={OrderSuccessfullScreen} name='OrderSuccessfullScreen' />
                <MainStack.Screen component={Orders} name='Orders' />
                <MainStack.Screen component={Profile} name='Profile' />
                <MainStack.Screen component={FavouriteEmpty} name='FavouriteEmpty' />
                <MainStack.Screen component={Favourite} name='Favourite' />
                <MainStack.Screen component={Account} name='Account' />
                <MainStack.Screen component={DetailProductScreen} name='DetailProductScreen' />
                <MainStack.Screen component={Login} name='Login' />
                <MainStack.Screen component={Address} name='Address' />
                <MainStack.Screen component={NewAddress} name='NewAddress' />
                <MainStack.Screen component={EditAddress} name='EditAddress' />
                <MainStack.Screen component={OnGoings} name='OnGoings' />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
