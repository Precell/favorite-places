import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/database";

const AllPlaces = ({ route }) => {
  const isFocused = useIsFocused();

  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {

    async function loadPlaces(params) {
      const places = await fetchPlaces()
      
      setLoadedPlaces(places)
    }
    if (isFocused) {
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
      loadPlaces()
    }

    

    
  }, [isFocused, route]);


  console.log(loadedPlaces.length, 'loadedPlaces');
  
  return (
    <View>
      <PlacesList places={loadedPlaces}/>
    </View>
  );
};

export default AllPlaces;
