import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
const OnGoing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <View style={styles.timeLeft}>
          <FastImage style={styles.imgCalender}
            source={require('../../assets/images/calender.png')} />
          <Text style={styles.TextCalender}>March 5, 2019</Text>
        </View>
        <Text style={styles.TextTime}>6:30 pm</Text>
      </View>
      <View style={styles.delivery}>
        <View style={styles.deliveryTime}>
          <FastImage style={styles.imgCheck}
            source={require('../../assets/images/icCheck_active.png')} />
          <View style={styles.lineCheck}></View>
          <FastImage style={styles.imgCheck}
            source={require('../../assets/images/icCheck_active.png')} />
          <View style={styles.lineCheck}></View>
          <FastImage style={styles.imgCheck}
            source={require('../../assets/images/icCheck.png')} />
        </View>
        <View style={styles.deliveryContent}>
          <View style={styles.receive}>
            <FastImage style={styles.imgReceive}
              source={require('../../assets/images/receive.png')} />
            <Text style={styles.TextReceive}>We are packin your items...</Text>
          </View>
          <View style={styles.transport}>
            <FastImage style={styles.imgTransport}
              source={require('../../assets/images/transport.png')} />
            <Text style={styles.TextTransport}>Your order is delivering to your location....</Text>
          </View>
          <View style={styles.ship}>
            <FastImage style={styles.imgShip}
              source={require('../../assets/images/ship.png')} />
            <Text style={styles.TextShip}>Your order is received..</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default OnGoing

const styles = StyleSheet.create({
  TextShip: {
    fontWeight: '400',
    fontSize: 16,
    color: '#6D3805',
    lineHeight: 32,
    letterSpacing: 0.98,
    marginLeft: 21
  },
  ship: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80
  },
  TextTransport: {
    width: 220,
    height: 62,
    fontWeight: '400',
    fontSize: 16,
    color: '#6D3805',
    lineHeight: 32,
    letterSpacing: 0.98,
    marginLeft: 10
  },
  transport: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 70
  },
  TextReceive: {
    fontWeight: '400',
    fontSize: 16,
    color: '#6D3805',
    lineHeight: 32,
    letterSpacing: 0.98,
    marginLeft: 21
  },
  receive: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40
  },
  deliveryContent: {
    paddingLeft: 30
  },
  lineCheck: {
    width: 1,
    height: 150,
    alignItems: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#C6C6C6',
  },
  deliveryTime: {
    marginTop: 50
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  TextCalender: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6D3805',
    lineHeight: 21.6,
    letterSpacing: 1.28,
    paddingLeft: 6
  },
  timeLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  TextTime: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F37A20',
    lineHeight: 32,
    letterSpacing: 0.98
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48
  },
  line: {
    width: 80,
    height: 2,
    backgroundColor: '#FF5E00',
    marginTop: 8
  },
  TextHistory: {
    fontSize: 20,
    fontWeight: '400',
    color: '#805226',
    lineHeight: 24,
    letterSpacing: 0.1
  },
  TextOnGoing: {
    fontSize: 20,
    fontWeight: '400',
    color: '#F37A20',
    lineHeight: 24,
    letterSpacing: 0.1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})