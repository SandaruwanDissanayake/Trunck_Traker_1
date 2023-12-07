import React, {useState} from 'react';
import {Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';

export default function MainBtnComponent(props: any) {
  const ui = (
   
    <View style={styles.primaryBtn}>
      <Text style={styles.primaryTxt}>{props.btnName}</Text>
    </View>
  
  );
  return ui;
}

const styles = StyleSheet.create({
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
});
