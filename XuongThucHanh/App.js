import React from 'react'
import { View } from 'react-native'
import Login from './src/components/Login'
import { AppContextProvider } from './src/utils/AppContext'

const App = () => {
  return (
   <View>
      <Login/>
   </View>
  )
}

export default App
