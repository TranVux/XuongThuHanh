import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets/Colors';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Signcode = ({navigation}) => {
  const [pinCode, setPinCode] = useState('');
  const ref = useBlurOnFulfill({pinCode, cellCount: 5});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: pinCode,
    setValue: setPinCode,
  });

  const back = () => {
    navigation.goBack();
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: '#fff'}}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={back}>
            <FastImage
              style={{marginTop: 15, width: 8.5, height: 14}}
              source={require('../../assets/images/Arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
          <View>
            <View style={{marginBottom: 81, alignItems: 'center'}}>
              <Image
                style={styles.img}
                source={require('../../assets/images/Group7037.png')}
              />
            </View>
            <Text style={styles.titlecontent}>Enter Verification Code</Text>
            <Text style={styles.text} numberOfLines={2}>
              We have sent SMS to:
              {'\n'}046 XXX XX XX
            </Text>
            <View style={styles.viewcode}>
              <CodeField
                ref={ref}
                {...props}
                value={pinCode}
                onChangeText={setPinCode}
                cellCount={5}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
            <Pressable
              style={[styles.button, {backgroundColor: '#FF5E00'}]}
              onPress={login}>
              <Text style={[{color: '#ffffff'}, styles.textButton]}>
                Sign Up
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  img: {
    height: 270,
  },
  title: {
    color: '#FF5E00',
    fontSize: 24,
    lineHeight: 41,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#7F4E1D',
    fontSize: 18,
    lineHeight: 22,
    width: 325,
    height: 53,
    marginTop: 13,
  },
  textButton: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    borderRadius: 30,
    borderColor: '#FF5E00',
    borderWidth: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlecontent: {
    color: '#7F4E1D',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  viewcode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textinput: {
    borderBottomWidth: 3,
    borderColor: '#7F4E1D',
    textAlign: 'center',
    fontSize: 18,
    color: Colors.text,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    fontSize: 24,
    lineHeight: 38,
    height: 40,
    borderBottomWidth: 3,
    marginHorizontal: 10,
    borderBottomColor: '#7F4E1D',
    textAlign: 'center',
    color: Colors.text,
  },
  focusCell: {
    borderColor: '#000',
  },
});
