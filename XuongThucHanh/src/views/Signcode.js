import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signcode = () => {
  return (
    <View style={styles.container}>
            <TouchableOpacity><Image style={{ marginStart: 4, marginTop: 15, width: 8.5, height: 14 }} source={require('../../assets/images/Arrow.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Sign Up</Text>
            <View style={{ marginBottom: 81, alignItems: 'center' }}>
                <Image style={styles.img} source={require('../../assets/images/Group7037.png')} />
            </View>
            <Text style={styles.titlecontent}>Enter Verification Code</Text>
            <Text style={styles.text} numberOfLines={2}>We have sent SMS to:
            {'\n'}046 XXX XX XX</Text>
            <View style={{height:100}}></View>
            <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]}>
                <Text style={[{ color: '#ffffff' }, styles.textButton]}>Next</Text>
            </Pressable>
        </View>
    
  )
}

export default Signcode

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
        marginTop: 16
    },
    titlecontent: {
        color: '#7F4E1D',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        marginTop: 33
    }
})