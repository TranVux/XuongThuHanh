import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    DetailCategoryNavigatorScreen, CartScreen, ShopScreen,
    PaymentScreen, EditProfile, ExploreCategoryScreen, MyCard,
    ChangePass, ItemScreen, OrderFailedScreen, OrderSuccessfullScreen,
    Profile, Orders, NewCard, FavouriteEmpty, Favourite, Account, DetailProductScreen, Login, Shop
} from '../screens'

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Shop">
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
                {/* <MainStack.Screen component={Login} name='Login' /> */}

            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
