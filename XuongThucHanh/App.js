import React from 'react'
import { StatusBar } from 'react-native'
import { Colors } from './assets/Colors'
import AppNavigator from './src/routes/AppNavigator'
import { AppContextProvider } from './src/utils/AppContext'

const App = () => {
  return (
    <AppContextProvider>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
      <AppNavigator />
    </AppContextProvider>
  )
}

export default App
