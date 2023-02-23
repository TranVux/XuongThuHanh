import React from 'react'
import { View } from 'react-native'
import { AppContextProvider } from './src/utils/AppContext'
import ChangePass from './src/Views/ChangePass'
import EditProfile from './src/Views/EditProfile'
import Orders from './src/Views/Orders'
import Profile from './src/Views/Profile'
import ToggleButton from './src/Views/ToggleButton'

const App = () => {
  return (
    <View>
      <ChangePass />
    </View>
  )
}

export default App
