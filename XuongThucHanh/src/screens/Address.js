import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const Address = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgBack} source={require('../../assets/images/back.png')} />
                <Image style={styles.imgAdd} source={require('../../assets/images/add.png')} />
            </View>
            <Text style={styles.title}>Address</Text>
            <View style={styles.social}>
                <View style={styles.content}>
                    <Image
                        style={styles.imgHome}
                        source={require('../../assets/images/icHome.png')} />
                    <View style={styles.information}>
                        <Text style={styles.textHome}>Home</Text>
                        <Text style={styles.textTime}>Lungangen 6, 41722</Text>
                    </View>
                </View>
                <Image style={styles.imgRight} source={require('../../assets/images/right.png')} />
            </View>
            <View style={styles.line}></View>

            <View style={styles.social}>
                <View style={styles.content}>
                    <Image
                        style={styles.imgHome}
                        source={require('../../assets/images/icBag.png')} />
                    <View style={styles.information}>
                        <Text style={styles.textHome}>Office</Text>
                        <Text style={styles.textTime}>Lungangen 6, 41722</Text>
                    </View>
                </View>
                <Image style={styles.imgRight} source={require('../../assets/images/right.png')} />
            </View>
            <View style={styles.line}></View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#AC8E71',
        marginTop: 28,
        marginBottom: 22
    },
    textTime: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.2,
        color: '#AC8E71',
        marginTop: 8
    },
    textHome: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.6,
        color: '#6D3805'
    },
    information: {
        paddingLeft: 8
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    social: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 28.8,
        color: '#FF5E00',
        marginTop: 5,
        textAlign: 'center',
        marginBottom: 68
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }
})