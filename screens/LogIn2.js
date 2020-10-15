import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import RoundButton from '../components/RoundButton'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

const getFonts = () => {
  return Font.loadAsync({
      'SFPro-Display-Medium' : require('../assets/fonts/SF-Pro-Display-Medium.otf'),
      'permanent-marker' : require('../assets/fonts/PermanentMarker-Regular.ttf')
  })
};

export default function LogIn2() {
  const[fontsLoaded, setFontsLoaded] = useState(false);
    
  if(fontsLoaded) {
      return (
        <View style={styles.container}>
          <Image style={{marginBottom: 5}}source={require('../assets/images/redIcon.png')} />
            <Text style={styles.bodyDark}>Welcome to</Text>
            <Text style={styles.title}>Meet-Me-At</Text>

          
          <TextInput
            style={styles.input}
            placeholder= "Email"
            placeholderTextColor = "#D0D0D0"
            />
            <TextInput
            style={styles.input}
            placeholder= "Password"
            placeholderTextColor = "#D0D0D0"
            />
          
          <Text style={styles.text}>Forgot Password?</Text>
          <RoundButton style={{marginTop: 20, backgroundColor: '#FF6961'}} text="Login" onPress={ () => console.log("Login pressed")} />
          <Text style = {{color: '#D0D0D0', margin: 40}}>────────  OR  ────────</Text>
          <RoundButton style={{backgroundColor: '#E4E4E4'}} text="Create Account" onPress={ () => console.log("Create Account Pressed")} />
        </View>
        )
      } else {
          return (
            <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
          )
        }

};
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCFCFC'
    },
    bodyDark: {
      fontFamily: "SFPro-Display-Medium",
      fontSize: 16,
      color: '#453F3E',
      marginTop: 10
    },
    title: {
      fontFamily: 'permanent-marker',
      color: '#FF6961',
      fontSize: 30,
      marginBottom: 10
    },
    input: {
      borderBottomColor: '#D0D0D0',
      borderBottomWidth: 1,
      width: 270,
      paddingLeft: 5,
      paddingBottom: 5,
      marginTop: 20,
      marginBottom: 10
    },
    text: {
      fontFamily: "SFPro-Display-Medium",
      fontSize: 14,
      color: '#453F3E',
      margin: 5
    },
    break: {

    }
    
  });