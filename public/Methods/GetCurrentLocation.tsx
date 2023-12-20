import Geolocation, {
    GeolocationConfiguration,
  } from '@react-native-community/geolocation';
  import { GeoPosition } from 'react-native-geolocation-service';


let currentLatitude: number | null = null;
let currentLongitude: number | null = null;

export default function getCurrentLocation(): Promise < { latitude: number | null;longitude: number | null } > {
    return new Promise((resolve) => {
        const config: GeolocationConfiguration = {};
        Geolocation.getCurrentPosition((info: GeoPosition) => {
            currentLatitude = info.coords.latitude;
            currentLongitude = info.coords.longitude;
            resolve({ latitude: currentLatitude, longitude: currentLongitude });
        });
        Geolocation.setRNConfiguration(config);
    });
}

// export default async function getCurrentLocation() {
//     // const location = await main();
//     resolve({ latitude: currentLatitude, longitude: currentLongitude });
//     // console.log(location);
// }