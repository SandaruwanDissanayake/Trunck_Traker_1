import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      // value previously stored
    //   console.log(value);
     
    } 
    return value;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export default getData;
