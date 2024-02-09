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
import {useRoute} from '@react-navigation/native';
import maskEmail from '../../Methods/maskEmail';

type NavigationProps = { 
  navigation: any;
  navigate: string;
  obj: String;
};

function OTPScreen({navigation}: NavigationProps) {
  const route = useRoute();

  // Access the parameters passed during navigation
  const {email}: any = route.params;

  const [OTPcode, setOTPcode] = React.useState('');

  const placeholder = 'Email';
  const keyboardType = 'numeric';

  const maskemail = maskEmail(email);
  // const iconName = '@.png';
  const ui = (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.imageView}>
          <Image source={require('../../assest/EnterOTP.png')} />
        </View>

        <View style={styles.formView}>
          <View style={styles.formMainView}>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <Text style={styles.title}>Enter {'\n'}Verification</Text>

              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                Your Verification code has been sent to {maskemail}
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
                <TextInputComponent
                  placeholder="Verification Code"
                  keyboardType="default"
                  onChangeText={setOTPcode}
                  value={OTPcode}
                />
              </View>
            </View>

            <TouchableOpacity onPress={OTPScreenProcess}>
              <MainBtnComponent btnName="Submit" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  return ui;

  // Example usage
  // const email = 'sampleemail@example.com';
  // const maskedEmail = maskEmail(email);

  // console.log(maskedEmail);

  async function OTPScreenProcess() {

    const obj={
      email:email
    }

    navigation.navigate('ChangePassword',obj);

    const jsRequestObject = {
      email: email,
      verificationCode: OTPcode,
    };

    const jsonRequestText = JSON.stringify(jsRequestObject);
    console.log(jsonRequestText);

    const form=new FormData();
    form.append('jsonRequestText',jsonRequestText);

    
    if (email != '' && OTPcode != '') {
      try {
        const response = await fetch('http://10.0.2.2/TrunckTracker/auth/changePassword/checkVerificationCode.php', {
          method: 'POST',
          body: form,
        });

        if (response.ok) {
          try {
            const data = await response.json();
            console.log(data);
            
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
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

export default OTPScreen;
