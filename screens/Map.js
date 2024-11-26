import { useCallback, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : -17.8183114,
    longitude: initialLocation ? initialLocation.lng : 31.067429143,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    // console.log(event);

    if (initialLocation) {
      return
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      lat: lat,
      lng: lng,
    });
  }

  const savedPickedLocationHandler = useCallback(
    (params) => {
      if (!selectedLocation) {
        Alert.alert(
          "No location picked ",
          "You have to pick a location (by tapping on the map) first"
        );
        return;
      }

      navigation.navigate("AddPlace", {
        pickedlat: selectedLocation.lat,
        pickedlng: selectedLocation.lng,
      });
    },
    [navigation, selectedLocation]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        if (initialLocation) {
          return;
        }
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savedPickedLocationHandler}
        />;
      },
    });
  }, [navigation, savedPickedLocationHandler. initialLocation]);

  return (
    <MapView
      onPress={selectLocationHandler}
      initialRegion={region}
      style={styles.map}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
