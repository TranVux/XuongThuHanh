import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const EditAddress = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgBack}
        source={require('../../assets/images/back.png')} />
      <Text style={styles.textNewAddress}>Edit Address</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Home"
          placeholderTextColor='#6D3805' />
        <Image
          style={styles.imgSpinner}
          source={require('../../assets/images/spinner.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="mati egh"
          placeholderTextColor='#6D3805' />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Goteborgy"
          placeholderTextColor='#6D3805' />
        <Image
          style={styles.imgSpinner}
          source={require('../../assets/images/spinner.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder="Lungangen 6, 41722"
          placeholderTextColor='#6D3805' />
      </View>

      <View style={styles.update}>
        <Text style={styles.textUpdate}>Update Address</Text>
      </View>


    </View>
  )
}

export default EditAddress

const styles = StyleSheet.create({
  textUpdate: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    letterSpacing: 0.17,
    color: '#ffffff',
  },
  update: {
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
