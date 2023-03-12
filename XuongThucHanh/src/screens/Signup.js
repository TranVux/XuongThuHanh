import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image';

const Signup = (props) => {
    const { navigation } = props;
    const back = () => {
        navigation.goBack();
    }
    const signpass = () => {
        navigation.navigate('Signpass');
    }
    const login = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back}>
                <FastImage style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 40, alignItems: 'center' }}>
                    <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Name Surname' placeholderTextColor={'#AC8E71'}></TextInput>
                    <View style={styles.inputNumber}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                            <Image source={require('../../assets/images/flag.png')} />
                            <Image style={{ marginLeft: 12, marginRight: 20 }} source={require('../../assets/images/spinner.png')} />
                        </TouchableOpacity>
                        <TextInput style={{fontSize:16}} keyboardType='phone-pad' placeholder='Phone Number' placeholderTextColor={'#AC8E71'}></TextInput>
                    </View>
                </View>
                <Text style={styles.text}>We need to verify you. We will send you a one time verification code. </Text>
                <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]} onPress={signpass}>
                    <Text style={[{ color: '#ffffff' }, styles.textButton]}>Next</Text>
                </Pressable>
                <View style={styles.view}>
                    <Text style={{ color: '#7F4E1D', fontSize: 16, lineHeight: 19 }}>Already have an account? </Text>
                    <TouchableOpacity onPress={login}><Text style={{ color: '#FF5E00', fontSize: 16, lineHeight: 19 }}>Login</Text></TouchableOpacity>
                </View>
            </ScrollView>
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
        marginStart: 20,
        marginEnd: 20,
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
        paddingStart: 27,
        fontSize:16
    },
    inputNumber: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginTop: 16,
        paddingStart: 12
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40
    }
})