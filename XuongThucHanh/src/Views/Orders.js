import { SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    
    <View style={styles.orders}>
             <TouchableOpacity><Image style={styles.Arrow_ic} source={require('../Assets/Images/Arrow-ic.png')}></Image></TouchableOpacity>
            <View style={styles.title} >
                <Text style={styles.title_text}>Orders</Text>
            </View>
            <View style={styles.tab}>
                <Text style={styles.tab_ongoing}>Ongoing</Text>
                <Text style={styles.tab_history}>History</Text>
            </View>
            
            <Image style={styles.background} source={require('../Assets/Images/Shadow_inject.png')}></Image>
            <Text style={styles.content}>There is n ongoing order right now. You can order from home</Text>
            
           
        
    </View>
        
    
  )
}

export default Orders

const styles = StyleSheet.create({
    orders:{
        
        marginStart:20,
        marginEnd:20,
        marginTop:10,
        flexDirection:'column',
        
    },
    Arrow_ic:{
        width:8.49,
        height:14
    },
    title:{
        justifyContent:'center',
        alignItems:'center'
    },
    title_text:{
        fontFamily:'Klarna Text',
        fontWeight:'700',
        fontSize:24,
        lineHeight:28.8,
        color:'#FF5E00'
        
    },
    tab:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:28
    },
    tab_ongoing:{
        fontFamily:'Klarna Text',
        fontWeight:'400',
        fontSize:20,
        lineHeight:24,
        color:'#FF5E00'
    },
    tab_history:{
        fontFamily:'Klarna Text',
        fontWeight:'400',
        fontSize:20,
        lineHeight:24,
        color:'#804F1E'
    },
    background:{
        width:327.32,
        height:335.79,
        marginHorizontal:4,
        marginTop:87
    },
    content:{
        marginHorizontal:12,
        fontFamily:'Klarna Text',
        fontWeight:'400',
        fontSize:16,
        lineHeight:19.2,
        color:'#804F1E',
        textAlign:'center',
        paddingHorizontal:32,
        marginTop:17.21
    },
   
})