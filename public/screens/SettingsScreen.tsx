import React from 'react';

import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import removeValue from '../Methods/AsyncStorage/removeData';

import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProps = {
  navigation: any;
  navigate: string;
};

export default function SettingsScreen({navigation}: NavigationProps) {
  const USER_2 = {
    name: 'Sarah',
    age: 21,
    hobby: 'cars',
  };

  const handleLogout = async () => {
    // await removeValue(); // Assuming removeValue is asynchronous
    // await storeData();
    // await AsyncStorage.removeItem('user');
    // console.log('log out complete');

    //  const keys=   await AsyncStorage.getAllKeys();
    // Navigate to the WelcomeScreen

    // await AsyncStorage.setItem('user', JSON.stringify(USER_2));

    const data = await AsyncStorage.getItem('user');
    try {
      if (data !== null) {
        console.log(data);
        
        console.log(JSON.parse(data).userId);
      } else {
        console.log('Data is null');
      }
    } catch (e) {
      console.log(e);
    }
    // console.log("done");

    // navigation.navigate('WelcomeScreen');
  };

  return (
    <SafeAreaView>
      <Button
        title="Log Out"
        onPress={() => {
          handleLogout();
        }}
      />
    </SafeAreaView>
  );
}
