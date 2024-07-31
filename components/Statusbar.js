import { View, Text, StyleSheet, Dimensions } from "react-native";
import ProgressBar from "react-native-progress/Bar";

const Statusbar = (props) => {
  console.log(parseFloat(props.progress))
    return (
        <View style={styles.progressbar}>
        <ProgressBar progress={eval(props.progress)} width={Dimensions.get('window').width - 120} height={20} color="#4EFF9B" borderWidth={0} unfilledColor="#232528" borderRadius={50} />
        <Text style={styles.progressbarText}>{props.progress}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    progressbarText: {
      fontSize: 20,
      color: "#fff",
      fontFamily: "bunge"
    },
    progressbar: {
      marginLeft: 20,
      marginRight: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      marginBottom: 15
    }
  })
  
  
export default Statusbar;