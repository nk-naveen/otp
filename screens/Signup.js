import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';
import MyComponent from './MyComponent';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { TextInput } from 'react-native-paper';
import ModalInfo from './ModalInfo';
import { Models } from './Modals';
import { EvilIcons } from '@expo/vector-icons'; 
import UploadImage from './UploadImage';


export function Signup() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Signup</Text>
      </View>
      <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
      </View>

      {/* First name */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            variant="outline"
            placeholder="first name"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* second  name */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            variant="outline"
            placeholder="Second Name"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* phone number */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
          keyboardType = 'numeric'
            variant="outline"
            placeholder="phone number"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            
          />
                    
        </View><Button style={styles.buttonDesign1} name='search' color="black" onPress={()=>fetchWeatherData(cityName)}>verify</Button>
      </View>
      {/* <View >
  < Models />

</View> */}
{/* phone number
<View style={styles.container}>
      <View style={styles.textBoxParent}>
        <TextInput style={styles.textBox} placeholder="Állat neve"/>
        <TouchableOpacity style={styles.textBoxButton} onPress={() => {
          //launch your modal
        }}>
          <Text>i</Text>
        </TouchableOpacity>
      </View>
    </View> */}




     <View style={styles.buttonStyle1}>
       <MyComponent />
     </View>
     <View style={styles.buttonStyle1}>
       <UploadImage />
     </View>


      {/* Button */}
      <View style={styles.buttonStyle}>

      <TouchableOpacity onPress={() => navigation.navigate("Maincontainer")} ><Button onPress={() => navigation.navigate("MainContainer")} style={styles.buttonDesign}>
            REGISTER NOW
        </Button></TouchableOpacity>




        {/* <Button onPress={() => navigation.navigate("MainContainer")} style={styles.buttonDesign}>
            REGISTER NOW
        </Button> */}
      </View>

      
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:0,
  },
  buttonStyle1:{
    marginTop:10,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  buttonDesign1:{
    backgroundColor:'#026efd',
    width: 70,
    height: 40,
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textBoxParent: {
    justifyContent: 'center'
  },
  textBox:{
      borderWidth:2,
      borderColor: 'gray',
      margin:15,
      borderRadius:10,
      padding: 10,
  },
  textBoxButton: {
    position: 'absolute',
    right: 20,
    zIndex: 100,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
