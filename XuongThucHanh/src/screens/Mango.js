import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

// import CounterInput from "react-native-counter-input";
// import RNBounceable from '@freakycoder/react-native-bounceable';

const DATA = [
    {
        id: '1',
        name: 'Red Apple',
        image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_apple.png?alt=media&token=d5723cae-0b4f-425e-8ca7-f8752edddca5',
        price: '2.495',
    },
    {
        id: '2',
        name: 'Orginal Banana',
        image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_banana.png?alt=media&token=0716d432-fb7a-4447-87e9-88959ea85ed9',
        price: '2.995',
    },
    {
        id: '3',
        name: 'Avocado Bowl',
        image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_avocado.png?alt=media&token=2351cadb-d381-4bfb-a322-a8507a79e8c1',
        price: '24',
    },
    {
        id: '4',
        name: 'Salmon',
        image: 'https://firebasestorage.googleapis.com/v0/b/appontap-b2bd1.appspot.com/o/img_salmon.png?alt=media&token=e7f25566-5d3f-4bf5-8ada-5d77790a3cca',
        price: '25',
    },

];

const Mango = (props) => {

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
        // <SafeAreaView>
        <ScrollView style={styles.scrollView} contentContainerStyle={{}}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Image style={styles.back} source={require('../../assets/images/back.png')} />
                <Image style={styles.cake} source={require('../../assets/images/gr_cake.png')} />
                <Image style={styles.mango} source={require('../../assets/images/mango.png')} />
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
                    <Image style={styles.fav} source={require('../../assets/images/fav.png')} />
                </View>

                <Pressable style={styles.addTo}>
                    <Text style={styles.txtAdd}>Add to cart</Text>
                </Pressable>
                <Text style={styles.line}>──────────────────────────────────────</Text>
                <Text style={styles.ad}>You may also need</Text>
                {/* test scroll */}
                {/* <Text style={styles.test}>“Trước khi khởi hành hôm nay, phi hành đoàn xác nhận tôi đã đặt suất ăn VGML (đồ ăn chay) và bữa sáng của tôi là một quả chuối. Tuy nhiên, tôi lại nghĩ ý cô ấy là bữa sáng bao gồm quả chuối”, một tài khoản có tên Kris_Chari viết trên diễn đàn hàng không FlyerTalk hôm 21/2.
                    “Khi cô ấy mang quả chuối đến sau khi máy bay cất cánh, tôi nghĩ đó chỉ là một món khai vị không mấy ấn tượng. Dù vậy, thực tế đây là toàn bộ bữa ăn”, Kris_Chari viết thêm. “Quả chuối này thực sự ngon - một trong những quả ngon nhất tôi đã ăn gần đây - nhưng nó làm đồ ăn vặt thì có lẽ phù hợp hơn”.
                    Đáng ngạc nhiên hơn với vị khách hàng, phi hành đoàn mang ra cả đũa và thìa cùng với quả chuối. Theo người này, bữa trưa trên máy bay cũng không ngon miệng hơn là mấy.
                    “Bữa trưa là mì spaghetti gần như không được nêm gia vị. Các bữa ăn khác của tôi trên các chuyến bay của Japan Airlines cũng tệ, nhưng không đến mức đó. Dù vậy, phi hành đoàn khá đáng yêu khi phục vụ chuối cùng với đũa”, hành khách chia sẻ.
                    Theo các nhà khoa học, sự kết hợp của các điều kiện trên máy bay - độ ẩm thấp, áp suất thấp và độ cao lớn - khiến khứu giác và vị giác của con người phần nào bớt nhạy bén. Do đó, nhiều người cảm thấy thức ăn trên máy bay nhạt nhẽo.
                    Tuy nhiên, cũng từng có nhiều trường hợp hành khách ăn chay được phục vụ bữa ăn đúng như mong đợi. Hồi năm 2022, một hành khách cho biết đã được Air Canada phục vụ một chai nước khi yêu cầu đồ ăn chay.
                </Text>

                <Text style={styles.test}>“Trước khi khởi hành hôm nay, phi hành đoàn xác nhận tôi đã đặt suất ăn VGML (đồ ăn chay) và bữa sáng của tôi là một quả chuối. Tuy nhiên, tôi lại nghĩ ý cô ấy là bữa sáng bao gồm quả chuối”, một tài khoản có tên Kris_Chari viết trên diễn đàn hàng không FlyerTalk hôm 21/2.
                    “Khi cô ấy mang quả chuối đến sau khi máy bay cất cánh, tôi nghĩ đó chỉ là một món khai vị không mấy ấn tượng. Dù vậy, thực tế đây là toàn bộ bữa ăn”, Kris_Chari viết thêm. “Quả chuối này thực sự ngon - một trong những quả ngon nhất tôi đã ăn gần đây - nhưng nó làm đồ ăn vặt thì có lẽ phù hợp hơn”.
                    Đáng ngạc nhiên hơn với vị khách hàng, phi hành đoàn mang ra cả đũa và thìa cùng với quả chuối. Theo người này, bữa trưa trên máy bay cũng không ngon miệng hơn là mấy.
                    “Bữa trưa là mì spaghetti gần như không được nêm gia vị. Các bữa ăn khác của tôi trên các chuyến bay của Japan Airlines cũng tệ, nhưng không đến mức đó. Dù vậy, phi hành đoàn khá đáng yêu khi phục vụ chuối cùng với đũa”, hành khách chia sẻ.
                    Theo các nhà khoa học, sự kết hợp của các điều kiện trên máy bay - độ ẩm thấp, áp suất thấp và độ cao lớn - khiến khứu giác và vị giác của con người phần nào bớt nhạy bén. Do đó, nhiều người cảm thấy thức ăn trên máy bay nhạt nhẽo.
                    Tuy nhiên, cũng từng có nhiều trường hợp hành khách ăn chay được phục vụ bữa ăn đúng như mong đợi. Hồi năm 2022, một hành khách cho biết đã được Air Canada phục vụ một chai nước khi yêu cầu đồ ăn chay.
                </Text> */}
            </View>
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
})

