import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'

export default function Profile({navigation}) {
    return(
        <View style={[{flex: 1,
            justifyContent: 'center', padding: 25}, globalStyles.mainBackground]}>
            <Image style={{alignSelf: 'center', height: 150, width: 150, borderRadius: 25, marginBottom: 40}}source={require('../assets/images/blue-image.jpg')} /> 
            <Text style={[globalStyles.subTitle, { marginTop: 10 }]}>UserInfo: </Text> 
            
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "John Doe" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={globalStyles.lightText}>Name</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "john_" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={globalStyles.lightText}>Username</Text>

            <Text style={[globalStyles.subTitle, { marginTop: 25 }]}>Account Info: </Text> 
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "johndoe@gmail.com" autoCapitalize = 'none' autoCorrect={false} />
            <Text style={globalStyles.lightText}>Email</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue= "password" autoCapitalize = 'none' autoCorrect={false} secureTextEntry={true}/>
            <Text style={globalStyles.lightText}>Password</Text>

            <RoundButton style={{backgroundColor: '#E4E4E4', marginTop: 110}} text="Save" onPress={ () => navigation.navigate("Home")} />
        </View>
    )
};