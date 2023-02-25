import { StyleSheet, Text, View, Image, Button, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
// import CounterInput from "react-native-counter-input";
// import RNBounceable from '@freakycoder/react-native-bounceable';
const Mango = () => {
    return (
        // <SafeAreaView>
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
            </View>
            <Pressable style={styles.add}>
                <Text style={styles.txtAdd}>Add to cart</Text>
            </Pressable>
            <Text style={styles.line}>──────────────────────────────────────</Text>
            <Text style={styles.ad}>You may also need</Text>
            {/* test scroll */}
            <Text style={styles.test}>“Trước khi khởi hành hôm nay, phi hành đoàn xác nhận tôi đã đặt suất ăn VGML (đồ ăn chay) và bữa sáng của tôi là một quả chuối. Tuy nhiên, tôi lại nghĩ ý cô ấy là bữa sáng bao gồm quả chuối”, một tài khoản có tên Kris_Chari viết trên diễn đàn hàng không FlyerTalk hôm 21/2.
                “Khi cô ấy mang quả chuối đến sau khi máy bay cất cánh, tôi nghĩ đó chỉ là một món khai vị không mấy ấn tượng. Dù vậy, thực tế đây là toàn bộ bữa ăn”, Kris_Chari viết thêm. “Quả chuối này thực sự ngon - một trong những quả ngon nhất tôi đã ăn gần đây - nhưng nó làm đồ ăn vặt thì có lẽ phù hợp hơn”.
                Đáng ngạc nhiên hơn với vị khách hàng, phi hành đoàn mang ra cả đũa và thìa cùng với quả chuối. Theo người này, bữa trưa trên máy bay cũng không ngon miệng hơn là mấy.
                “Bữa trưa là mì spaghetti gần như không được nêm gia vị. Các bữa ăn khác của tôi trên các chuyến bay của Japan Airlines cũng tệ, nhưng không đến mức đó. Dù vậy, phi hành đoàn khá đáng yêu khi phục vụ chuối cùng với đũa”, hành khách chia sẻ.
                Theo các nhà khoa học, sự kết hợp của các điều kiện trên máy bay - độ ẩm thấp, áp suất thấp và độ cao lớn - khiến khứu giác và vị giác của con người phần nào bớt nhạy bén. Do đó, nhiều người cảm thấy thức ăn trên máy bay nhạt nhẽo.
                Tuy nhiên, cũng từng có nhiều trường hợp hành khách ăn chay được phục vụ bữa ăn đúng như mong đợi. Hồi năm 2022, một hành khách cho biết đã được Air Canada phục vụ một chai nước khi yêu cầu đồ ăn chay.
            </Text>

        </ScrollView>
        // </SafeAreaView>

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
    // counter:{
    //     flexDirection: 'row'
    // },
    grCount: {
        flexDirection: 'row',
    },
    count: {
        padding: 5,
        marginStart: 13,
        shadowOpacity: 5,
        width: 286,
        marginTop: 18,
        borderRadius: 40,
        flexDirection: 'row',
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
    txtPress: {
        fontFamily: 'Klarna Text',
        fontSize: 24,
        fontWeight: '400',
        color: '#6D3805'
    },
    fav: {
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginStart: 45
    },
    add: {
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
})