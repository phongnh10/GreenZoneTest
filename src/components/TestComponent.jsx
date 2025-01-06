import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 10.7769, // Tọa độ mặc định (TP. Hồ Chí Minh)
    longitude: 106.7009,
    latitudeDelta: 0.01, // Độ zoom mặc định
    longitudeDelta: 0.01,
  });

  // Yêu cầu quyền truy cập vị trí
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  // Lấy vị trí hiện tại của người dùng
  const getCurrentLocation = async () => {
    const hasPermission = await requestPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setRegion({
            ...region,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log('Error getting location:', error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
        onRegionChangeComplete={region => setRegion(region)}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="You are here"
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

export default App;
