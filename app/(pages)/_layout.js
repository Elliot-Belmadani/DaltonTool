import { Tabs } from "expo-router"
import { StyleSheet, Image } from "react-native"
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'
import Ionicons from '@expo/vector-icons/Ionicons';

export default () => {
    const [isLoaded] = useFonts({
        "bunge": require('../../assets/fonts/Bungee_400Regular.ttf')
      })
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#4EFF9B", tabBarInactiveTintColor: "#fff", tabBarStyle: {backgroundColor: "#232528", borderTopColor: "#232528", height: 100}, tabBarLabelStyle: { fontSize: 12, fontFamily: "bunge",  } }} >
            <Tabs.Screen name="Heute" options={{ tabBarIcon: ({ color }) => <Ionicons size={30} name="planet-outline" color={color} />}}/>
            <Tabs.Screen name="Woche" options={{ tabBarIcon: ({ color }) => <Ionicons size={30} name="today-outline" color={color} />}}/>
            <Tabs.Screen name="Kalender" options={{ tabBarIcon: ({ color }) => <Ionicons size={30} name="calendar-outline" color={color}/> }}/>
            <Tabs.Screen name="Ich" options={{ tabBarIcon: ({ color }) => <Ionicons size={30} name="cog-outline" color={color} />}}/>



        </Tabs>
    )
   
}

