import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");


  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  
  const  pickedLocationHandler = useCallback((location) => {
    setPickedLocation(location)
  }, []) 
  
  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri)
  }
  
  function savedPlaceHandler(params) {
    console.log(enteredTitle, 'title........');
    console.log(selectedImage);
    console.log(pickedLocation);
    
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} value={enteredTitle} style={styles.input}/>
      </View>
      <ImagePicker onTakeImage={takeImageHandler}/>
      <LocationPicker onPicklocation={pickedLocationHandler}/>
      <Button onPress={savedPlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;


const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:24
    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color: Colors.primary500,

    },
    input:{
        marginVertical:8,
        paddoingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100

    }
})