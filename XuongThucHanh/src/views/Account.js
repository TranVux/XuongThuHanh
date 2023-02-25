import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native'
import React from 'react'

const Account = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.back} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/back.png')} />
            <Text style={styles.sign}>Account</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({})