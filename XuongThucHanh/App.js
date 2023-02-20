import React from 'react'
import { View } from 'react-native'
import { AppContextProvider } from './src/utils/AppContext'
import Login from './src/views/Login'

const App = () => {
  return (
    <View>
      <Login />
    </View>
  )
}

export default App
