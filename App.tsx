/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import NavigationScreen from './public/Navigations/Navigation';

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


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer 
    
    >
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Sign In" component={SignIn} /> */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
