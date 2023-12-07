import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import MainBtnComponent from '../../components/MainBtnComponent';
import PasswordInputComponent from '../../components/PasswordInputField';

export default function SugnUpScreen() {
  const [email, setEmail] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const [password, setpassword] = React.useState('');

  const placeholder = 'Email';
  const keyboardType = 'numeric';
  // const iconName = '@.png';
  const ui = (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.imageView}>
          <Image source={require('../../assest/login.png')} />
        </View>

        <View style={styles.formView}>
          <View style={styles.formMainView}>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <Text style={styles.title}>Sign Up</Text>
            </View>
            <View style={styles.mainInputBox}>
              <View style={styles.inputImagBox}>
                <Image
                  style={{width: 16, height: 18}}
                  source={require('../../assest/at.png')}
                />
              </View>
              <View style={styles.textInputBox}>
                <TextInputComponent
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  value={email}
                  
                />
              </View>
            </View>

            <View style={styles.mainInputBox}>
              <View style={styles.inputImagBox}>
                <Image
                  style={{width: 16, height: 18}}
                  source={require('../../assest/user.png')}
                />
              </View>
              <View style={styles.textInputBox}>
                <TextInputComponent
                  placeholder="User Name"
                  keyboardType="default"
                  onChangeText={setuserName}
                  value={userName}
                 
                />
              </View>
            </View>

            <View style={styles.mainInputBox}>
              <View style={styles.inputImagBox}>
                <Image
                  style={{width: 16, height: 18}}
                  source={require('../../assest/lock.png')}
                />
              </View>
              <View style={styles.textInputBox}>
                <PasswordInputComponent
                  placeholder="Password"
                  keyboardType="visible-password"
                  onChangeText={setpassword}
                  value={password}  
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '500',
                color: '#000000',
              }}>
              By signing up, you’re agree to our
              <Text style={{fontWeight: '400', color: '#146956'}}>
                Terms & Conditions
              </Text>{' '}
              <Text>and</Text>
              <Text style={{fontWeight: '400', color: '#146956'}}>
                {' '}
                Privacy Policy
              </Text>
            </Text>

            <TouchableOpacity
              onPress={() => {
               console.log(email);
               console.log(password);
               console.log(userName);
               
               
               
              }}>
              <MainBtnComponent btnName="Sign Up" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('hello');
              }}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                Joined us before?
                <Text style={{fontWeight: '400', color: '#146956'}}>
                  {' '}
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  return ui;
}
const styles = StyleSheet.create({
  textInputBox: {width: '93%', alignItems: 'center', justifyContent: 'center'},
  inputImagBox: {
    width: '7%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mainInputBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C2C2C3',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7D797B',
  },
  SafeAreaView: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  imageView: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formView: {
    width: '100%',
    height: '55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formMainView: {
    width: '90%',
    gap: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 54,
    color: '#292929',
  },
});
