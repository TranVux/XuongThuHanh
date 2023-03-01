import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import TabLayout from 'react-native-simple-tablayout';
import OnGoing from './OnGoing';

const { width } = Dimensions.get('window');

const Screen1 = (props) => {
 return (
  <OnGoing style={{ width }} />
 )
}
const Screen2 = (props) => {
 return (
  <View style={{flex : 1,alignItems:'center',width,backgroundColor:props.color,justifyContent:'center'}}>
      <Text>History</Text>
    </View>
 )
}
const App = () => {

 // tab name passed as array of string
 const tabName = ["OnGoing", "History"]

 //tab screen passed as array of screens 
 const data = [
  <Screen1 />,
  <Screen2 />,
 ];

 return (
  <View style={styles.container}>
   <Image style={styles.imgBack}
    source={require('../../assets/images/back.png')} />
   <Text style={styles.title}>Orders</Text>
   <TabLayout
    screens={data}
    tabName={tabName}
    indicatorHeight={2}
    indicatorRadius={3}
    titleFontSize={20}
    titleColor="#FF5E00"
    tabHeight={50}
    lineHeight={4}
    tabColor="white"
    tabPressedColor="white"
    indicatorColor="#FF5E00"
   />
  </View>
 )
}
export default App;
const styles = StyleSheet.create({
 title: {
  fontSize: 24,
  fontWeight: '700',
  color: '#FF5E00',
  lineHeight: 28.8,
  marginTop: 5,
  textAlign: 'center',
  marginBottom: 28
 },
 imgBack: {
  marginTop: 48
 },
 container: {
  flex: 1,
  backgroundColor: '#ffffff',
  padding: 20
 }
})