import React from 'react'
import { View } from 'react-native'
import { AppContextProvider } from './src/utils/AppContext'
import Account from './src/views/Account'
import FavouriteEmpty from './src/views/FavouriteEmpty'
import Login from './src/views/Login'
import Mango from './src/views/Mango'
import Favourite from './src/views/Favourite'


const App = () => {
  return (
    <View>
      <Mango />
      {/* <Favourite /> */}
    </View>
  )
}

export default App
