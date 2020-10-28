import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'

export default function SignIn() {

   return (
      
      <View style={[globalStyles.container, globalStyles.mainBackground]}>
         <Image style={{marginBottom: 5}}source={require('../assets/images/redIcon.png')} />
         <RoundButton style={{marginTop: 22, backgroundColor: '#FF6961'}} text="Sign in with Google" onPress={ () => console.log("Sign In with Google pressed")} />
         <Text style = {[globalStyles.lightText, globalStyles.textBody, { margin: 20 }]}>────────  OR  ────────</Text>
         <Text style={[globalStyles.textBody, globalStyles.darkText, { marginTop: 7, marginBottom: 15}]}>Sign up with Email</Text>
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} placeholder= "Name" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect={false} />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} placeholder= "Email" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect={false} />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} placeholder= "Password" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect = {false} secureTextEntry = {true}/>
         <RoundButton style={{backgroundColor: '#E4E4E4', margin: 20 }} text="Create Account" onPress={ () => console.log("Create Account Pressed")} />
         
      </View>


   )





}

const styles = StyleSheet.create({

   container: {
		flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})