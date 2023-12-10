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

type NavigationProps = {
  navigation: any;
  navigate: string;
};

export default function SugnUpScreen({navigation}: NavigationProps) {
  const [email, setEmail] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const [password, setpassword] = React.useState('');
  // const [err,setError]=React.useState(true);
  const [userNameError, setUserNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(true);

  const placeholder = 'Email';
  const keyboardType = 'numeric';
  // const iconName = '@.png';
  const ui = (
    <>
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
                  // onChangeText={setEmail}
                  value={email}
                  onChangeText={(newText: string) => {
                    setEmail(newText);
                    setEmailError(false);
                  }}
                  error={emailError}
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

            <TouchableOpacity onPress={singUpProcess}>
              <MainBtnComponent btnName="Sign Up" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
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

  function singUpProcess() {
    const jsRequestObject = {
      email: email,
      userName: userName,
      password: password,
    };
    const jsonRequestText = JSON.stringify(jsRequestObject);

    const formData = new FormData();
    formData.append('jsonRequestText', jsonRequestText);

    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        var jsonResponsetext = request.responseText;
        var jsResponseObject = JSON.parse(jsonResponsetext);

        if (jsResponseObject.statusCode == 200) {
          console.log(jsResponseObject);

          //AsyncStorage ekat userge data input krnn oni
          //NavigationScreen ekatnavigate krnn oni
        } else if (jsResponseObject.statusCode == 1) {
          console.log(jsResponseObject);
          setEmailError(true);
          Alert.alert('Message', jsResponseObject.message);
        } else if (jsResponseObject.statusCode == 2) {
          console.log(jsResponseObject);
          setEmailError(true);
          Alert.alert('Message', jsResponseObject.message);
        }else if (jsResponseObject.statusCode == 3) {
          console.log(jsResponseObject);
          setPasswordError(true);
          Alert.alert('Message', jsResponseObject.message);
        }  else {
          console.log(jsResponseObject);
        }
      }
    };

    request.open(
      'POST',
      'http://10.0.2.2/research_01_project/auth/signupProcess.php',
      true,
    );
    request.send(formData);
    //navigation.navigate("Navigation");
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
    gap: 15,
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
