import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const ItemScreen = () => {
  return (
    <View style={styles.container}>
            <Image style={styles.icon} source={require('../images/ic_back.png')} />
            <Text style={styles.title}>Cart</Text>
            
            {/* Item 1 */}
            <View style = {[styles.header]}>
                <Image style={styles.image} resizeMode = 'cover' source={require('../images/img_apple.png')} />
                <View style={{marginStart: 20, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={styles.name}>Red Apple</Text>
                    <View style = {styles.groupButton}>
                        <View style = {[styles.button]}>
                            <Text style={[styles.price, styles.add]}>-</Text>
                            <Text style={[styles.price,]}>2</Text>
                            <Text style={[styles.price, styles.add]}>+</Text>
                        </View>
                        <Text style={[styles.price,{ marginStart: 50}]}>$4,99 kg</Text>
                    </View>
                </View>
            </View>

            {/* Item 2 */}
            <View style = {[styles.header]}>
                <Image style={styles.image} resizeMode = 'cover' source={require('../images/img_banana.png')} />
                <View style={{marginStart: 20, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={styles.name}>Orginal Banana</Text>
                    <View style = {styles.groupButton}>
                        <View style = {[styles.button]}>
                            <Text style={[styles.price, styles.add]}>-</Text>
                            <Text style={[styles.price,]}>2</Text>
                            <Text style={[styles.price, styles.add]}>+</Text>
                        </View>
                        <Text style={[styles.price,{ marginStart: 50}]}>$4,99 kg</Text>
                    </View>
                </View>
            </View>

            {/* Item 3 */}
            <View style = {[styles.header]}>
                <Image style={styles.image} resizeMode = 'cover' source={require('../images/img_avocado.png')} />
                <View style={{marginStart: 20, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={styles.name}>Avocado Bowl</Text>
                    <View style = {styles.groupButton}>
                        <View style = {[styles.button]}>
                            <Text style={[styles.price, styles.add]}>-</Text>
                            <Text style={[styles.price,]}>2</Text>
                            <Text style={[styles.price, styles.add]}>+</Text>
                        </View>
                        <Text style={[styles.price,{ marginStart: 50}]}>$4,99 kg</Text>
                    </View>
                </View>
            </View>

            {/* Item 4 */}
            <View style = {[styles.header]}>
                <Image style={styles.image} resizeMode = 'cover' source={require('../images/img_salmon.png')} />
                <View style={{marginStart: 20, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={styles.name}>Salmon</Text>
                    <View style = {styles.groupButton}>
                        <View style = {[styles.button]}>
                            <Text style={[styles.price, styles.add]}>-</Text>
                            <Text style={[styles.price,]}>2</Text>
                            <Text style={[styles.price, styles.add]}>+</Text>
                        </View>
                        <Text style={[styles.price,{ marginStart: 50}]}>$4,99 kg</Text>
                    </View>
                </View>
            </View>

            <Pressable style = {styles.buttonCheck}>
            <Text style = {styles.textCheck}>CheckOut</Text>
            </Pressable>
        </View>
  )
}

export default ItemScreen

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
        fontWeight: '400',
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
    } ,
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