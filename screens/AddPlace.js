import { View, Text } from 'react-native'
import React from 'react'
import PlaceForm from '../components/Places/PlaceForm'

const AddPlace = ({ navigation }) => {

  function createPlaceHandler(place) {
    navigation.navigate('AllPlaces')
  }
  return <PlaceForm onCreatePlace= {createPlaceHandler}/>
}

export default AddPlace