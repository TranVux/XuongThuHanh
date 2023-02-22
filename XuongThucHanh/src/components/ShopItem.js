import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../constants/Color'

const ShopItem = ({ data, onPress = () => { } }) => {
    return (
        <Pressable style={styles.itemContainer} onPress={onPress}>
            <View>
                <Text style={[styles.text, { fontWeight: "700", marginBottom: 10 }]}>{data?.shopName}</Text>
                <Text style={styles.text}>{data?.distance} MI</Text>
            </View>
            <IconIonicons name='chevron-back' color={Colors.text} size={25} style={{ transform: [{ rotate: "180deg" }] }} />
        </Pressable>
    )
}

export default ShopItem

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.shopBackground
    },
    text: {
        color: Colors.text,
        fontWeight: "400",
        fontSize: 18
    }
})