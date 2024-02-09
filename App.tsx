/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import NavigationScreen from './public/Navigations/Navigation';

import {enableLatestRenderer} from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';

enableLatestRenderer();

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import HomeScreen from './public/screens/DashboardScreen';
import MapScreen from './public/screens/MapScreen';
import SignUpScreen from './public/screens/auth/SignUpScreen';
import LogInScreen from './public/screens/auth/LogInScreen';
import OTPScreen from './public/screens/auth/OTPScreen';
import ForgotPasswordScreen from './public/screens/auth/ForgotPasswordScreen';
import DashboardScreen from './public/screens/DashboardScreen';
import WelcomeScreen from './public/screens/WelcomeScreen';
import ChangePassword from './public/screens/auth/ChangePassword';
import Test1 from './public/components/NotificationMessage';
import Test2 from './public/screens/testScreen/test2';
import Test from './public/components/NotificationMessage';
import LoaderScreen from './public/components/LoaderScreen';
import getData from './public/Methods/AsyncStorage/GetData';

const Stack = createNativeStackNavigator();


function App() {
  // const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await getData();
        // setInitialRouteName(value === '' ? 'Navigation' : 'SignUp');
        console.log("value :"+ value);
        // if (value !== null) {
        //   navigation.navigate('Navigation');
        // }
      } catch (error) {
        console.error(error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  async function checkUser() {
    const user = await AsyncStorage.getItem('user');

    return user;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={checkUser() === null ? 'WelcomeScreen' : 'Navigation'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
