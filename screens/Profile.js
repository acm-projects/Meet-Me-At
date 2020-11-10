import React, { useState, useContext } from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import { AuthContext } from '../context'
let tool = require('../backend_tools.js');
export default function Profile({navigation}) {
    const { signOut } = useContext(AuthContext);
    const [name, setName] = useState(tool.getAccount().name);
    const [password, setPassword] = useState(tool.getAccount().password);
    const [email, setEmail] = useState(tool.getAccount().email);
    async function save() {
        let user = tool.getAccount();
        user.name = name;
        user.password = password;
        user.email = email;
        tool.setAccount(user);
        await tool.updateUser(user);
    }
    return(
        <View style={[{padding: 25}, globalStyles.mainBackground]}>
            <Image style={{alignSelf: 'center', height: 100, width: 100, borderRadius: 25, marginBottom: 40, position: 'relative', marginTop: 20, top: 20}}source={require('../assets/images/blue-image.jpg')} />
            <Text style={[globalStyles.subTitle, globalStyles.SFProDisplay_Bold, { fontSize: 18, marginTop: 10, top: 10, marginBottom: 8 }]}>User Information </Text>

            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue={ tool.getAccount().name } onChangeText={(text) => setName(text)} autoCapitalize = 'none' autoCorrect={false} />
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Name</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue={ tool.getAccount().username } autoCapitalize = 'none' autoCorrect={false} editable={false}/>
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Username</Text>

            <Text style={[globalStyles.subTitle, globalStyles.SFProDisplay_Bold, { fontSize: 18, marginTop: 25 }]}>Account Information </Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue={ tool.getAccount().email } onChangeText={(text) => setEmail(text)} autoCapitalize = 'none' autoCorrect={false} />
            <Text style={[globalStyles.lightText, { fontSize: 12}]}>Email</Text>
            <TextInput style={[globalStyles.input, globalStyles.darkText, globalStyles.textBody, { alignSelf: 'stretch', marginBottom: 3} ]} defaultValue={ tool.getAccount().password } onChangeText={(text) => setPassword(text)} autoCapitalize = 'none' autoCorrect={false} secureTextEntry={true}/>
            <Text style={[globalStyles.lightText, { fontSize: 12, marginBottom: 30}]}>Password</Text>

            <RoundButton style={{backgroundColor: '#E4E4E4', marginVertical: 5, alignSelf: 'center'}} text="Save" onPress={ () => save().then(navigation.navigate("Home"))} />
            <RoundButton style={{backgroundColor: '#FF6961', marginTop: 2, alignSelf: 'center'}} text="Log Out" onPress={ () => signOut()} />
        </View>
    )
};
