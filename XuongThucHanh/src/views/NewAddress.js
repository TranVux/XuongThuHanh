import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const NewAddress = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgBack}
        source={require('../../assets/images/back.png')} />
      <Text style={styles.textNewAddress}>New Address</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Address Title"
          placeholderTextColor='#AC8E71' />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Name Surname"
          placeholderTextColor='#AC8E71' />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="City"
          placeholderTextColor='#AC8E71' />
        <Image
          style={styles.imgSpinner}
          source={require('../../assets/images/spinner.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Address"
          placeholderTextColor='#AC8E71' />
      </View>

      <View style={styles.add}>
        <Text style={styles.addText}>Add</Text>
      </View>


    </View>
  )
}

export default NewAddress

const styles = StyleSheet.create({
  addText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    letterSpacing: 0.17,
    color: '#ffffff',
  },
  add: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 112
  },
  imgSpinner: {
    position: 'absolute',
    right: 22,
    top: 22
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    paddingLeft: 27,
    marginBottom: 30,
    position: 'relative'
  },
  textNewAddress: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    lineHeight: 28.8,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 64
  },
  imgBack: {
    marginTop: 54
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  }
})
