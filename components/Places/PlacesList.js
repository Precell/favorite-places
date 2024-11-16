import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlacesList = ({ places }) => {


    if (!places || places.length === 0) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbactText} >No places added yet - start adding some!</Text>
        </View>
    }
  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  );
};

export default PlacesList;


const styles = StyleSheet.create({
    fallbackContainer:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbactText:{
        fontSize:16,
        color: Colors.primary200
    }
})