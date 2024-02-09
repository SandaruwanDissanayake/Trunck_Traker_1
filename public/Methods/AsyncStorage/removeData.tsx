import AsyncStorage from '@react-native-async-storage/async-storage';

const removeValue = async () => {
  try {
    await AsyncStorage.mergeItem('user','null');
    console.log('Done.');
  } catch (e) {
    // remove error
    console.log(e);
  }

 
};
export default removeValue;
