import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signcode, Signpass, Signup, Wellcome} from '../screens';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Wellcome} name="Wellcome" />
      <Stack.Screen component={Signup} name="Signup" />
      <Stack.Screen component={Signpass} name="Signpass" />
      <Stack.Screen component={Signcode} name="Signcode" />
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
