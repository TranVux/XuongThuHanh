import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const ItemCartFavorite = (props) => {
    const { data } = props;

    const [count, setCount] = useState(1);
    const clickCong = () => {
        setCount(count + 1);
    }
    const clickTru = () => {

        if (count <= 1) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <View style={styles.container}>
            {/* Item 1 */}
            <View style={[styles.header]}>
                <Image style={[styles.image]} resizeMode='cover' source={{ uri: data.image }} />
                <View style={{ marginStart: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.groupButton}>
                        <View style={[styles.button]}>
                            <Icon onPress={clickCong} name="plus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
                            <Text style={[styles.price]}>{count}</Text>
                            <Icon onPress={clickTru} name="minus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
                        </View>
                        <Text style={[styles.price, { marginStart: 50 }]}>${data.price} kg</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemCartFavorite

const styles = StyleSheet.create({
    groupButton: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
    },
    icon: {
        width: 8.49,
        height: 14,
        marginStart: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28.8,
        color: '#FF5E00',
        textAlign: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.6,
        color: '#6D3805',
    },
    price: {
        fontSize: 18,
        color: '#6D3805',
        textAlign: 'center',
        lineHeight: 25
    },
    add: {
        width: 25,
        height: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 12.5,

    },
    image: {
        width: 75,
        height: 65,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        borderColor: '#6D380517',
        paddingHorizontal: 20

    },
    button: {
        width: 98,
        height: 29.65,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        marginStart: 20
    },
    buttonCheck: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 20,
        height: 50,

        backgroundColor: '#FF5E00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    textCheck: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.6,
        color: 'white'
    }
})

