import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../constants/Color'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Collapsible from 'react-native-collapsible';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import ShopItem from '../components/ShopItem'
import { ShopList } from '../constants/DATA'


const PaymentScreen = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <Pressable>
                    <IconIonicons name='chevron-back' color={Colors.primaryColor} size={25} />
                </Pressable>
                <Text style={styles.textHeader}>Payment</Text>
                <View style={{ width: 25 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 20, backgroundColor: "#fff", paddingTop: 0 }}>
                <View style={styles.contentStyle}>

                    {/* Delivery Location */}
                    <View style={[styles.radiusContainer, { marginTop: 0, marginBottom: 20 }]}>
                        <View style={styles.headerLocation}>
                            <Text style={{ color: Colors.text, fontWeight: "700", fontSize: 18 }}>Delivery Location</Text>
                            <Pressable>
                                <Text style={{ color: Colors.primaryColor, fontWeight: "400", fontSize: 18 }}>Change</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <EntypoIcon name='location' size={30} color={Colors.primaryColor} style={{ marginEnd: 10 }} />
                            <Text numberOfLines={4} style={{ maxWidth: 230, color: Colors.text, fontSize: 14, fontWeight: "400" }}>Floor 4, Kartini Tower No 43 Lumajang, Jawa Timur</Text>
                        </View>
                    </View>
                    {/* end Delivery Location */}


                    {/* Expected date & Time */}
                    <View style={[styles.radiusContainer, { marginTop: 0, marginBottom: 20 }]}>
                        <Text style={{ color: Colors.text, fontWeight: "700", fontSize: 18, marginBottom: 13 }}>Expected date & Time</Text>

                        <View style={styles.selectDateContainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                <AntDesignIcon name='calendar' size={30} color={Colors.text} />
                                <Text style={{ color: Colors.placeholder, fontSize: 18, marginStart: 13 }}>Select Date</Text>
                            </View>
                            <IconIonicons name='chevron-back' color={Colors.text} size={25} style={{ transform: [{ rotate: "-90deg" }] }} />
                        </View>
                    </View>
                    {/* end Expected date & Time */}

                    {/* Pickup store */}
                    <View style={styles.pickUpStoreContainer}>
                        <Pressable style={styles.pickUpStoreHeader} onPress={handleCollapsed}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20, marginBottom: 10 }}>
                                <Text style={[styles.text, { fontSize: 22 }]}>In-Store Pick Up</Text>
                                <Text style={[styles.text, { fontSize: 18 }]}>FREE</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                                <Text style={[styles.text, { fontWeight: "400", fontSize: 18 }]}>Some Stores May Be Temporarily Unavalable.</Text>
                                <IconIonicons name='chevron-back' color={Colors.text} size={25} style={{ transform: [{ rotate: "-90deg" }] }} />
                            </View>
                        </Pressable>
                        <Collapsible collapsed={collapsed}>
                            <View>
                                <View style={styles.searchView}>
                                    <EntypoIcon style={styles.iconSearch} name='magnifying-glass' size={25} color={Colors.placeholder} />
                                    <TextInput style={styles.textInput} placeholder="Search For Town, Street, Zip Code..." placeholderTextColor={Colors.placeholder} cursorColor={Colors.text} />
                                </View>
                                <View style={styles.styleListShop}>
                                    {ShopList.map(item => (
                                        <ShopItem data={item} key={item.shopName} />
                                    ))}
                                </View>
                            </View>
                        </Collapsible>
                    </View>
                    {/* end Pickup store */}

                    {/* Itemes */}
                    <View style={styles.itemesContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                            <SimpleLineIcon name='handbag' color={Colors.text} size={35} />
                            <Text style={styles.itemesText}>See Itemes</Text>
                        </View>
                        <IconIonicons name='chevron-back' color={Colors.text} size={25} style={{ transform: [{ rotate: "-90deg" }] }} />
                    </View>
                    {/* end Itemes */}

                    {/* Payment Method */}
                    <View style={styles.radiusContainer}>
                        <Text style={styles.radiusContainerTitleText}>Payment Method</Text>
                        <View style={[styles.paymentMethod, { justifyContent: "space-between" }]}>
                            <View style={styles.paymentMethod}>
                                <Image source={require('../../assets/img/cost_img.png')} />
                                <Text style={{ color: Colors.text, fontWeight: "400", fontSize: 16, marginStart: 10 }}>Cash on delivery</Text>
                            </View>
                            <EntypoIcon name='check' size={20} color={Colors.green} />
                        </View>
                    </View>
                    {/* end Payment Method */}

                    {/* Order Sammery */}
                    <View style={[styles.radiusContainer, { padding: 0 }]}>
                        <View style={{ padding: 20, paddingBottom: 0 }}>
                            <Text style={styles.radiusContainerTitleText}>Order Sammery</Text>
                            <View style={[{ justifyContent: "space-between", }]}>
                                <View style={styles.subItem}>
                                    <Text style={styles.textMamery}>Subtotal</Text>
                                    <Text style={styles.textMamery}>$137.00</Text>
                                </View>
                                <View style={styles.subItem}>
                                    <Text style={styles.textMamery}>Tax</Text>
                                    <Text style={styles.textMamery}>$4.50</Text>
                                </View>
                                <View style={styles.subItem}>
                                    <Text style={styles.textMamery}>Delivery Price</Text>
                                    <Text style={styles.textMamery}>$5.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 2, backgroundColor: Colors.shopBorderColor }} />
                        <View style={{ paddingHorizontal: 20, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={[styles.radiusContainerTitleText,]}>Total:</Text>
                            <Text style={[styles.radiusContainerTitleText,]}>$146.50</Text>
                        </View>
                    </View>
                    {/* end Order Sammery */}
                </View>
                {/*  */}
                <Pressable style={styles.buttonCheckout}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>Checkout $146.50</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView >
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: "#fff",

        // for IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        // for android
        elevation: 2,
    },
    selectDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 6
    },
    textHeader: {
        color: Colors.primaryColor,
        fontWeight: "700",
        fontSize: 24
    },
    contentStyle: {
        marginTop: 25
    },
    text: {
        color: Colors.text,
        fontWeight: "700",
    },
    pickUpStoreHeader: {
    },
    searchView: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#fff",
        backgroundColor: "#F3F3F3",
        paddingStart: 50,
        flex: 1
    },
    iconSearch: {
        position: "absolute",
        start: 15,
        zIndex: 10,
        top: 13
    },
    styleListShop: {
        marginVertical: -1,
        marginTop: 10,
        borderWidth: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 7,
        borderColor: Colors.shopBorderColor,
        overflow: "hidden",
        backgroundColor: Colors.shopBorderColor
    },
    itemesContainer: {
        paddingHorizontal: 16,
        paddingVertical: 25,
        backgroundColor: Colors.shopBackground,
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25,
        borderWidth: 2,
        borderColor: Colors.shopBorderColor
    },
    itemesText: {
        marginStart: 10,
        color: Colors.text,
        fontWeight: "700",
        fontSize: 18
    },
    radiusContainerTitleText: {
        color: Colors.text,
        fontWeight: "700",
        fontSize: 18,
        marginBottom: 20
    },
    radiusContainer: {
        padding: 16,
        backgroundColor: Colors.shopBackground,
        borderRadius: 7,
        marginTop: 25,
        borderWidth: 2,
        borderColor: Colors.shopBorderColor
    },
    headerLocation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    paymentMethod: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textMamery: {
        fontSize: 18,
        fontWeight: "400",
        color: Colors.text
    },
    subItem: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    buttonCheckout: {
        width: "100%",
        backgroundColor: Colors.primaryColor,
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    }
})