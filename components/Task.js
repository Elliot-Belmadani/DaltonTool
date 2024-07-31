import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput} from "react-native";
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'
import { useState } from "react";

const Task = (props) => {
    const [isLoaded] = useFonts({
        "bunge": require('../assets/fonts/Bungee_400Regular.ttf')
      })
  const [modalVisible, setModalVisible] = useState(false);
    const [isDone, setIsDone] = useState(props.finished)

      if (isDone == false) {
        return (
            <View>
    
            <TouchableOpacity style={styles.Wrapper} onPress={() => setModalVisible(true)}>
                <View style={styles.leftwrap}>
                <View style={styles.circle}></View>
                <Text style={styles.Title}>{props.title}</Text>
                </View>
                <TouchableOpacity style={styles.checkBox} onPress={() => setIsDone(!isDone)}></TouchableOpacity>
            </TouchableOpacity>
    
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
              <TextInput style={styles.InputText} placeholder="Titel">{props.title}</TextInput>
              <TextInput style={styles.InputDescriptionText} placeholder="Beschreibung" multiline={true}>{props.description}</TextInput>

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
            </View>
            
        )
      }
      if (isDone == true) {
        return (
            <View>
    
            <TouchableOpacity style={styles.Wrapper} onPress={() => setModalVisible(true)}>
                <View style={styles.leftwrap}>
                <View style={styles.circle}></View>
                <Text style={styles.TitleFinished}>{props.title}</Text>
                </View>
                <TouchableOpacity style={styles.checkBoxFinished} onPress={() => setIsDone(!isDone)}>
                    <Text style={styles.checkBoxText}>x</Text>
                </TouchableOpacity>
            </TouchableOpacity>
    
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
              <TextInput style={styles.InputText} placeholder="Titel">{props.title}</TextInput>
              <TextInput style={styles.InputDescriptionText} placeholder="Beschreibung" multiline={true}>{props.description}</TextInput>

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
            </View>
            
        )
      }
        
    
    
    

        
    
    
    
}

const styles = StyleSheet.create({
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
      checkBoxText: {
        fontSize: 15,
        fontFamily: "bunge"
      },
    checkBox: {
        width: 23,
        height: 23,
        backgroundColor: "#3E3E3E",
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    checkBoxFinished: {
        width: 23,
        height: 23,
        backgroundColor: "#4EFF9B",
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    leftwrap: {
        flexDirection: "row",
        alignItems: "center",

    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: "#fff",
        marginLeft: 15,
        borderRadius: "50%"
    },
    Wrapper: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        width: Dimensions.get('window').width - 40,
        height: 50,
        backgroundColor: "#232528",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Title: {
        fontSize: 15,
        color: "#fff",
        marginLeft: 10,
        fontFamily: "bunge",

    },
    TitleFinished: {
        textDecorationLine: "line-through",
        textDecorationStyle: "double",
        fontSize: 15,
        color: "#fff",
        marginLeft: 10,
        fontFamily: "bunge",

    }
})

export default Task