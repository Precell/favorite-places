import { View, Text, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";

const Map = () => {

    const region = {
        latitude:-17.8183114,
        longitude:31.067429143,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    }

  return <MapView initialRegion={region} style={styles.map}>

  </MapView>;
};

export default Map;

const styles = StyleSheet.create({
    map:{
        flex:1
    }
})
