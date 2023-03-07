import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

const Account = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <Image style={styles.back} source={require('../../assets/images/back.png')} />
                </Pressable>
                <Text style={styles.account}>Account</Text>
                <View style={{ width: 10 }} />
            </View>

            <Pressable style={styles.profile} onPress={() => { navigation.navigate("ProfileScreen") }}>
                <Image style={styles.img} source={require('../../assets/images/profile.png')} />
                <Text style={styles.txtprofile}>Profile</Text>
            </Pressable>

            <Pressable style={styles.order} onPress={() => { navigation.navigate("OrdersScreen") }}>
                <Image style={styles.img} source={require('../../assets/images/orders.png')} />
                <Text style={styles.txtorder}>Orders</Text>
            </Pressable>

            <Pressable style={styles.address} onPress={() => { navigation.navigate("AddressScreen") }}>
                <Image style={styles.img} source={require('../../assets/images/address.png')} />
                <Text style={styles.txtaddress}>Address</Text>
            </Pressable>

            <Pressable style={styles.payment} onPress={() => { navigation.navigate("PaymentScreen") }}>
                <Image style={styles.img} source={require('../../assets/images/payment.png')} />
                <Text style={styles.txtpayment}>Payment</Text>
            </Pressable>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        padding: 18,
        flex: 1,
        backgroundColor: "#fff"
    },
    back: {
    },
    account: {
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '700',
        color: '#FF5E00'
    },
    profile: {
        marginStart: 3,
        marginTop: 50,
        flexDirection: 'row'
    },
    txtprofile: {
        marginStart: 20,
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805'
    },
    order: {
        marginTop: 38,
        flexDirection: 'row'
    },
    txtorder: {
        marginStart: 16,
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805'
    },
    address: {
        marginStart: 3,
        marginTop: 33,
        flexDirection: 'row'
    },
    txtaddress: {
        marginStart: 19,
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805'
    },
    payment: {
        marginStart: -1,
        marginTop: 37,
        flexDirection: 'row'
    },
    txtpayment: {
        marginStart: 12,
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805'
    },

})