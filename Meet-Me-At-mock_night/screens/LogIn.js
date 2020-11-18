import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import { AuthContext } from '../context'
let tool = require("../backend_tools.js");
export default function LogIn({ navigation }) {
  //const { signIn } = useContext(AuthContext);
  const[username, setUserName] = useState(null);
  const[password, setPassword] = useState(null);
  const[working, setWorking] = useState(false);
  function login() {
      if (username === null || password === null) {
          Alert.alert("Please enter your Username and Password", "", [{ text: "OK" }], { cancelable: false });
    //   } else {
    //       setWorking(true);
    //       let user = undefined;
    //       tool.getUser(username).then((res) => {
    //           setWorking(false);
    //           user = res;
    //           if (user === undefined || user.password !== password) {
    //               Alert.alert("Invalid Username or Password", "", [{ text: "OK" }], { cancelable: false })
    //           } else {
    //               tool.setAccount(user);
    //               signIn();
    //           }
    //       });
      
        } else {
            navigation.navigate("LoadingLogIn", {username, password});
    //       setWorking(true);
    //       let user = undefined;
       };
  }
      return (
          <View style={[globalStyles.container, globalStyles.mainBackground]}>
              <Image style={{marginBottom: 5}} source={require('../assets/images/redIcon.png')}/>
              <Text style={[globalStyles.subTitle, {marginTop: 10}]}>{(working) ? "WORKING" : "Welcome to"}</Text>
              <Text style={styles.appTitle}>Meet-Me-At</Text>
              <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, {width: 270}]}
                         onChangeText={text => setUserName(text)} placeholder="Username" placeholderTextColor="#D0D0D0"
                         autoCapitalize='none' autoCorrect={false}/>
              <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, {width: 270}]}
                         onChangeText={text => setPassword(text)} placeholder="Password" placeholderTextColor="#D0D0D0"
                         autoCapitalize='none' autoCorrect={false} secureTextEntry={true}/>
              <Text style={[globalStyles.textBody, globalStyles.darkText, {marginTop: 7, marginBottom: 15}]}>Forgot your
                  Password?</Text>

              <RoundButton style={{ marginVertical: 10, top: 40, backgroundColor: '#FF6961'}} text="Login"
                           onPress={() => login()}/>
              <Text style={[globalStyles.lightText, globalStyles.textBody, { top: 50 }]}>────── OR ──────</Text>
              <RoundButton style={{ marginVertical: 20, backgroundColor: '#E4E4E4', top: 50}} text="Create Account"
                           onPress={() => navigation.navigate("SignUp")}/>
          </View>
      );

};

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: 'PermanentMarker-Regular',
    color: '#FF6961',
    fontSize: 30,
    marginBottom: 25
  },
});
