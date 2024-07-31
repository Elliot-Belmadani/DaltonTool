import { StyleSheet,View, Text, Dimensions} from 'react-native';
import { Redirect } from 'expo-router';



const Home = () => {
    
      return <Redirect href="/Heute" />
    // return (

        // <View style={styles.mainWrapper}>
        //     <View style={styles.contentWrapper}>
        //     <Text style={styles.header}>Heute</Text>
            
        //     <Task/>

        // </View>
        // <Navbar />
        // </View>
    // )
}



export default Home;