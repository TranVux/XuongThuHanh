// import { StyleSheet, Text, View, Image, Pressable, FlatList, TouchableOpacity, Alert } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import ItemCart from './ItemCart';
// import { SwipeListView } from 'react-native-swipe-list-view';

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


// const CartScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Icon name="chevron-left" size={20} color="#FF7300" style={{ paddingLeft: 20 }} />
//             <Text style={styles.title}>Cart</Text>

//             {/* <FlatList
//                 data={DATA}
//                 renderItem={({ item }) => <ItemCart data={item} />}
//                 keyExtractor={item => item.id}
//             /> */}

//             <SwipeListView
//                 data={DATA}
//                 renderItem={({ item }) => <ItemCart data={item} />}
//                 keyExtractor={item => item.id}
//                 renderHiddenItem={(data, index) => (
//                     <View style={styles.item}>
//                         <View style={[styles.item, { width: 75, height: 100, backgroundColor: '#A42B32', justifyContent: 'center' }]}>
//                             <TouchableOpacity onPress={() => {
//                                 Alert.alert('Delete', "Bạn có muốn xóa không?");
//                             }}>
//                                 <Icon name="trash" size={35} color="#ffffff" style={{ flexDirection: 'row', justifyContent: 'flex-end' }} />
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                 )}
//                 rightOpenValue={-75}
//             />

//             <Pressable style={styles.buttonCheck}>
//                 <Text style={styles.textCheck}>CheckOut</Text>
//             </Pressable>
//         </View>



//     )
// }

// export default CartScreen

// const styles = StyleSheet.create({
//     item: {
//         flexDirection: 'row',
//         justifyContent: "flex-end",
//         alignItems: 'center',
//     },
//     // title: {
//     //     fontSize: 32,
//     // },
//     groupButton: {
//         flexDirection: "row",
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//         paddingTop: 30,
//     },
//     icon: {
//         width: 8.49,
//         height: 14,
//         marginStart: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: '700',
//         lineHeight: 28.8,
//         color: '#FF5E00',
//         textAlign: 'center'
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: '700',
//         lineHeight: 21.6,
//         color: '#6D3805',
//     },
//     price: {
//         fontSize: 18,
//         color: '#6D3805',
//         textAlign: 'center',
//         lineHeight: 25
//     },
//     add: {
//         width: 25,
//         height: 25,
//         backgroundColor: '#FFFFFF',
//         borderRadius: 12.5,

//     },
//     image: {
//         width: 75,
//         height: 56,
//     },
//     header: {
//         flexDirection: 'row',
//         paddingVertical: 15,
//         width: '100%',
//         height: 83.65,
//         borderBottomWidth: 1,
//         borderColor: '#6D380517',
//         paddingHorizontal: 20

//     },
//     button: {
//         width: 98,
//         height: 29.65,
//         backgroundColor: '#F4F4F4',
//         flexDirection: 'row',
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         borderRadius: 30, 
//         marginStart: 20
//     },
//     buttonCheck: {
//         position: 'absolute',
//         left: 16,
//         right: 16,
//         bottom: 20,
//         height: 50,
//         backgroundColor: '#FF5E00',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 25,
//     },
//     textCheck: {
//         fontSize: 18,
//         fontWeight: '700',
//         lineHeight: 21.6,
//         color: 'white'
//     }
// })

// {/* Item 1 */ }
// {/* <View style={[styles.header]}>
//                 <Image style={[styles.image, { width: 70, height: 70 }]} resizeMode='cover' source={require('../images/img_apple.png')} />
//                 <View style={{ marginStart: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
//                     <Text style={styles.name}>Red Apple</Text>
//                     <View style={styles.groupButton}>
//                         <View style={[styles.button]}>
//                             <Icon name="plus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                             <Text style={[styles.price,]}>2</Text>
//                             <Icon name="minus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                         </View>
//                         <Text style={[styles.price, { marginStart: 50 }]}>$4,99 kg</Text>
//                     </View>
//                 </View>
//             </View> */}

// {/* Item 2 */ }
// {/* <View style={[styles.header]}>
//                 <Image style={styles.image} resizeMode='cover' source={require('../images/img_banana.png')} />
//                 <View style={{ marginStart: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
//                     <Text style={styles.name}>Orginal Banana</Text>
//                     <View style={styles.groupButton}>
//                         <View style={[styles.button]}>
//                             <Icon name="plus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                             <Text style={[styles.price,]}>2</Text>
//                             <Icon name="minus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                         </View>
//                         <Text style={[styles.price, { marginStart: 50 }]}>$4,99 kg</Text>
//                     </View>
//                 </View>
//             </View> */}

// {/* Item 3 */ }
// {/* <View style={[styles.header]}>
//                 <Image style={styles.image} resizeMode='cover' source={require('../images/img_avocado.png')} />
//                 <View style={{ marginStart: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
//                     <Text style={styles.name}>Avocado Bowl</Text>
//                     <View style={styles.groupButton}>
//                         <View style={[styles.button]}>
//                             <Icon name="plus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                             <Text style={[styles.price,]}>2</Text>
//                             <Icon name="minus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                         </View>
//                         <Text style={[styles.price, { marginStart: 50 }]}>$4,99 kg</Text>
//                     </View>
//                 </View>
//             </View> */}

// {/* Item 4 */ }
// {/* <View style={[styles.header]}>
//                 <Image style={styles.image} resizeMode='cover' source={require('../images/img_salmon.png')} />
//                 <View style={{ marginStart: 20, flexDirection: 'column', justifyContent: 'space-around' }}>
//                     <Text style={styles.name}>Salmon</Text>
//                     <View style={styles.groupButton}>
//                         <View style={[styles.button]}>
//                             <Icon name="plus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                             <Text style={[styles.price,]}>2</Text>
//                             <Icon name="minus" size={10} color="#6D3805" style={[styles.price, styles.add]} />
//                         </View>
//                         <Text style={[styles.price, { marginStart: 50 }]}>$4,99 kg</Text>
//                     </View>
//                 </View>
//             </View> */}

import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
// import FastImage from 'react-native-fast-image'
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

const Favorite = () => {
    const [listData, setListData] = useState([
        { id: 0, nameProduct: 'Red Apple', numberProduct: '$4,99', unit: 'kg', avatar: require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/apple.png') },
        { id: 1, nameProduct: 'Salmon', numberProduct: '$50', unit: 'kg', avatar: require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/salmon.png') },
        { id: 2, nameProduct: 'Avocado Bowl', numberProduct: '$24', unit: 'st', avatar: require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/avocado.png') },
    ]);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
        closeRow(rowMap, rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight style={styles.rowFront}>
            <TouchableOpacity
                style={styles.container2}
                onPress={() => console.log('Press item')}>
                <View style={styles.item}>
                    <Image style={styles.imgProduct} source={data.item.avatar} />
                    <View style={styles.addCart}>
                        <Text style={styles.titleProduct}>{data.item.nameProduct}</Text>
                        <TouchableOpacity onPress={() => console.log('Add to cart')}>
                            <View style={styles.cart}>
                                <Image source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/cart.png')} />
                                <Text style={styles.txtaddCart}>Add to cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.money}>
                    <Text style={styles.txtmoney}>{data.item.numberProduct}</Text>
                    <Text style={[styles.txtmoney, { fontSize: 12 }, { marginLeft: -15 }, { paddingTop: 45 }]}> {data.item.unit}</Text>
                </View>
            </TouchableOpacity>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}>
                <Image style={styles.trash} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/trash.png')} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.viewIconTitle}>
                <Image source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/back.png')} />
                <Text style={styles.textTitle}>Favorite</Text>
            </View>

            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-72}
                disableRightSwipe={true}
            />
        </View>
    );
};

export default Favorite;
const styles = StyleSheet.create({
    container: {
        marginBottom: 150,
        backgroundColor: '#FFFFFF'
    },
    viewIconTitle: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 30,
    },

    textTitle: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        height: 29,
        lineHeight: 29,
        color: '#FF5E00',
        marginStart: 118,
        // letterSpacing: -0.165,
        textAlign: 'center',
        marginBottom: 16
    },

    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 98,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
    },

    backRightBtnRight: {
        backgroundColor: '#A42B32',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
    },
    container2: {
        width: '100%',
        height: 98,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#6D380517',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCart: {
        flexDirection: 'column',
        marginLeft: 16
    },
    cart: {
        flexDirection: 'row'
    },
    money: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    titleProduct: {
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        fontSize: 18,
        color: '#6D3805',
        marginBottom: 15
    },
    txtaddCart: {
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 14,
        color: '#FF5E00',
        marginLeft: 6.72
    },
    txtmoney: {
        paddingTop: 38,
        paddingRight: 16,
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 18,
        color: '#6D3805',
    },
    imgProduct: {
        width: 80,
        height: 60,
        borderRadius: 15
    },
});