import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import { AuthContext } from '../context'

export default function LogIn({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const[username, setUserName] = useState(null);
  const[password, setPassword] = useState(null);

  const logIn = () => {
   if (!username || !password) {
    Alert.alert(
      "Please enter your username and password",
      "",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );} 
    else {
      signIn()
    }
  }

  return (
    <View style={[globalStyles.container, globalStyles.mainBackground]}>
      <Image style={{marginBottom: 5}}source={require('../assets/images/redIcon.png')} />          
      <Text style={[globalStyles.subTitle, { marginTop: 10 }]}>Welcome to</Text>
      <Text style={styles.appTitle}>Meet-Me-At</Text>

      <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} onChangeText={text => setUserName(text)} placeholder= "Username" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect={false} />
      <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]} onChangeText={text => setPassword(text)} placeholder= "Password" placeholderTextColor = "#D0D0D0" autoCapitalize = 'none' autoCorrect = {false} secureTextEntry = {true}/>   
      <Text style={[globalStyles.textBody, globalStyles.darkText, { marginTop: 7, marginBottom: 15}]}>Forgot Password?</Text>
      
      <RoundButton style={{top: 13, marginTop: 30, marginBottom: 20, backgroundColor: '#FF6961'}} text="Login" onPress={ () => logIn() } />
      <Text style = {[globalStyles.lightText, globalStyles.textBody, { top: 23 }]}>──────    OR    ──────</Text>
      <RoundButton style={{marginTop: 20, top: 28, backgroundColor: '#E4E4E4'}} text="Create Account" onPress={ () => navigation.navigate("SignUp")} />
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