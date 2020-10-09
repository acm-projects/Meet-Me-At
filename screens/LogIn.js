import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import RoundButton from '../components/RoundButton'

export default function LogIn() {
    return (
      <View style={styles.container}>
        <Image style = {{height: 65, width: 65, margin: 5}} source={require('../assets/images/M.png')} resizeMode="contain" />
        <RoundButton style={{margin: 30, backgroundColor: '#B25454'}} text="Sign in with Google" onPress={() => console.log("Google button pressed")} />
        
        <View style={{borderWidth: 0.75,
          borderColor:'white',
          margin:10, width: 250}} />
        <Text style={styles.body}>Log in with Email</Text>
        <TextInput
          style={styles.input}
          placeholder= "Email"
          placeholderTextColor = "#fff"
        />
        <TextInput
          style={styles.input}
          placeholder= "Password"
          placeholderTextColor = "#fff"
        />
        <RoundButton style={{margin: 30, backgroundColor: '#B25454'}} text="Login" onPress={() => console.log("login button pressed")} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5B5353'
    },

    input: {
      height: 50,
      width: 285,
      backgroundColor: 'rgba(54, 49, 49, 0.86)',
      color: "white",
      padding: 10,
      marginTop: 10,
    }, 
    body: {
      margin: 20,
      
      color: "white",
      fontWeight: 'bold'
    }
    
  });