/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import NavigationScreen from './public/Navigations/Navigation';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import HomeScreen from './public/screens/DashboardScreen';
import MapScreen from './public/screens/MapScreen';
export default function App() {
  return (
    <>
      <NavigationScreen />
    </>
  );
}
