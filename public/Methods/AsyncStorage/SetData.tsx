import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async ()=> {
  try {
    await AsyncStorage.setItem('user', 'sandaruwan');
    console.log("sucess");
    
  } catch (e) {
    // saving error
    console.log(e);
  }
};

