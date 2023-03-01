import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

const Login1 = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.back} source={require('../../assets/images/back.png')} />
			<Text style={styles.sign}>Sign In</Text>
			<Image style={styles.login} source={require('../../assets/images/login.png')} />
			<Text style={styles.guide}>Enter your phone number and {'\n'}password to access your account</Text>
		</View>
	)
}

export default Login1

const styles = StyleSheet.create({
	container: {
		padding: 16
	},
	back: {
		marginStart: 4,
		marginTop: 10.5
	},
	sign: {
		textAlign: 'center',
		fontFamily: 'Klarna Text',
		fontSize: 24,
		fontWeight: '700',
		color: '#FF5E00'
	},
	login: {
		width: 347.28,
		height: 331.24
	},
	guide: {
		fontFamily: 'Klarna Text',
		fontSize: 18,
		fontWeight: '400',
		color: '#6D3805'
	},
})