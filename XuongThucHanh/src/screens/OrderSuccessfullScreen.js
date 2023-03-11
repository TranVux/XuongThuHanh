import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, {useContext} from 'react'
import FastImage from 'react-native-fast-image'

const OrderSuccessfullScreen = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FastImage style={styles.image} source={require('../../assets/images/img_order_success.png')} />
            </View>
            <Text style={styles.title}>Your Order Has Been Accepted</Text>
            <Text style={styles.content}>We’ve accepted your order, and we’re {'\n'}getting it ready.</Text>
            <Pressable onPress={() => {navigation.navigate('OnGoings')}} style={styles.buttonTrack}>
                <Text style={styles.textButton}>Track Order</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('BottomNavigator')}}  style={styles.buttonBackHome}>
                <Text style={[styles.textButton, { color: '#FF5E00' }]}>Back Home</Text>
            </Pressable>
        </View>
    )
}

export default OrderSuccessfullScreen

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