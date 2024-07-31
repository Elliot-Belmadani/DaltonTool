import { StyleSheet,View, Text, Dimensions} from 'react-native';
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'

const styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: "#59DFAF",
    },
    contentWrapper: {
        marginTop: 80,
        backgroundColor: "#1A1A1A",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: Dimensions.get('window').height - 180,
    },

    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        fontFamily: "Bungee",
        fontSize: 20,
        color: "#fff",
        paddingBottom: 20,
    }
})

export default styles;