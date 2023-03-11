import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../assets/Colors';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../assets/Colors';
import DatePicker from 'react-native-modern-datepicker';
import Dialog from 'react-native-dialog';
import {Chip} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ShopItem from '../components/ShopItem';
import {ShopList} from '../constants/DATA';
import {TimeValue} from '../constants/TimeChoiceValue';
import FastImage from 'react-native-fast-image';

const PaymentScreen = (props) => {

    const {navigation} = props;

    const [collapsed, setCollapsed] = useState(true);
    const [datePicked, setDatePicked] = useState("Select Date");
    const [timePicked, setTimePicked] = useState("");
    const [dialogIsVisible, setDialogIsVisible] = useState(false);
    const [currentChipSellected, setCurrentChipSellected] = useState(-1);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSelectDate = date => {
    setDatePicked(date);
    setDialogIsVisible(false);
  };

  const handleChipSelected = (index, value) => {
    setCurrentChipSelected(index);
    setTimePicked(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{paddingHorizontal: 20}}>
          <IconIonicons
            name="chevron-back"
            color={Colors.primaryColor}
            size={25}
          />
        </Pressable>
        <Text style={styles.textHeader}>Payment</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
            paddingTop: 0,
          }}>
          <View style={styles.contentStyle}>
            {/* Delivery Location */}
            <View
              style={[
                styles.radiusContainer,
                {marginTop: 0, marginBottom: 20},
              ]}>
              <View style={styles.headerLocation}>
                <Text
                  style={{color: Colors.text, fontWeight: '700', fontSize: 18}}>
                  Delivery Location
                </Text>
                <Pressable>
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontWeight: '400',
                      fontSize: 18,
                    }}>
                    Change
                  </Text>
                </Pressable>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <EntypoIcon
                  name="location"
                  size={30}
                  color={Colors.primaryColor}
                  style={{marginEnd: 10}}
                />
                <Text
                  numberOfLines={4}
                  style={{
                    maxWidth: 230,
                    color: Colors.text,
                    fontSize: 14,
                    fontWeight: '400',
                  }}>
                  Floor 4, Kartini Tower No 43 Lumajang, Jawa Timur
                </Text>
              </View>
            </View>
            {/* end Delivery Location */}

            {/* Expected date & Time */}
            <View
              style={[
                styles.radiusContainer,
                {marginTop: 0, marginBottom: 20},
              ]}>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '700',
                  fontSize: 18,
                  marginBottom: 13,
                }}>
                Expected date & Time
              </Text>

              <Pressable
                style={styles.selectDateContainer}
                onPress={() => {
                  setDialogIsVisible(true);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <AntDesignIcon
                    name="calendar"
                    size={25}
                    color={Colors.text}
                  />
                  <Text
                    style={{
                      color:
                        datePicked !== 'Select Date'
                          ? Colors.text
                          : Colors.placeholder,
                      fontSize: 16,
                      marginStart: 10,
                    }}>
                    {datePicked}
                  </Text>
                </View>
                <IconIonicons
                  name="chevron-back"
                  color={Colors.text}
                  size={25}
                  style={{transform: [{rotate: '-90deg'}]}}
                />
              </Pressable>

              {/* Dialog date picker */}
              {/* <Dialog.Container
              visible={dialogIsVisible}
              onBackdropPress={() => {
                setDialogIsVisible(false);
              }}> */}
              {/* </Dialog.Container> */}

              <View style={styles.selectTimeContainer}>
                <Chip
                  selected={currentChipSelected === 0}
                  style={[styles.timeChoiceItem, {marginBottom: 20}]}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(0, TimeValue[0])}>
                  {TimeValue[0]}
                </Chip>

                <Chip
                  selected={currentChipSelected === 1}
                  style={[styles.timeChoiceItem, {marginBottom: 20}]}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(1, TimeValue[1])}>
                  {TimeValue[1]}
                </Chip>

                <Chip
                  selected={currentChipSelected === 2}
                  style={[styles.timeChoiceItem, {marginBottom: 20}]}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(2, TimeValue[2])}>
                  {TimeValue[2]}
                </Chip>

                <Chip
                  selected={currentChipSelected === 3}
                  style={styles.timeChoiceItem}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(3, TimeValue[3])}>
                  {TimeValue[3]}
                </Chip>

                <Chip
                  selected={currentChipSelected === 4}
                  style={styles.timeChoiceItem}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(4, TimeValue[4])}>
                  {TimeValue[4]}
                </Chip>

                <Chip
                  selected={currentChipSelected === 5}
                  style={styles.timeChoiceItem}
                  textStyle={{
                    color: Colors.text,
                    fontWeight: '400',
                    fontSize: 13,
                  }}
                  onPress={() => handleChipSelected(5, TimeValue[5])}>
                  {TimeValue[5]}
                </Chip>
              </View>
            </View>
            {/* end Expected date & Time */}

            {/* Pickup store */}
            <View style={styles.pickUpStoreContainer}>
              <Pressable
                style={styles.pickUpStoreHeader}
                onPress={handleCollapsed}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    marginBottom: 10,
                  }}>
                  <Text style={[styles.text, {fontSize: 22}]}>
                    In-Store Pick Up
                  </Text>
                  <Text style={[styles.text, {fontSize: 18}]}>FREE</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                  }}>
                  <Text
                    style={[styles.text, {fontWeight: '400', fontSize: 18}]}>
                    Some Stores May Be Temporarily Unavalable.
                  </Text>
                  <IconIonicons
                    name="chevron-back"
                    color={Colors.text}
                    size={25}
                    style={{transform: [{rotate: '-90deg'}]}}
                  />
                </View>
              </Pressable>
              <Collapsible collapsed={collapsed}>
                <View>
                  <View style={styles.searchView}>
                    <EntypoIcon
                      style={styles.iconSearch}
                      name="magnifying-glass"
                      size={25}
                      color={Colors.placeholder}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Search For Town, Street, Zip Code..."
                      placeholderTextColor={Colors.placeholder}
                      cursorColor={Colors.text}
                    />
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
            <Pressable
              style={styles.itemesContainer}
              onPress={() => {
                navigation.navigate('ItemScreen');
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <SimpleLineIcon name="handbag" color={Colors.text} size={35} />
                <Text style={styles.itemesText}>See Itemes</Text>
              </View>
              <IconIonicons
                name="chevron-back"
                color={Colors.text}
                size={25}
                style={{transform: [{rotate: '-90deg'}]}}
              />
            </Pressable>
            {/* end Itemes */}

            {/* Payment Method */}
            <View style={styles.radiusContainer}>
              <Text style={styles.radiusContainerTitleText}>
                Payment Method
              </Text>
              <View
                style={[
                  styles.paymentMethod,
                  {justifyContent: 'space-between'},
                ]}>
                <View style={styles.paymentMethod}>
                  <Image source={require('../../assets/images/cost_img.png')} />
                  <Text
                    style={{
                      color: Colors.text,
                      fontWeight: '400',
                      fontSize: 16,
                      marginStart: 10,
                    }}>
                    Cash on delivery
                  </Text>
                </View>
                <EntypoIcon name="check" size={20} color={Colors.green} />
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

export default PaymentScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',

    // for IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    // for android
    elevation: 2,
  },
  selectDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  selectTimeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  timeChoiceItem: {
    width: '31%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTimeChoiceItem: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '400',
  },
  textHeader: {
    fontWeight: '700',
    color: Colors.primaryColor,
    fontSize: 24,
    alignSelf: 'center',
  },
  contentStyle: {
    marginTop: 10,
  },
  text: {
    color: Colors.text,
    fontWeight: '700',
  },
  pickUpStoreHeader: {},
  searchView: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#fff',
    backgroundColor: '#F3F3F3',
    paddingStart: 50,
    flex: 1,
  },
  iconSearch: {
    position: 'absolute',
    start: 15,
    zIndex: 10,
    top: 13,
  },
  styleListShop: {
    marginVertical: -1,
    marginTop: 10,
    borderWidth: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 7,
    borderColor: Colors.shopBorderColor,
    overflow: 'hidden',
    backgroundColor: Colors.shopBorderColor,
  },
  itemesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: Colors.shopBackground,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderColor: Colors.shopBorderColor,
  },
  itemesText: {
    marginStart: 10,
    color: Colors.text,
    fontWeight: '700',
    fontSize: 18,
  },
  radiusContainerTitleText: {
    color: Colors.text,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 20,
  },
  radiusContainer: {
    padding: 16,
    backgroundColor: Colors.shopBackground,
    borderRadius: 7,
    marginTop: 25,
    borderWidth: 2,
    borderColor: Colors.shopBorderColor,
  },
  headerLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textMamery: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.text,
  },
  subItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonCheckout: {
    width: '100%',
    backgroundColor: Colors.primaryColor,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  viewOverLayDatePicker: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000078',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePicker: {
    borderRadius: 10,
    paddingTop: 10,
  },
});
