import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';


const Wellcome = (props) => {
    const { navigation } = props;
    const onclickup = () => {
        navigation.navigate('Signup');
    }
    const onclickin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <FastImage style={styles.img} source={require('../../assets/images/Illustration.png')} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={styles.title}>Realax and shop</Text>
                    <Text style={styles.text} numberOfLines={3}>Shop online and get grocories
                        delivered from stores to your home
                        in as fast as 1 hour .</Text>
                </View>
                <Pressable style={[styles.button, { backgroundColor: '#FF5E00' }]}>
                    <Text style={[{ color: '#ffffff' }, styles.textButton]} onPress={onclickup}>Sign up</Text>
                </Pressable>
                <Pressable style={[styles.button, { marginBottom: 72 }]}>
                    <Text style={[{ color: '#FF5E00' }, styles.textButton]} onPress={onclickin}>Sign in</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default Wellcome

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingEnd: 16
    },
    img: {
        height: 362,
        width: 330,
        marginTop: 37,
        marginStart: 23,
        marginEnd: 23
    }
    ,
    title: {
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
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 51
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
    }
})