import { StyleSheet, Text, View, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemCart from '../components/ItemCart';
import { SwipeListView } from 'react-native-swipe-list-view';

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



const CartScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="chevron-left" size={20} color="#FF7300" style={{ paddingLeft: 20 }} />
            </TouchableOpacity>
            <Text style={styles.title}>Cart</Text>

            {/* <FlatList
                data={DATA}
                renderItem={({ item }) => <ItemCart data={item} />}
                keyExtractor={item => item.id}
            /> */}

            <SwipeListView
                data={DATA}
                renderItem={({ item }) => <ItemCart data={item} />}
                keyExtractor={item => item.id}
                renderHiddenItem={(data, index) => (
                    <View style={styles.item}>
                        <View style={[styles.item, { width: 75, height: 100, backgroundColor: '#A42B32', justifyContent: 'center' }]}>
                            <TouchableOpacity onPress={() => {
                                Alert.alert('Delete', "Bạn có muốn xóa không?");
                            }}>
                                <Icon name="trash" size={35} color="#ffffff" style={{ flexDirection: 'row', justifyContent: 'flex-end' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                )}

                rightOpenValue={-75}
            />
            <Pressable onPress={()=> {navigation.navigate('PaymentScreen')}} style={styles.buttonCheck}>
                <Text style={styles.textCheck}>CheckOut</Text>
            </Pressable>


        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
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
        height: 56,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 15,
        width: '100%',
        height: 83.65,
        borderBottomWidth: 1,
        borderColor: '#6D380517',
        paddingHorizontal: 20

    },
    button: {
        width: 98,
        height: 29.65,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center', borderRadius: 30, marginStart: 20
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