import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

const PlacesList = ({places}) => {

    
  return (
    <View>
      <FlatList data={places} keyExtractor={(item) =>item.id } renderItem={({item})=><PlaceItem place={item}/> }/>
    </View>
  )
}

export default PlacesList