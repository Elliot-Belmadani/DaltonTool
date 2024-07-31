import { StyleSheet,View, Text, Dimensions, TouchableOpacity, Modal, TextInput} from 'react-native';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'
import { useState } from 'react'


import Statusbars from '../../components/Statusbar.js';
import Task from '../../components/Task';
import HeaderTitle from '../../components/HeaderTitle.js';
import AddButton from '../../components/addButton.js';

const today = () => {
    const [isLoaded] = useFonts({
      "bunge": require('../../assets/fonts/Bungee_400Regular.ttf')
    })
  const [modalVisible, setModalVisible] = useState(false);

 
  return (


         <View style={styles.mainWrapper}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Aufgabe Bearbeiten</Text>
              <TextInput style={styles.InputText} placeholder="Titel"></TextInput>
              <TextInput style={styles.InputDescriptionText} placeholder="Beschreibung" multiline={true}></TextInput>

              <View style={{flexDirection: "row", padding: 20, justifyContent: "flex-end"}}>

              <TouchableOpacity
                style={styles.buttoncancel}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>Abbrechen</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttondone}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>Fertig</Text>
              </TouchableOpacity>
              </View>
              
            </View>
          </View>
        </Modal>
            <View style={styles.contentWrapper}>

            <HeaderTitle site="Heute"/>
            <Statusbars progress="1/10"/>
            
            <Task title={"adsdasdas"} finished={true}/>
            <Task title={2} finished={false}/>
            <Task title={3} finished={false}/>
            <Task title={4} finished={false}/>
            <Task title={5} finished={false}/>
            <Task title={6} finished={false}/>
            <Task title={7} finished={false}/>


            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}  >
            <Text style={{fontSize: 30, fontFamily: "bunge"}}>+</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.addButton} >
            <Text style={{fontSize: 30, fontFamily: "bunge"}}>+</Text>
          </TouchableOpacity> */}
       </View>
      </View>
      
  )
}
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    shadowColor: '#1A1A1A',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    height: Dimensions.get('window').height - 100,
    top: 80,
  },
  buttondone: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    backgroundColor: "#4EFF9B",
    fontFamily: 'bunge',
    marginLeft: 10,


  },
  buttoncancel: {
    fontFamily: 'Bunge',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    backgroundColor: "#E9454D",
    
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },

  modalText: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontFamily: "bunge",
    fontSize: 20,
    color: "#fff",
    paddingBottom: 15,
    textAlign: "left"
  },
  InputDescriptionText: {
    fontSize: 20,
    color: "white",
    padding: 10,
    margin: 20,
    marginTop: 0,
    backgroundColor: "#232528",
    fontFamily: 'bunge',
    height: 100
},
InputText: {
    fontSize: 20,
    color: "white",
    padding: 10,
    margin: 20,
    marginTop: 0,
    backgroundColor: "#232528",
    fontFamily: 'bunge'
},
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: "#4EFF9B",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: Dimensions.get('window').height -250,
  },
  modalView: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    shadowColor: '#1A1A1A',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    height: Dimensions.get('window').height - 100,
    top: 80,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontFamily: "bunge",
    fontSize: 20,
    color: "#fff",
    paddingBottom: 15,
    textAlign: "left"
  },

    mainWrapper: {
        backgroundColor: "#59DFAF",
    },
    contentWrapper: {
        marginTop: 80,
        backgroundColor: "#1A1A1A",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: Dimensions.get('window').height - 70,
    },
    

})



export default today;