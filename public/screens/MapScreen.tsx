import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, {
  Circle,
  Geojson,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import getCurrentLocation from '../Methods/GetCurrentLocation';
import requestCameraPermission from '../Methods/Permission';
import MapScreenNotification from '../components/MapScreenNotification';

async function userLocation() {
  let location = await getCurrentLocation();
  // console.log(location.latitude);
  return location;
}
// requestCameraPermission();
// const userCord=userLocation();
// console.log(userCord);

export default function MapScreen() {
  

  const [userCorde, setUserCorde] = useState({
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  });
  useEffect(() => {
    async function fetchUserLocation() {
      try {
        const location = await getCurrentLocation();
        setUserCorde(prevState => ({
          ...prevState,
          location: {
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },  
        }));
        console.log(location);
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    }
    fetchUserLocation();
  }, []);

  

  // const [elephantCorde, setelephantCorde] = useState({
  //   location: {
  //     latitude: 37.4210037,
  //     longitude: -122.083922,
  //     latitudeDelta: 0.015,
  //     longitudeDelta: 0.0121,
  //   },
  // });


  const [elephants, setElephants] = useState([
    {
      id: 1,
      name:"Raja",
      location: {
        latitude: 37.4210037,
        longitude: -122.083922,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    },
    {
      id: 2,
      name:"muthu manika",
      location: {
        latitude: 37.422,
        longitude: -122.084,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    },
    // Add more elephants as needed
  ]);

  // const [state, setState] = useState({
  //   user: {
  //     latitude: usercordLatitude,
  //     longitude: usercordLongitude,
  //     latitudeDelta: 0.015,
  //     longitudeDelta: 0.0121,
  //   },
  //   droplocationCord: {
  //     latitude: 37.4217937,
  //     longitude: -122.083922,
  //     latitudeDelta: 0.015,
  //     longitudeDelta: 0.0121,
  //   },
  //   userLocation: null,
  // });
  // const INISIAL = {
  //   latitude: 30.7336,
  //   longitude: 76.7794,
  //   latitudeDelta: 0.015,
  //   longitudeDelta: 0.0121,
  // };
  // FindMyCoordinates();
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider="google"
          showsUserLocation
          initialRegion={userCorde.location}
          userLocationUpdateInterval={5000}
          followsUserLocation
          showsMyLocationButton={true}>
          {elephants.map(elephant=>(
            <Marker key={elephant.id}
            coordinate={elephant.location}
            title={elephant.name}
          />
          ))}
          
          <Marker coordinate={userCorde.location} title="Your Location" />
          {userCorde.location && (
            <Marker
              coordinate={userCorde.location}
              title="Your Current Location"
              pinColor="blue"
            />
          )}
          <Circle
            center={userCorde.location}
            radius={100}
            strokeWidth={400}
            strokeColor="#f1d3d3"
            fillColor="#080707"
          />
        </MapView>
      </View>
      <View style={styles.notificationContainer}>
        <MapScreenNotification />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  notificationContainer: {
    height: '13%',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    height: '87%',
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
