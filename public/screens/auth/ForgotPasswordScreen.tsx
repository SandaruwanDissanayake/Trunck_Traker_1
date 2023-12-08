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

function ForgotPasswordScreen({navigation}: NavigationProps) {
  const [email, setEmail] = React.useState('');

  const placeholder = 'Email';
  const keyboardType = 'numeric';
  // const iconName = '@.png';
  const ui = (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.imageView}>
          <Image source={require('../../assest/Forgotpassword.png')} />
        </View>

        <View style={styles.formView}>
          <View style={styles.formMainView}>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <Text style={styles.title}>Forgot {'\n'}Password ?</Text>



              <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '500',
                color: '#000000',
              }}>
              Don’t worry it happens. Please enter the address associated with
              your account.
            </Text>

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

            <TouchableOpacity onPress={ForgotPasswordProcess}>
              <MainBtnComponent btnName="Submit" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  return ui;

  function ForgotPasswordProcess() {
    // const jsRequestObject = {
    //   email: email,
    //   userName: userName,
    //   password: password,
    // };
    // const jsonRequestText = JSON.stringify(jsRequestObject);
    // console.log(jsonRequestText);
    // const formData = new FormData();
    // formData.append('jsonRequestText', jsonRequestText);

    // const request = new XMLHttpRequest();
    // request.onreadystatechange = () => {
    //   if (request.readyState == 4 && request.status == 200) {
    //     var jsonResponsetext = request.responseText;
    //     var jsResponseObject = JSON.parse(jsonResponsetext);

    //     if(jsResponseObject.statusCode==200){
    //       //AsyncStorage ekat userge data input krnn oni
    //       //NavigationScreen ekatnavigate krnn oni
    //     }else{
    //       Alert.alert('Message', 'Try Again');
    //     }
    //   }
    // };

    // request.open('POST', 'http://10.0.2.2/react_chat_app/signIn.php', true);
    // request.send(formData);
    navigation.navigate('OTP');
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
    marginBottom:20,
    marginTop:-20,
  },
});

export default ForgotPasswordScreen;
