import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} value={enteredTitle} style={styles.input}/>
      </View>
      <ImagePicker/>
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
        borderBottomWidht: 2,
        backgroundColor: Colors.primary100

    }
})