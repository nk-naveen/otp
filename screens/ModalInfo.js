import * as React from 'react';
import { Text, View, StyleSheet,TextInput ,TouchableOpacity,Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons'; 




const ModalInfo = ({modalVisible, setModalVisible})=>{

  return (
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
           flex: 1,
          justifyContent: "center",
          alignItems: "center",
          
        }}>
          <View
          style={{
            width:200,height:200,backgroundColor:"gray",borderWidth:2,
            justifyContent:"center",alignItems:"center"

          }}
          >

             <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
             
                <MaterialIcons name="cancel" size={24} color="black" />
             </TouchableOpacity>

          </View>
        </View>
      </Modal>
  )
}


const TextInputWithModal = ()=>{
  const [modalVisible, setModalVisible] = React.useState(false);
  const [AllatNev,setAllatNev]= React.useState("");
  return (
    <View style={styles.textInputContainer}>
       <TextInput
        placeholder="Állat neve"
        value={AllatNev}
        style={styles.textBox}
        onChangeText={(text) => setAllatNev(text)}
        />
        
        <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
          <AntDesign name="infocirlceo" size={24} color="black" />
        </TouchableOpacity>
      <ModalInfo modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
        <TextInputWithModal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
  },
  textInputContainer:{
      borderRadius:10,
      padding: 10,
      flexDirection:"row",
      margin:15,

      borderWidth:2,
  },
  textBox:{
    fontFamily:'sans-serif',
    marginRight:20,
  },
 
});
