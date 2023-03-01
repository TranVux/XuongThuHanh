import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const OrderFailedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.image} source={require('../../assets/images/img_order_faled.png')} />
            </View>
            <Text style={styles.title}>Oops! Order Failed!</Text>
            <Text style={styles.content}>Something went terribly wrong</Text>
            <Pressable style={styles.buttonTrack}>
                <Text style={styles.textButton}>Try Again</Text>
            </Pressable>
            <Pressable style={styles.buttonBackHome}>
                <Text style={[styles.textButton, { color: '#FF5E00' }]}>Back Home</Text>
            </Pressable>
        </View>
    )
}

export default OrderFailedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    },
    image: {
        width: 306.6,
        height: 281.48,
        marginTop: 93,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
        color: '#6D3805',
        marginTop: 69,
    },
    content: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
        textAlign: 'center',
        color: '#6D3805',
        marginTop: 11,
    },
    buttonTrack: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF5E00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
        borderRadius: 25
    },
    textButton: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',

    },
    buttonBackHome: {
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#FF5E00',
        borderRadius: 25
    },
})