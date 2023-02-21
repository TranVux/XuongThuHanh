import React from 'react'
import { View } from 'react-native'
import { AppContextProvider } from './src/utils/AppContext'
import FavouriteEmpty from './src/views/FavouriteEmpty'
import Login from './src/views/Login'

const App = () => {
  return (
    <View>
      <FavouriteEmpty/>
    </View>
  )
}

export default App
