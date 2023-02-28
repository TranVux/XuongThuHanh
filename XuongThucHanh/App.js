import React from 'react'
import { AppContextProvider } from './src/utils/AppContext'
import Wellcome from './src/views/Wellcome'
import Signup from './src/views/Signup'
import Signpass from './src/views/Signpass'
import Signcode from './src/views/Signcode'
import Login from './src/views/Login'
import StackNavigator from './src/routes/StackNavigator'
import AppNavigator from './src/routes/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    // <AppContextProvider>
      <NavigationContainer>
        <AppNavigator/>
        </NavigationContainer>
    // {/* </AppContextProvider> */}
    // <Wellcome/>
  )
}

export default App
