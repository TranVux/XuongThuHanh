import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { SelectCountry } from 'react-native-element-dropdown';
import React, { useState, useContext } from 'react'
import FastImage from 'react-native-fast-image';

const EditProfile = (props) => {
  const {navigation} = props;
  const [country, setCountry] = useState('1');
  return (
    <View style={styles.editprofile}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Image style={styles.Arrow_ic} source={require('../../assets/images/Arrow-ic.png')} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.title_text}>Edit Profile</Text>
      </View>
      <TextInput style={styles.textinput} placeholder='######'></TextInput>
      <View style={styles.container}>
        <SelectCountry
          style={styles.dropdown}
          imageStyle={styles.imageStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={country}
          data={local_data}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Search..."
          onChange={e => {
            setCountry(e.value);
          }}
        />
        <TextInput style={styles.phone} placeholder='000999'></TextInput>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.button_update}>
        <Text style={styles.button_update_text}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  editprofile: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'column',
    backgroundColor: "#fff",
    flex: 1
  },
  Arrow_ic: {
    width: 8.49,
    height: 14
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_text: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#FF5E00'
  },
  textinput: {
    height: 48,
    borderRadius: 5,
    marginHorizontal: -4,
    backgroundColor: '#EEEEEE',
    color: '#6D3805',
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    paddingVertical: 14,
    paddingLeft: 27,
    marginTop: 64
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 50,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 25,
    height: 25,
    paddingVertical: 11,
    paddingLeft: 12

  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 12
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 48,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    marginTop: 30,
    borderRadius: 5,
    marginHorizontal: -4

  },
  phone: {
    marginLeft: 14.33,
    paddingVertical: 14,
    color: '#6D3805',
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
  },
  button_update: {
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FF5E00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  },
  button_update_text: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 21.6,
    lineHeight: 21.6,
    color: '#FFFFFF'
  }
})

const local_data = [
  {
    value: '1',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/128/206/206626.png',
    },
  },
  {
    value: '2',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/128/555/555417.png',
    },
  },
  {
    value: '3',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/128/5111/5111624.png',
    },
  },
  {
    value: '4',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/128/555/555560.png',
    },
  },
  {
    value: '5',
    image: {
      uri: 'https://cdn-icons-png.flaticon.com/128/555/555515.png',
    },
  },
];