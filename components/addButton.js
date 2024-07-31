import { StyleSheet,View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'



const AddButton = () => {
    const [isLoaded] = useFonts({
      "bunge": require('../assets/fonts/Bungee_400Regular.ttf')
    })
 
  return (



          <TouchableOpacity style={styles.addButton}  >
            <Text style={{fontSize: 30, fontFamily: "bunge"}}>+</Text>
          </TouchableOpacity>

      
  )
}
const styles = StyleSheet.create({

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
})




export default AddButton;