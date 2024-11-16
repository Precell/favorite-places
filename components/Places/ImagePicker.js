import React from 'react'
import { View, Text, Button } from 'react-native'
import { launchCameraAsync } from 'expo-image-picker'


const ImagePicker = () => {

    async function takeImageHandler(params) {
        const image = await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:.5
        })
        
        console.log(image);
        
    }

  return (
    <View>
      <View></View>
      <Button title='Take Image' onPress={takeImageHandler}/>
    </View>
  )
}

export default ImagePicker