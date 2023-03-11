import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import FastImage from 'react-native-fast-image'

const Orders = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.orders}>
            <TouchableOpacity onPress={() => {navigation.navigate('AccountScreen')}}><FastImage style={styles.Arrow_ic} source={require('../../assets/images/Arrow-ic.png')}></FastImage></TouchableOpacity>
            <View style={styles.title} >
                <Text style={styles.title_text}>Orders</Text>
            </View>
            <View style={styles.tab}>
                <Text style={styles.tab_ongoing}>Ongoing</Text>
                <Text style={styles.tab_history}>History</Text>
            </View>
            <FastImage style={styles.background} source={require('../../assets/images/Shadow_inject.png')}></FastImage>
            <Text style={styles.content}>There is n ongoing order right now. You can order from home</Text>
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    orders: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    Arrow_ic: {
        width: 8.49,
        height: 14
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_text: {
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 28.8,
        color: '#FF5E00'

    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 28
    },
    tab_ongoing: {
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: '#FF5E00'
    },
    tab_history: {
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: '#804F1E'
    },
    background: {
        width: 327.32,
        height: 335.79,
        marginHorizontal: 4,
        marginTop: 87
    },
    content: {
        marginHorizontal: 12,
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.2,
        color: '#804F1E',
        textAlign: 'center',
        paddingHorizontal: 32,
        marginTop: 17.21
    },

})