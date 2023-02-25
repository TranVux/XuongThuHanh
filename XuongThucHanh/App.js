import React from 'react'
import { View } from 'react-native'
import { AppContextProvider } from './src/utils/AppContext'
import MyCard from './src/Screen/card/MyCard'

import NewCard from './src/Screen/card/NewCard'
const App = () => {
  return (
    // <AppContextProvider>
    //   {/* AppNavigation */}
    // </AppContextProvider>

    <NewCard />


  )
}

export default App
