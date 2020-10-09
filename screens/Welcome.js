import React, { useState } from 'react';
//import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import RoundButton from '../components/RoundButton'
//import { AppLoading } from 'expo'

// const getFonts = () => {
//     return Font.loadAsync({
//         'permanent-marker' : require('../assets/fonts/PermanentMarker-Regular.ttf')
//     })
// };

export default function Welcome() {
    //const[fontsLoaded, setFontsLoaded] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.body}>Welcome to</Text>
            <Text style={styles.title}>MEET-ME-AT</Text>
            <RoundButton style={{marginTop: 50, backgroundColor: '#B25454'}} text="Login"onPress={ () => console.log("Go to log in page")} />
            <RoundButton style={{margin: 15, backgroundColor: '#B0AEAE' }} text="Sign Up" onPress={() => console.log("Go to sign up page")} /> 
        </View>
    )
};
//navigation.navigate('LogIn')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5B5353'
      },
      body: {
        margin: 0,
        color: "white",
        fontWeight: 'bold', 
        fontSize: 24
      },
      title: {
          //fontFamily: 'permanent-marker', 
          fontSize: 40,
          color: 'white',
          marginBottom: 15
        }
});