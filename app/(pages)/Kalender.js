import { StyleSheet,View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'

import Statusbars from '../../components/Statusbar.js';
import Task from '../../components/Task';
import HeaderTitle from '../../components/HeaderTitle.js';
import AddButton from '../../components/addButton.js';

function getCurrentWeekNumber() {
  const currentDate = new Date();
  // Copy date so we don't modify the original
  const copyDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number, make Sunday's day number 7
  copyDate.setUTCDate(copyDate.getUTCDate() + 4 - (copyDate.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(copyDate.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil((((copyDate - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

const calendar = () => {
  const [isLoaded] = useFonts({
    "bunge": require('../../assets/fonts/Bungee_400Regular.ttf')
  })

return (


       <View style={styles.mainWrapper}>
          <View style={styles.contentWrapper}>

          <HeaderTitle site="Kalender"/>
          <Text style={{fontFamily: 'bunge', color: '#fff', fontSize: 13, marginLeft: 20}}>Es ist KW {String(getCurrentWeekNumber())}</Text>
          <View style={styles.calendarWrapper}>

          </View>
          
        {/* <TouchableOpacity style={styles.addButton} >
          <Text style={{fontSize: 30, fontFamily: "bunge"}}>+</Text>
        </TouchableOpacity> */}
     </View>
    </View>
    
)
}
const styles = StyleSheet.create({

calendarWrapper: {
  width: "100%",
  height: 350,
  backgroundColor: "#252525",
  marginTop: 25,
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



export default calendar;