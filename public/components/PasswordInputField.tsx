import React, {useState} from 'react';
import {Image, StyleSheet, View, TextInput} from 'react-native';

export default function PasswordInputComponent(props: any) {
  var error = props.error;

  const inputStyles = {
    ...styles.input,
    borderBottomColor: error ? 'red' : '#C2C2C3',
  };

  const ui = (
    <>
    
        <TextInput
          style={inputStyles}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={newText => {
            error = false;
            console.log(newText);

            if (props.onChangeText) {
              props.onChangeText(newText);
            }
          }}
          value={props.value}
          // value={password}
          // onChangeText={text => setPassword(text)}
          {...props} // Pass additional props to TextInput
        />

    </>
  );
  return ui;
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

    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
    color: '#7D797B',
  },
});
