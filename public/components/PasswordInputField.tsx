import React, {useState} from 'react';
import {Image, StyleSheet, View, TextInput} from 'react-native';

export default function PasswordInputComponent(props: any) {
  
  const ui = (
    <TextInput
      style={styles.input}
      // onChangeText={onChangeNumber}
      // value={number}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={true}
    />
  );
  return ui;
}

const styles = StyleSheet.create({
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
});
