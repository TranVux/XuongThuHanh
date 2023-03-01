import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.profile}>
      <TouchableOpacity><Image style={styles.Arrow_ic} source={require('../../assets/images/Arrow-ic.png')}></Image></TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.title_text}>Profile</Text>
      </View>

      {/* // Account */}
      <View style={styles.account}>
        {/* edit profile */}
        <View style={styles.account_edit}>
          <Image style={styles.account_img} source={require('../../assets/images/user.png')}></Image>
          <View style={styles.account_title_arrow}>
            <Text style={styles.account_title}>Edit Profile</Text>
            <Image style={styles.account_arrow} source={require('../../assets/images/back_arrow.png')}></Image>
          </View>
        </View>
        {/* change pass */}
        <View style={styles.account_edit}>
          <Image style={styles.account_img} source={require('../../assets/images/key.png')}></Image>
          <View style={styles.account_title_arrow}>
            <Text style={styles.account_title}>Change Password</Text>
            <Image style={styles.account_arrow} source={require('../../assets/images/back_arrow.png')}></Image>
          </View>
        </View>

        {/* my cards */}
        <View style={[styles.account_edit, { marginBottom: 0 }]}>
          <Image style={styles.account_img} source={require('../../assets/images/cart.png')}></Image>
          <View style={styles.account_title_arrow}>
            <Text style={styles.account_title}>Edit Profile</Text>
            <Image style={styles.account_arrow} source={require('../../assets/images/back_arrow.png')}></Image>
          </View>
        </View>

      </View>

      {/* App Setting */}
      <View style={styles.settings}>
        <Text style={styles.settings_text}>App Settings</Text>

        {/* Notifications */}
        <View style={[styles.account_edit]}>
          <Image style={styles.account_img} source={require('../../assets/images/bell.png')}></Image>
          <View style={styles.account_title_arrow}>
            <Text style={styles.account_title}>Notifications</Text>
            <View style={styles.togglebutton}>
              <Switch
                trackColor={{ false: '#767577', true: '#FF5E00' }}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                onValueChange={() => setIsEnabled(!isEnabled)}
                value={isEnabled}
              />
            </View>
          </View>
        </View>

        {/* language */}
        <View style={[styles.appsettings, { marginBottom: 33 }]}>
          <View style={styles.appsettings_left}>
            <Image style={styles.account_img} source={require('../../assets/images/language.png')}></Image>
            <Text style={[styles.account_title, { marginLeft: 15 }]}>Languages</Text>
          </View>
          <View style={styles.appsettings_right}>
            <Text style={styles.account_select}>English</Text>
            <Image style={styles.account_arrow} source={require('../../assets/images/back_arrow.png')}></Image>
          </View>
        </View>

        {/* logout */}
        <View style={[styles.account_edit]}>
          <Image style={styles.account_img} source={require('../../assets/images/logout.png')}></Image>
          <Text style={[styles.account_title, { marginLeft: 15 }]}>Logout</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
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
  account: {
    height: 137,
    width: 326.67,
    marginTop: 33,
    flexDirection: 'column',
  },
  account_edit: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 33,
    justifyContent: 'flex-start'
  },
  account_img: {
    width: 20,
    height: 24
  },
  account_title_arrow: {
    flex: 1,
    height: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15
  },
  account_title: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#804F1E'
  },
  account_arrow: {
    width: 6.67,
    height: 12,
  },
  settings: {
    height: 197,
    width: 326.67,
    marginTop: 33,
    flexDirection: 'column',
  },
  settings_text: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26.4,
    color: '#FF5E00',
    marginBottom: 32
  },
  togglebutton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appsettings: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  appsettings_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appsettings_right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  account_select: {
    marginRight: 14,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#804F1E'
  }
})