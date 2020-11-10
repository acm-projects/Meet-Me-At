import React, { useState, useContext } from 'react';
import { Text, View, TextInput, Image, Alert } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import { AuthContext } from '../context'
let tool = require('../backend_tools.js');

export default function SignUpPage({navigation}) {
   const { signIn } = useContext(AuthContext);
   const [name, setName] = useState(null);
   const[username, setUserName] = useState(null);
   const[email, setEmail] = useState(null);
   const[password, setPassword] = useState(null);
   const[secondPassword, setSecondPassword] = useState(null);
   const[working, setWorking] = useState(false);

   function createAccount() {
       if (name === null || username === null || password === null || email === null || secondPassword === null) {
           Alert.alert("Please enter in your", "Account Information", [{ text: "OK" }], { cancelable: false });
       } else if (password !== secondPassword) {
           Alert.alert("Un-matching Passwords", "Please re-enter your Password", [{ text: "OK" }], { cancelable: false });
       } else {
           let user = tool.toUserData(name, username, password, email, "", []);
           setWorking(true);
           tool.getUser(user.username).then((res) => {
               if (res === "") {
                   tool.addUser(user);
                   tool.setAccount(user);
                   setWorking(false);
                   signIn();
               } else {
                   setWorking(false);
                   Alert.alert("Username already Exists", "Please enter a new Username", [{ text: "OK" }], { cancelable: false });
               }
           });
       }
   }

   return (

      <View style={[globalStyles.container, globalStyles.mainBackground]}>
         <Image style={{marginBottom: 5}}source={require('../assets/images/redIcon.png')} />
         {/* <RoundButton style={{marginTop: 22, backgroundColor: '#FF6961'}} text="Sign in with Google" onPress={ () => console.log("Sign In with Google pressed")} /> */}

         {/* <Text style = {[globalStyles.lightText, globalStyles.textBody, { top: 23 }]}>──────    OR    ──────</Text> */}
         <Text style={[globalStyles.SFProText_Bold, globalStyles.darkText, { fontSize: 22, marginTop: 15, marginBottom: 15}]}>{(working) ? "WORKING" : "Create Account"}</Text>

         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { marginTop: 30, width: 270} ]}
            placeholder= "Name"
            placeholderTextColor = "#D0D0D0"
            autoCapitalize = 'none'
            autoCorrect={false}
            onChangeText= {text => setName(text)}
            />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]}
            placeholder= "Username"
            placeholderTextColor = "#D0D0D0"
            autoCapitalize = 'none'
            autoCorrect={false}
            onChangeText = { text => setUserName(text)}
            />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]}
            placeholder= "Email"
            placeholderTextColor = "#D0D0D0"
            autoCapitalize = 'none'
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
            />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270} ]}
            placeholder= "Password"
            placeholderTextColor = "#D0D0D0"
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
            onChangeText={text => setPassword(text)}
            />
         <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { width: 270, marginBottom: 60} ]}
            placeholder= "Re-enter password"
            placeholderTextColor = "#D0D0D0"
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
            onChangeText={text => setSecondPassword(text)}
            />

         <RoundButton style={{backgroundColor: '#FF6961',  marginTop: 20}} text="Create Account" onPress={ () => createAccount()} />
      </View>

   )
}
