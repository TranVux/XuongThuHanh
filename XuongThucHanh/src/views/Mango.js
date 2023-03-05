import { StyleSheet, Text, View, Image, Button, Pressable, TextInput, ScrollView, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { Component, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

// import CounterInput from "react-native-counter-input";
// import RNBounceable from '@freakycoder/react-native-bounceable';
// const DATA = [
//     {
//         id: '1',
//         name: 'Red Apple',
//         image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_apple.png?alt=media&token=d5723cae-0b4f-425e-8ca7-f8752edddca5',
//         price: '2.495',
//     },
//     {
//         id: '2',
//         name: 'Orginal Banana',
//         image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_banana.png?alt=media&token=0716d432-fb7a-4447-87e9-88959ea85ed9',
//         price: '2.995',
//     },
//     {
//         id: '3',
//         name: 'Avocado Bowl',
//         image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_avocado.png?alt=media&token=2351cadb-d381-4bfb-a322-a8507a79e8c1',
//         price: '24',
//     },
//     {
//         id: '4',
//         name: 'Salmon',
//         image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_salmon.png?alt=media&token=e7f25566-5d3f-4bf5-8ada-5d77790a3cca',
//         price: '25',
//     },

// ];

const DATA = [
    {
        id: '1',
        title: 'Strawberry',
        title_mini: '1kg',
        money: '$24.0',
        image: 'https://anhdep123.com/wp-content/uploads/2020/11/anh-qua-dau-tay-chan-thuc-nhat.jpg'
    },
    {
        id: '2',
        title: 'Avocado Bowl',
        title_mini: '1kg',
        money: '$24.0',
        image: 'https://anhdep123.com/wp-content/uploads/2021/03/hinh-anh-qua-bo-1.jpg'
    },
    {
        id: '3',
        title: 'Orginal Banana',
        title_mini: '1kg',
        money: '$24.0',
        image: 'https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-qua-chuoi-tieu.jpg'
    },
];


const Item = ({ DATA }) => (
    <TouchableOpacity onPress={() => console.log('Press item')}>
        <View style={styles.item}>
            <Image style={styles.img} source={{ uri: DATA.image }} />
            <Text style={styles.title}>{DATA.title}</Text>
            <Text style={styles.title_mini}>{DATA.title_mini}</Text>
            <View style={styles.btnadd}>
                <Text style={styles.txtdola}>{DATA.money}</Text>
                <TouchableHighlight onPress={() => console.log('Add product')}>
                    <Image style={styles.imgadd} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/add_green.png')} />
                </TouchableHighlight>
            </View>
        </View>
    </TouchableOpacity>
);

const Mango = (props) => {

    // const { data } = props;

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
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>
            <Image style={styles.back} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/back.png')} />
            <Image style={styles.cake} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/gr_cake.png')} />
            <Image style={styles.mango} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/mango.png')} />
            <Text style={styles.name}>Orinal Mango</Text>
            <View style={styles.cost}>
                <Text style={styles.dollar}>$3.00</Text>
                <Text style={styles.st}> /st</Text>
            </View>
            <Text style={styles.describe}>Golden Ripe Alphonsa mangoes delivered to your {'\n'}house in the most hygenic way ever... Best for eating {'\n'}plain but can also be made into shakes and cakes.</Text>
            {/* 
            <View style={styles.grCount}>
                <Pressable style={styles.count}>
                    <Pressable style={styles.press}>
                        <Image style={styles.imgPressM} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/press.png')} />
                    </Pressable>
                    <Text style={styles.num}>2</Text>
                    <Pressable style={styles.press}>
                        <Image style={styles.imgPressP} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/press.png')} />
                    </Pressable>
                </Pressable>
                <Image style={styles.fav} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/fav.png')} />
            </View> */}


            <View style={styles.groupButton}>
                <View style={[styles.button]}>
                    <Icon onPress={clickTru} name="minus" size={30} color="#6D3805" style={[styles.price, styles.add]} />
                    <Text style={[styles.price]}>{count}</Text>
                    <Icon onPress={clickCong} name="plus" size={30} color="#6D3805" style={[styles.price, styles.add]} />
                </View>
                <Image style={styles.fav} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/fav.png')} />
            </View>

            <Pressable style={styles.addTo}>
                <Text style={styles.txtAdd}>Add to cart</Text>
            </Pressable>
            <Text style={styles.line}>──────────────────────────────────────</Text>
            <Text style={styles.ad}>You may also need</Text>
          
            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <Item DATA={item} />}
                keyExtractor={item => item.id}
            />

        </ScrollView>
        
    )
}

export default Mango

const styles = StyleSheet.create({

    back: {
        marginStart: 20,
        marginTop: 32
    },
    cake: {
        marginTop: -70,
        marginLeft: -30,
        alignSelf: 'flex-end'
    },
    mango: {
        alignSelf: 'center'
    },
    cost: {
        flexDirection: 'row',
        padding: 6
    },
    name: {
        marginTop: 106,
        marginStart: 14,
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '700',
        color: '#6D3805'
    },
    dollar: {
        marginStart: 8,
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '400',
        color: '#6D3805'
    },
    st: {
        marginTop: 8,
        fontFamily: 'Klarna Text',
        fontSize: 16,
        fontWeight: '400',
        color: '#6D3805'
    },
    describe: {
        marginTop: 8,
        fontFamily: 'Klarna Text',
        fontSize: 14,
        fontWeight: '400',
        color: '#6D3805',
        alignSelf: 'center',
        width: 365,
        letterSpacing: 0.4
    },

    txtPress: {
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '400',
        color: '#6D3805'
    },
    fav: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginStart: 43
    },
    addTo: {
        marginHorizontal: 14,
        marginTop: 19,
        backgroundColor: '#FF5E00',
        height: 50,
        borderRadius: 30
    },
    txtAdd: {
        padding: 14,
        textAlign: 'center',
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    line: {
        alignSelf: 'center',
        color: '#E5E5E5'
    },
    ad: {
        marginStart: 18,
        marginTop: 50.5,
        fontFamily: 'Klarna Text',
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805'
    },
    test: {
        fontFamily: 'Klarna Text',
        fontSize: 22,
        fontWeight: '400',
        color: '#0000FF'
    },

    groupButton: {
        flexDirection: "row",
    },
    button: {
        marginTop: 18,
        shadowOpacity: 5,
        width: 286,
        height: 50,
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        marginStart: 15
    },
    add: {
        width: 40,
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 30
    },
    price: {
        marginTop: 5,
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '400',
        color: '#6D3805'
    },
    price: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 40,
        color: '#6D3805'
    },


    // counter:{
    //     flexDirection: 'row'
    // },
    grCount: {
        flexDirection: 'row',
    },
    count: {
        padding: 5,
        marginStart: 10,
        shadowOpacity: 5,
        width: 286,
        marginTop: 18,
        borderRadius: 40,
        justifyContent: 'space-between',
        backgroundColor: '#F4F4F4'
    },
    num: {
        marginTop: 5,
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '400',
        color: '#6D3805'
    },




    item: {
        shadowOffset: 10,
        height: 189,
        width: 150,
        backgroundColor: '#FFFFFF',
        padding: 16,
        margin: 16,
        marginBottom: 25,
        borderRadius: 15
    },
    img: {
        width: 75,
        height: 72.09,
        alignSelf: 'center'
    },
    title: {
        marginTop: 20,
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        fontSize: 15,
        color: '#6D3805'
    },
    title_mini: {
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 12,
        color: '#929292',
    },
    btnadd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 15
    },
    // imgadd:{
    //     marginBottom: 15
    // },
    txtdola: {
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        fontSize: 18,
        color: '#FF5E00'
    },
})

