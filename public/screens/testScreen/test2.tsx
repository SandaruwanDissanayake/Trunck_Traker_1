import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, {
  Circle,
  Geojson,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
import FindMyCoordinates from './test';
import getCurrentLocation from '../../Methods/GetCurrentLocation';
import requestCameraPermission from '../../Methods/Permission';

async function userLocation() {
  const location = await getCurrentLocation();
  console.log(location);
}

requestCameraPermission();
userLocation();

// setInterval(userLocation,9000);


const YourComponent = () => {
  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // console.log(currentLongitude);
  // requestCameraPermission();


  const [state, setState] = useState({
    pickupCords: {
      latitude: 6.927079,
      longitude: 79.861244,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    droplocationCord: {
      latitude: 37.4217937,
      longitude: -122.083922,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    userLocation: null,
  });
  const INISIAL = {
    latitude: 30.7336,
    longitude: 76.7794,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  // FindMyCoordinates();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        showsUserLocation
        initialRegion={state.droplocationCord}
        userLocationUpdateInterval={5000}
        followsUserLocation
        showsMyLocationButton={true}>
        <Marker coordinate={state.pickupCords} title="Elephant Location" />
        <Marker coordinate={state.droplocationCord} title="Your Location" />
        {state.userLocation && (
          <Marker
            coordinate={state.userLocation}
            title="Your Current Location"
            pinColor="blue"
          />
        )}
        <Circle
          center={state.droplocationCord}
          radius={100}
          strokeWidth={400}
          strokeColor="#f1d3d3"
          fillColor="#080707"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default YourComponent;
