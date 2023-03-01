import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const FavouriteEmpty = () => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.back} source={require('../../assets/images/back.png')} />
            <Text style={styles.sign}>Favourite</Text>
            <FastImage style={styles.favourite} source={require('../../assets/images/favourite.png')} />
            <Text style={styles.noti}>Your heart is empty</Text>
            <Text style={styles.start}>Start fall in love with some good {'\n'}goods </Text>
            <Pressable style={styles.button}>
                <Text style={styles.shop}>Start shopping</Text>
            </Pressable>
        </View>
    )
}

export default FavouriteEmpty

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: "#fff"
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
    favourite: {
        marginTop: 15
    },
    noti: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontSize: 20,
        fontWeight: '700',
        color: '#6D3805'
    },
    start: {
        marginTop: 8,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontSize: 16,
        fontWeight: '400',
        color: '#6D3805'
    },
    button: {
        marginTop: 81,
        backgroundColor: '#FF5E00',
        height: 50,
        borderRadius: 30
    },
    shop: {
        padding: 14,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})