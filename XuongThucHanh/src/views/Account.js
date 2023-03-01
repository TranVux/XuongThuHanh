import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

const Account = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.back} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/back.png')} />
            <Text style={styles.account}>Account</Text>

            <View style={styles.profile}>
                <Image style={styles.img} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/profile.png')} />
                <Text style={styles.txtprofile}>Profile</Text>
            </View>

            <View style={styles.order}>
                <Image style={styles.img} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/orders.png')} />
                <Text style={styles.txtorder}>Orders</Text>
            </View>

            <View style={styles.address}>
                <Image style={styles.img} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/address.png')} />
                <Text style={styles.txtaddress}>Address</Text>
            </View>

            <View style={styles.payment}>
                <Image style={styles.img} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/payment.png')} />
                <Text style={styles.txtpayment}>Payment</Text>
            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        padding: 18
    },
    back: {
        marginStart: 4,
        marginTop: 6.5
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