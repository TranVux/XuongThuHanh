import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wellcome from '../views/Wellcome';
import Signup from '../views/Signup';


const Main = createNativeStackNavigator();
const User = ()=>{
    return (
        <Main.Navigator initialRouteName='Wellcome' screenOptions={{ headerShown: true }}>
          <Main.Screen name='Wellcome' component={Wellcome} />
          <Main.Screen name='Signup' component={Signup} />
        </Main.Navigator>
      )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Main.Navigator>
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
