import React, {useState} from 'react';
import {Image, StyleSheet, View, TextInput} from 'react-native';

export default function TextInputComponent(props: any) {
  var error = props.error;

  const inputStyles = {
    ...styles.input,
    borderBottomColor: error ? 'red' : '#C2C2C3',
  };

  const ui = (
    <TextInput
      style={inputStyles}
      // onChangeText={onChangeNumber}
      // value={number}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      onChangeText={newText => {
        error = false;
        console.log(newText);
        
        if (props.onChangeText) {
          props.onChangeText(newText);
        }
      }}
      value={props.value}
    />
  );
  return ui;
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,

    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7D797B',
  },
});
