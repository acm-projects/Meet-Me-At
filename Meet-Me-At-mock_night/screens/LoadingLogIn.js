import { NavigationHelpersContext } from "@react-navigation/native";
import React, {useContext} from "react";
import { Alert, ActivityIndicator, StyleSheet, Text, View} from "react-native";
import { AuthContext } from '../context'
let tool = require("../backend_tools.js");

export default function LoadingLogIn({navigation, route}) {
  const { signIn } = useContext(AuthContext);
  const { username, password } = route.params;
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      //alert('Screen is focused');
      let user = undefined;
        tool.getUser(username).then((res) => {
              user = res;
              
            if (user === undefined || user.password !== password) {
                  Alert.alert("Invalid Username or Password", "", [{ text: "OK" }], { cancelable: false })
                  navigation.navigate('LogIn');
            } else {
                tool.setAccount(user);
                signIn();
            }
        });
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
  }, [])
      
  
  return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large"  />
        {/* color="#FCFCFC" */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#FF6961"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
