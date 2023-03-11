import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../Account';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import Orders from '../Orders';
import ChangePass from '../ChangePass';
import MyCard from '../card/MyCard';
import NewCard from '../card/NewCard';
import NewAddress from '../NewAddress';
import Address from '../Address';
import EditAddress from '../EditAddress';
import PaymentScreen from '../PaymentScreen';
import Wellcome from '../Wellcome';
import OnGoing from '../OnGoing';
import OnGoings from '../OnGoings';

const AccountNavigatorStack = createNativeStackNavigator();

const AccountNavigatorScreen = () => {
    return (
        <AccountNavigatorStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountNavigatorStack.Screen component={Account} name="AccountScreen" />
            <AccountNavigatorStack.Screen component={Profile} name="ProfileScreen" />
            <AccountNavigatorStack.Screen component={EditProfile} name="EditProfileScreen" />
            <AccountNavigatorStack.Screen component={Orders} name="OrdersScreen" />
            <AccountNavigatorStack.Screen component={ChangePass} name="ChangePassScreen" />
            <AccountNavigatorStack.Screen component={MyCard} name="MyCardScreen" />
            <AccountNavigatorStack.Screen component={NewCard} name="NewCardScreen" />
            <AccountNavigatorStack.Screen component={NewAddress} name="NewAddressScreen" />
            <AccountNavigatorStack.Screen component={Address} name="AddressScreen" />
            <AccountNavigatorStack.Screen component={EditAddress} name="EditAddressScreen" />
            <AccountNavigatorStack.Screen component={PaymentScreen} name="PaymentScreen" />
            <AccountNavigatorStack.Screen component={Wellcome} name="Wellcome" />
            <AccountNavigatorStack.Screen component={OnGoings} name="OnGoings" />
        </AccountNavigatorStack.Navigator>
    )
}

export default AccountNavigatorScreen