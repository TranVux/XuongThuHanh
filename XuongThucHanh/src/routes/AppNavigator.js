import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Main = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Main.Navigator>

            </Main.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
