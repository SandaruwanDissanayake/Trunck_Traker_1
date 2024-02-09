import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MainBtnComponent from '../../components/MainBtnComponent';
import PasswordInputComponent from '../../components/PasswordInputField';
import {useRoute} from '@react-navigation/native';
import NotificationMessage from '../../components/NotificationMessage';

type NavigationProps = {
  navigation: any;
  navigate: string;
};

function ChangePassword({navigation}: NavigationProps) {
  const route = useRoute();
  const {email}: any = route.params;

  console.log(email);

  const [newPassword, setnewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [anyError, setEnyError] = React.useState(false);
  const [newPasswordError, setNewPasswordError] = React.useState(false);
  const [confrioamPsswordError, setConfrioamPsswordError] =
    React.useState(false);
  const [errMessage, setErrorMessage] = React.useState('Error');
  const ui = (
    <>
      {(anyError || newPasswordError || confrioamPsswordError) && (
        <NotificationMessage message={errMessage} />
      )}
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.imageView}>
          <Image source={require('../../assest/Changepassword.png')} />
        </View>

        <View style={styles.formView}>
          <View style={styles.formMainView}>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <Text style={styles.title}>Change Password</Text>

              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                Password must contain minimum eight characters, at least one
                letter and one number
              </Text>
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
                  onChangeText={(newText: string) => {
                    setnewPassword(newText);
                    setConfrioamPsswordError(false);
                    setNewPasswordError(false);
                  }}
                  error={newPasswordError}
                  value={newPassword}
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
                  onChangeText={(newText: string) => {
                    setConfirmPassword(newText);
                    // setPasswordError(false);
                    setConfrioamPsswordError(false);
                    setNewPasswordError(false);
                  }}
                  error={confrioamPsswordError}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                />
              </View>
            </View>

            <TouchableOpacity onPress={checkMatchPassword}>
              <MainBtnComponent btnName="Submit" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  return ui;

  function checkMatchPassword() {
    if (newPassword != '' && confirmPassword != '') {
      if (newPassword == confirmPassword) {
        ChangePasswordProcess();
      } else {
        console.log('not match password');
        setConfrioamPsswordError(true);
        setNewPasswordError(true);
        setErrorMessage('Password not matched');
      }
    }
    if (newPassword == '') {
      setNewPasswordError(true);
      setErrorMessage('enter new password');
      console.log('enter new password');
    } else if (confirmPassword == '') {
      setConfrioamPsswordError(true);
      setErrorMessage('Re-Enter New Password');
    }
  }

  async function ChangePasswordProcess() {
    const jsRequestObject = {
      email: email,
      newPassword: newPassword,
      reEnterPassword: confirmPassword,
    };
    const jsonRequestText = JSON.stringify(jsRequestObject);
    console.log(jsonRequestText);
    try {
      const formData = new FormData();
      formData.append('jsonRequestText', jsonRequestText);

      const response = await fetch('http://10.0.2.2/TrunckTracker/auth/changePassword/changePassword.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        try {
          const data = await response.json();
          console.log(data);
          
        } catch (error) {
          console.log(error);
        }
      }

      navigation.navigate('Navigation');
    } catch (error) {
      console.log(error);
    }
  }
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
    backgroundColor: '#EDEDED',
  },
  imageView: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formView: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formMainView: {
    width: '90%',
    gap: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 54,
    color: '#292929',
    marginBottom: 20,
    marginTop: -20,
  },
});

export default ChangePassword;
