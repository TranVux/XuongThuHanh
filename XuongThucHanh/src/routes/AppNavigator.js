import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wellcome from '../views/Wellcome';
import Signup from '../views/Signup';
import Signcode from '../views/Signcode';
import Signpass from '../views/Signpass';
import Login from '../views/Login';


const Main = createNativeStackNavigator();
const User = ()=>{
    return (
        <Main.Navigator initialRouteName='Wellcome' screenOptions={{ headerShown: false }}>
          <Main.Screen name='Wellcome' component={Wellcome} />
          <Main.Screen name='Signup' component={Signup} />
          <Main.Screen name='Signpass' component={Signpass} />
          <Main.Screen name='Signcode' component={Signcode} />
          <Main.Screen name='Login' component={Login} />
        </Main.Navigator>
      )
}

const AppNavigator = () => {
    return (
            <>
            <User></User>
            </>
    )
}

export default AppNavigator
