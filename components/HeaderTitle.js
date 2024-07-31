import { Text, StyleSheet } from "react-native"
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'


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

const HeaderTitle = (props) => {
    const [isLoaded] = useFonts({
        "bunge": require('../assets/fonts/Bungee_400Regular.ttf')
      })
      if (props.site == "Heute") {
        return (
            <Text style={styles.header}>Heute</Text>
    
        )
      }
      if (props.site == "Woche") {
        return (
            <Text style={styles.header}>Alle Daltonaufgaben KW {String(getCurrentWeekNumber())} </Text>
    
        )
      }
      if (props.site == "Kalender") {
        return (
            <Text style={styles.header}>Daltonkalender KW {String(getCurrentWeekNumber())} </Text>
    
        )
      }
      if (props.site == "Einstellungen") {
        return (
            <Text style={styles.header}>Einstellungen </Text>
    
        )
      }
      else {
        return (
            <Text>Not Defined</Text>
        )
      }
    
}

const styles = StyleSheet.create({
      header: {
          paddingTop: 20,
          paddingHorizontal: 20,
          fontFamily: "bunge",
          fontSize: 20,
          color: "#fff",
          paddingBottom: 15,
      }
  })

export default HeaderTitle;