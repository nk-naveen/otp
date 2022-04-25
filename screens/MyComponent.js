import * as React from 'react';
import { RadioButton } from 'react-native-paper';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

export const MyComponent = () => {
  const [value, setValue] = React.useState('first');

  return (
     <View style={styles.buttonStyle1} >
         <Text style={{fontSize:15}}>Register As:</Text>
         

    <RadioButton.Group style={styles.buttonStyle} onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item buttonSize={2} labelStyle={{fontSize: 12, paddingTop: 0    }} label="Trainee" value="first" />
      <RadioButton.Item labelStyle={{fontSize: 12,paddingTop: 0}} label="Trainer" value="second" />
      <RadioButton.Item labelStyle={{fontSize: 12,paddingTop: 0}} label='Organization' value='third '/>
      <RadioButton.Item labelStyle={{fontSize: 12}} label='Parent' value='fourth '/>
    </RadioButton.Group></View>
  );
};

export default MyComponent;
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



