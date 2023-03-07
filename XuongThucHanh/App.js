import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/routes/AppNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'

import { enableFreeze } from 'react-native-screens';
enableFreeze(true);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
      <AppNavigator />
    </Provider>
  )
}

export default App
