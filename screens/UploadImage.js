import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
export default function UploadImage() {
 const [image, setImage] = useState(null);


 const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync();
  }
 return (
<View >
               {
                   image  &&<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
               }

<View >
{/* <TouchableOpacity  > */}
{/* <View > */}
<Text style={{fontSize:18}}>Upload your image &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<AntDesign  onPress={addImage}name="pluscircleo" size={30} color="black" /> </Text>
{/* </View> */}
{/* </TouchableOpacity> */}
</View>


</View>

 );
}

const imageUploaderStyles=StyleSheet.create({
   container:{
       elevation:2,
       height:50,
       width:50,
       backgroundColor:'#efefef',
       position:'relative',
       borderRadius:999,
       overflow:'hidden',
   },
   uploadBtnContainer:{
       opacity:0.7,
       position:'absolute',
       right:0,
       bottom:0,
       backgroundColor:'lightgrey',
       width:'50%',
       height:'25%',
   },
   uploadBtn:{
       display:'flex',
       alignItems:"center",
       justifyContent:'center'
   }
})