import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartScreen from './src/views/CartScreen'
import ItemScreen from './src/views/ItemScreen'
import OrderFailedScreen from './src/views/OrderFailedScreen'
import OrderSuccessfullScreen from './src/views/OrderSuccessfullScreen'

const App = () => {
  return (
    <OrderSuccessfullScreen/>
  )
}

export default App

const styles = StyleSheet.create({})
