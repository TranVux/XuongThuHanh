import { } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Shop = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.gps} source={require('../../assets/images/address.png')} />
                <Text style={styles.txtHead}>Lungangen</Text>
            </View>
            <TextInput style={styles.textInput}>

            </TextInput>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10
    },
    header: {
        marginTop: 32,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtHead: {
        marginStart: 8.62,
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '700',
        color: '#FF5E00'
    },
    textInput: {
        marginTop: 18,
        backgroundColor: '#F3F3F3'
    },
})      