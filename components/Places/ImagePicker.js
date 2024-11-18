import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions(params) {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant camerap permissions to use this app"
      );

      return false;
    }

    return true;
  }

  async function takeImageHandler(params) {
    // const hasPermissions = await verifyPermissions();
    // if (!hasPermissions) {
    //   return;
    // }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    console.log(image.assets[0].uri);
    
  }



  let imagePreview = <Text>No Image taken yet</Text>;
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});


// import React, { useState, useEffect } from "react";
// import { View, Text, Button, Alert, StyleSheet, Image } from "react-native";
// import {
//   launchCameraAsync,
//   useCameraPermissions,
//   PermissionStatus,
// } from "expo-image-picker";
// import { Colors } from "../../constants/colors";

// const ImagePicker = () => {
//   const [pickedImage, setPickedImage] = useState(null);

//   const [cameraPermissionInformation, requestPermission] =
//     useCameraPermissions();

//   async function verifyPermissions() {
//     if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
//       const permissionResponse = await requestPermission();
//       return permissionResponse.granted;
//     }

//     if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
//       Alert.alert(
//         "Insufficient Permissions",
//         "You need to grant camera permissions to use this app"
//       );
//       return false;
//     }

//     return true;
//   }

//   async function takeImageHandler() {
//     const hasPermissions = await verifyPermissions();
//     if (!hasPermissions) {
//       return;
//     }

//     const image = await launchCameraAsync({
//       allowsEditing: true,
//       aspect: [16, 9],
//       quality: 0.5,
//     });

//     if (!image.canceled && image.uri) {
//       setPickedImage(image.uri);
//     } else {
//       console.log("Camera operation was canceled or failed.");
//     }
//   }

//   useEffect(() => {
//     console.log(pickedImage);
//   }, [pickedImage]);

//   let imagePreview = <Text>No Image taken yet</Text>;

//   if (pickedImage) {
//     imagePreview = (
//       <Image style={styles.image} source={{ uri: pickedImage }} />
//     );
//   }

//   return (
//     <View>
//       <View style={styles.imagePreview}>{imagePreview}</View>
//       <Button title="Take Image" onPress={takeImageHandler} />
//     </View>
//   );
// };

// export default ImagePicker;

// const styles = StyleSheet.create({
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     marginVertical: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.primary100,
//     borderRadius: 4,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });
