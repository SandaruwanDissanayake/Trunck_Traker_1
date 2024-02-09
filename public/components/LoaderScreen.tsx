import LottieView from 'lottie-react-native';

import React from 'react';
import {StyleSheet, View} from 'react-native';

function LoaderScreen() {
  return (
    <View style={[StyleSheet.absoluteFillObject, style.container]}>
      <LottieView
        style={style.loader}
        source={require('../assest/Animation.json')}
        autoPlay 
        loop
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.3)',zIndex:1},
  loader: {width:100,height:100,},
});

export default LoaderScreen;
