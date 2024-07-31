import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native';

const Layout = () => {
    
    
    return (
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(pages)"/>
        </Stack>
    ) ;
}


export default Layout