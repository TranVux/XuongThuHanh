import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

const Login = (props) => {
    const { navigation } = props;
    const back = () => {
        navigation.goBack();
    }
    const signup=()=>{
        navigation.navigate('Signup');
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={back}><Image style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign In</Text>
            <View style={{ marginBottom: 46, alignItems: 'center' }}>
                <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
            </View>
            <Text style={styles.text} numberOfLines={2}>Enter your phone number and
                password to access your account</Text>
            <View>
                <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
                <TextInput style={styles.input} placeholder='Password'></TextInput>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center' ,flexDirection:'row'}}><TouchableOpacity><Text style={{ color: '#FF5E00' }}>Forgote Password</Text></TouchableOpacity></View>
            <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]}>
                <Text style={[{ color: '#ffffff' }, styles.textButton]}>Next</Text>
            </Pressable>
            <View style={styles.view}>
                <Text style={{ color: '#7F4E1D',fontSize:16,lineHeight:19 }}>Don’t have an account?</Text>
                <TouchableOpacity onPress={signup} ><Text style={{ color: '#FF5E00',fontSize:16,lineHeight:19 }}> Sign Up </Text></TouchableOpacity>
            </View>
        </View>

    )
}

export default Login

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
        fontSize: 18,
        lineHeight: 26,
        width: 325,
        height: 53,
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
        marginTop: 43
    },
    input: {
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginTop: 16
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 13,
        
    }
})