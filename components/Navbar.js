import { TouchableOpacity, View, Text} from "react-native";
import navbarStyles from "../styles/navbarStyle";
import { router } from "expo-router";

const Navbar = () => {
    return (
        <View style={navbarStyles.navbar}>
        <TouchableOpacity style={navbarStyles.navbarItems} onPress={router.push('../uwu.js')}>
            <Text style={navbarStyles.navbarItems}>
            Heute
            </Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.navbarItems}>
        <Text style={navbarStyles.navbarItems}>
            Alle
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.navbarItems}>
        <Text style={navbarStyles.navbarItems}>
            Kalender
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.navbarItems}>
        <Text style={navbarStyles.navbarItems}>
            Einstellungen
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Navbar;