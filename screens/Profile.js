import React, { useState, useContext } from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import { AuthContext } from '../context'

export default function Profile({navigation}) {
    const { signOut } = useContext(AuthContext);

    return(
        <View style={[{flex: 1, padding: 25}, globalStyles.mainBackground]}>
            <Image style={{alignSelf: 'center', height: 150, width: 150, borderRadius: 25, marginBottom: 40, position: 'relative', marginTop: 40, top: 20}}source={require('../assets/images/blue-image.jpg')} /> 
            <Text style={[globalStyles.subTitle, globalStyles.SFProDisplay_Bold, { fontSize: 18, marginTop: 10, top: 10, marginBottom: 8 }]}>UserInfo: </Text> 
            
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "John Doe" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Name</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "john_" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Username</Text>

            <Text style={[globalStyles.subTitle, globalStyles.SFProDisplay_Bold, { fontSize: 18, marginTop: 25 }]}>Account Info: </Text> 
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "johndoe@gmail.com" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Email</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "password" autoCapitalize = 'none' autoCorrect={false} secureTextEntry={true}/>
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Password</Text>

            <RoundButton style={{backgroundColor: '#E4E4E4', top: 45, marginTop: 10, alignSelf: 'center'}} text="Save" onPress={ () => navigation.navigate("Home")} />
            <RoundButton style={{backgroundColor: '#FF6961', marginTop: 10, top: 47, alignSelf: 'center'}} text="Log Out" onPress={ () => signOut()} />
            <Text style={[globalStyles.textBody, globalStyles.darkText, { marginTop: 5, marginBottom: 15, alignSelf: 'center', top: 50}]}>Delete Account?</Text>
        </View>
    )
};