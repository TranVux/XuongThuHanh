import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../assets/Colors'

const ProductItem = ({ data, onPress, type, style }) => {
    // console.log(type === "product");

    return (
        <Pressable onPress={onPress} style={[styles.container, { ...style, padding: type === "product" ? 12 : 0 }]}>
            <FastImage
                style={[styles.image, { width: type === "product" ? 120 : "100%" }]}
                source={{
                    uri: data.image,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={type === "product" ? FastImage.resizeMode.contain : FastImage.resizeMode.cover} />
            {type === "product" &&
                <>
                    <Text style={[styles.textStyle, styles.textName]}>{data.name}</Text>
                    <Text style={[styles.textStyle, styles.textAmount]}>1kg,priceg</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>$ {data.price}</Text>
                        <Icon name='pluscircle' size={29} color={Colors.green} />
                    </View>
                </>
            }
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        // width: 150,
        margin: 10,
        backgroundColor: "#fff",
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
    image: {
        width: 120,
        aspectRatio: 1
    },
    priceContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textStyle: {
        alignSelf: "flex-start",
    },
    textName: {
        color: Colors.text,
        fontWeight: "700",
        fontSize: 20
    },
    textAmount: {
        color: Colors.gray,
        fontSize: 13,
        fontWeight: "400"
    },
    priceText: {
        color: Colors.primaryColor,
        fontSize: 18,
        fontWeight: "700"
    }
})