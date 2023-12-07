import React from 'react'
import { Text, View } from 'react-native';

type NavigationProps = {
    navigation:any;
    navigate:string;
  };

function LogInScreen({navigation}:NavigationProps) {
  return (
    <Text>LogInScreen</Text>
  )
}

export default LogInScreen