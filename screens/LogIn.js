import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'

export default function LogIn() {
  
  return (
    <View style={[globalStyles.container, globalStyles.mainBackground]}>
      <Image style={{marginBottom: 5}}source={require('../assets/images/redIcon.png')} />          
      <Text style={[globalStyles.subTitle, { marginTop: 10 }]}>Welcome to</Text>
      <Text style={styles.appTitle}>Meet-Me-At</Text>

      <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} placeholder= "Email" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect = 'false' />
      <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} placeholder= "Password" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect = 'false' secureTextEntry = 'true'/>   
      <Text style={[globalStyles.textBody, globalStyles.darkText, { marginTop: 7, marginBottom: 15}]}>Forgot Password?</Text>
      
      <RoundButton style={{marginTop: 22, backgroundColor: '#FF6961'}} text="Login" onPress={ () => console.log("Login pressed")} />
      <Text style = {[globalStyles.lightText, globalStyles.textBody, { margin: 20 }]}>────────  or  ────────</Text>
      <RoundButton style={{backgroundColor: '#E4E4E4'}} text="Create Account" onPress={ () => console.log("Create Account Pressed")} />
    </View>
  )
};
  
const styles = StyleSheet.create({
  appTitle: {
    fontFamily: 'PermanentMarker-Regular',
    color: '#FF6961',
    fontSize: 30,
    marginBottom: 25
  },    
});