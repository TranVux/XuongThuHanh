import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wellcome from '../Wellcome';
import Signup from '../Signup';
import Signpass from '../Signpass';
import Signcode from '../Signcode';
import Login from '../Login';

const SignupStackNavigator = createNativeStackNavigator();

const SignupNavigation = () => {
  return (
    <SignupStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <SignupStackNavigator.Screen component={Wellcome} name="Wellcome" />
            <SignupStackNavigator.Screen component={Signup} name="Signup" />
            <SignupStackNavigator.Screen component={Signpass} name="Signpass" />
            <SignupStackNavigator.Screen component={Signcode} name="Signcode" />
            <SignupStackNavigator.Screen component={Login} name="Login" />
            
        </SignupStackNavigator.Navigator>
  )
}

export default SignupNavigation

const styles = StyleSheet.create({})