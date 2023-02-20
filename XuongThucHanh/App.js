import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/routes/AppNavigator'
import { AppContextProvider } from './src/utils/AppContext'

const App = () => {
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  )
}

export default App
