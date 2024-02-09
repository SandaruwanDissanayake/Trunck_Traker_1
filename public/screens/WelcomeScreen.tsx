import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainBtnComponent from '../components/MainBtnComponent';
import Test from '../components/NotificationMessage';
import NotificationMessage from '../components/NotificationMessage';
import LoaderScreen from '../components/LoaderScreen';

import getData from '../Methods/AsyncStorage/GetData';
// import removeValue from '../Methods/AsyncStorage/removeData';

type NavigationProps = {
  navigation: any;
  navigate: string;
};

function WelcomeScreen({navigation}: NavigationProps) {


  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {/* <LoaderScreen /> */}
      <View style={styles.View1}>
        <Text style={styles.text1}>Navigating Paths to</Text>
        <Text style={styles.text2}> Coexistence.</Text>
      </View>
      <View style={styles.View2}>
        <Image style={styles.img} source={require('../assest/1ELE1.png')} />
      </View>
      <View style={styles.View3}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Navigation');
            navigation.navigate('Login');
          }}>
          <MainBtnComponent btnName="Continue" />
        </TouchableOpacity>

        <Text style={styles.copyrightTxt}>
          Powered by Helixaa Incorporation
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#EDEDED',
  },
  View1: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View2: {width: '100%', flex: 3},

  View3: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    backgroundColor: 'red',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  text1: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    color: '#449986',
  },
  text2: {
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 57,
    color: '#449986',
  },
  img: {
    width: '80%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: 0,
    marginLeft: 80, ////
  },
  primaryBtn: {
    width: 260,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#146956',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryTxt: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 33,
    color: '#EDEDED',
  },
  copyrightTxt: {
    color: '#363636',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 4,
  },
});

export default WelcomeScreen;
