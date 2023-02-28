import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

const Signpass = (props) => {
    const { navigation } = props;
    const back = () => {
        navigation.goBack();
    }
    const signcode = () => {
        navigation.navigate('Signcode');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back}><Image style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <View style={{ marginBottom: 71, alignItems: 'center' }}>
                <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
            </View>
            <Text style={styles.titlecontent}>Enter the password</Text>
            <Text style={styles.text} numberOfLines={2}>For the security & safety please choose a password</Text>
            <View>
                <View style={styles.inputView}>
                    {/* <Image source={require('../../assets/images/khoa.png')} /> */}
                    <TextInput autoComplete='password' style={styles.input} placeholder='Password'></TextInput>
                    {/* <Image source={require('../../assets/images/mat.png')} /> */}
                </View>
                <View style={styles.inputView} >
                    {/* <Image source={require('../../assets/images/khoa.png')} /> */}
                    <TextInput secureTextEntry={true} style={styles.input} placeholder='Confirm Password'></TextInput>
                    {/* <Image source={require('../../assets/images/mat.png')} /> */}
                </View>
            </View>
            <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]} onPress={signcode}>
                <Text style={[{ color: '#ffffff' }, styles.textButton]}>Next</Text>
            </Pressable>
        </View>
    )
}

export default Signpass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingEnd: 16,

    },
    img: {
        height: 270
    },
    title: {
        color: '#FF5E00',
        fontSize: 24,
        lineHeight: 41,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    ,
    titlecontent: {
        color: '#7F4E1D',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        marginTop: 33
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
        marginBottom: 16,
        marginTop: 12
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
        justifyContent: 'center'
    },
    input: {
        height: 48,
        width:'100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginBottom: 16,
        paddingStart: 27
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    inputView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})