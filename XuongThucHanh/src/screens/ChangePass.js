import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const ChangePass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <View style={styles.changepass}>
      <TouchableOpacity><Image style={styles.Arrow_ic} source={require('../../assets/images/Arrow-ic.png')} /></TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.title_text}>Change Password</Text>
      </View>
      <View style={[styles.passwordContainer, { marginTop: 51 }]}>
        <Image style={styles.lock} source={require('../../assets/images/lock.png')} />
        <TextInput
          style={styles.passwordInput}
          placeholder="Old Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
          <Text style={styles.toggleButtonText}>{showPassword ? <Image style={styles.eye} source={require('../../assets/images/show.png')} /> : <Image style={styles.eye} source={require('../../assets/images/hide.png')} />}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.passwordContainer, { marginTop: 43 }]}>
        <Image style={styles.lock} source={require('../../assets/images/lock.png')} />
        <TextInput
          style={styles.passwordInput}
          placeholder="New Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
          <Text style={styles.toggleButtonText}>{showPassword ? <Image style={styles.eye} source={require('../../assets/images/show.png')} /> : <Image style={styles.eye} source={require('../../assets/images/hide.png')} />}</Text>
        </TouchableOpacity>
      </View>


      <View style={[styles.passwordContainer, { marginTop: 8 }]}>
        <Image style={styles.lock} source={require('../../assets/images/lock.png')} />
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
          <Text style={styles.toggleButtonText}>{showPassword ? <Image style={styles.eye} source={require('../../assets/images/show.png')} /> : <Image style={styles.eye} source={require('../../assets/images/hide.png')} />}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button_confirm}>
        <Text style={styles.button_confirm_text}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_backSign}>
        <Text style={styles.button_backSign_text}>Back To Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
  changepass: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: "#fff",
    flex: 1
  },
  Arrow_ic: {
    width: 8.49,
    height: 14
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_text: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FF5E00'
  },

  lock: {
    width: 13,
    height: 17,
    marginVertical: 15,
    marginLeft: 12
  },

  button_confirm: {
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FF5E00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
  button_confirm_text: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#FFFFFF'
  },
  button_backSign: {
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FF5E00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  button_backSign_text: {
    ontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#FF5E00'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    marginBottom: 10,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    height: 48,
    marginLeft: -7,
    marginTop: 51,
    justifyContent: 'center'
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#AC8E71',
    marginLeft: 21
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  toggleButtonText: {
    width: 30,
    height: 30,
  },
  eye: {
    width: 24,
    height: 24,
    marginLeft: 10
  }
})