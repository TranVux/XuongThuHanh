import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const Signup = (props) => {
    const { navigation } = props;
    const back = () => {
        navigation.goBack();
    }
    const signpass=()=>{
        navigation.navigate('Signpass');
    }
    const login=()=>{
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back}><Image style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <View style={{ marginBottom: 81, alignItems: 'center' }}>
                <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
            </View>
            <View>
                <TextInput style={styles.input} placeholder='Name Surname'></TextInput>
                <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
            </View>
            <Text style={styles.text} numberOfLines={2}>We need to verify you. We will send you a one time verification code. </Text>
            <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]} onPress={signpass}>
                <Text style={[{ color: '#ffffff' }, styles.textButton]}>Next</Text>
            </Pressable>
            <View style={styles.view}>
                <Text style={{ color: '#7F4E1D',fontSize:16,lineHeight:19 }}>Already have an account? </Text>
                <TouchableOpacity onPress={login}><Text style={{ color: '#FF5E00',fontSize:16,lineHeight:19 }}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingEnd: 16,

    },
    img: {
        height: 270
    }
    ,
    title: {
        color: '#FF5E00',
        fontSize: 24,
        lineHeight: 41,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    text: {
        color: '#7F4E1D',
        fontSize: 16,
        lineHeight: 19,
        width: 325,
        height: 53,
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 39,
        marginTop: 10
    },
    textButton: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    button: {
        height: 50,
        borderRadius: 30,
        borderColor: '#FF5E00',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },
    input: {
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginTop: 16,
        paddingStart:27
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})