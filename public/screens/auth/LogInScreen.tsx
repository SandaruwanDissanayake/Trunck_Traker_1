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
import NotificationMessage from '../../components/NotificationMessage';
import LoaderScreen from '../../components/LoaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storeData from '../../Methods/AsyncStorage/SetData';

type NavigationProps = {
  navigation: any;
  navigate: string;
};

function LogInScreen({navigation}: NavigationProps) {
  const [userName, setuserName] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [errMessage, seterrorMessage] = React.useState('error');
  const [anyError, setAnyError] = React.useState(false);
  const [userNameError, setUserNameError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const ui = (
    <>
      {(userNameError || passwordError || anyError) && (
        <NotificationMessage message={errMessage} />
      )}

      {loading ? <LoaderScreen /> : null}

      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.imageView}>
          <Image source={require('../../assest/signUp.png')} />
        </View>

        <View style={styles.formView}>
          <View style={styles.formMainView}>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <Text style={styles.title}>Log In</Text>
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
                  // onChangeText={setuserName}

                  onChangeText={(newText: string) => {
                    setuserName(newText);
                    setUserNameError(false);
                  }}
                  error={userNameError}
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
                  onChangeText={(newText: string) => {
                    setpassword(newText);
                    setPasswordError(false);
                  }}
                  error={passwordError}
                  value={password}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text style={{fontWeight: '400', color: '#146956'}}>
                  {' '}
                  Forgot Password ?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={logInProcess}>
              <MainBtnComponent btnName="Log In" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
                // navigation.navigate("Navigation");
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
                  Regester
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  return ui;
  async function logInProcess() {
    setLoading(true);
    const jsRequestObject = {
      userName: userName,
      password: password,
    };

    const jsonRequestText = JSON.stringify(jsRequestObject);

    try {
      const form = new FormData();
      form.append('jsonRequestText', jsonRequestText);

      const response = await fetch(
        'http://10.0.2.2/TrunckTracker/auth/login/login.php',
        {
          method: 'POST',
          body: form,
        },
      );

      if (response.ok) {
        try {
          const data = await response.json(); // Parse JSON response
          setLoading(false);
          if (data.statusCode == 200) {
            console.log(data);
            const obj = {
              userId: data.userId,
            };
            await AsyncStorage.setItem('user', JSON.stringify(obj));
            navigation.navigate('Navigation');

            //async storage ekat yawnn oni user id ek
            //navigate krnn oni navigation scerren ekat
          } else if (data.statusCode == 1) {
            console.log(data.message);
            setUserNameError(true);
            seterrorMessage(data.message);
          } else if (data.statusCode == 3) {
            setPasswordError(true);
            seterrorMessage(data.message);
          } else {
            console.log(data);

            setAnyError(data.message);
          }
        } catch (jsonError) {
          // Handle JSON parsing errors
          console.error('Error parsing JSON:', jsonError);
        }
      } else {
        // Handle non-OK responses
        console.error('Error:', response.statusText);

        // Log the entire response text for further inspection
        const responseText = await response.text();
        console.log('Response Text:', responseText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
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
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formView: {
    width: '100%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formMainView: {
    width: '90%',
    gap: 20,
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

export default LogInScreen;
