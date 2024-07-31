import { StyleSheet, Dimensions} from 'react-native';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'

const navbarStyles = StyleSheet.create({
    navbar: {
        width: "100%",
        height: 100,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "#232528",
    },
    navbarItems: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Bungee",


    },

})

export default navbarStyles;