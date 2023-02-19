import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.back} source={require('../img/back.png')} />
			<Text style={styles.sign}>Sign In</Text>
			<Image style={styles.login} source={require('../img/login.png')} />
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	container:{
		padding: 16
	},
	back:{
		marginStart: 4,
		marginTop: 10.5
	},
	sign:{
		textAlign: 'center',
		fontFamily: 'Klarna Text',
		fontSize: 24,
		fontWeight: '700',
		color: '#FF5E00'
	},
})