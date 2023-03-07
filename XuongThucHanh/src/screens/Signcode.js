import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';

const Signcode = (props) => {
    const { navigation } = props;
    const back = () => {
        navigation.goBack();
    }
    const login = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back}><FastImage style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 81, alignItems: 'center' }}>
                    <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
                </View>
                <Text style={styles.titlecontent}>Enter Verification Code</Text>
                <Text style={styles.text} numberOfLines={2}>We have sent SMS to:
                    {'\n'}046 XXX XX XX</Text>
                <View style={styles.viewcode}>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                    <TextInput keyboardType='phone-pad' maxLength={1} style={styles.textinput}></TextInput>
                </View>
                <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]} onPress={login} >
                    <Text style={[{ color: '#ffffff' }, styles.textButton]}>Sign Up</Text>
                </Pressable>
            </ScrollView>
        </View>

    )
}

export default Signcode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
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
        fontSize: 18,
        lineHeight: 22,
        width: 325,
        height: 53,
        marginBottom: 39,
        marginTop: 13
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
        marginTop: 72,
        marginBottom: 72
    },
    titlecontent: {
        color: '#7F4E1D',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    viewcode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textinput: {
        borderBottomWidth: 3,
        borderColor: '#7F4E1D',
        width: 50,
        textAlign: 'center',
        fontSize: 16
    }
})