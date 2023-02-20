import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'
import { Colors } from '../constants/Color'

const CategoryItem = ({ data, onPress, style }) => {
    return (
        <SafeAreaView style={[styles.containerStyle, { ...style }]}>
            <View style={[{ backgroundColor: data.color }, styles.imageContainer]}>
                <FastImage
                    source={{ uri: data.image }}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{ width: 65, aspectRatio: 1, }} />
            </View>
            <Text style={styles.name}>{data.name}</Text>
        </SafeAreaView>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    containerStyle: {
        margin: 10,
        // width: 100,
        // height: 134,
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageContainer: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: Colors.text,
        fontWeight: "400",
        fontSize: 15,
        marginTop: 5
    }
})