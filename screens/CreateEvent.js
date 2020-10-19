import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RoundButton from '../components/RoundButton'
import InvitationButton from '../components/InvitationButton'
import { globalStyles } from '../styles/globalStyles'

export default function CreateEvent() {
    return (
        <View style={[globalStyles.mainBackground, {paddingVertical: 45, paddingHorizontal: 15, flex: 1, alignItems: 'center'}]}>
            <TextInput
                    style={[globalStyles.input, globalStyles.darkText,{fontFamily: "SFProDisplay-Bold",fontSize: 32, alignSelf: 'stretch'}]}
                    placeholder= "Event Title"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                />
            
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TextInput style={[globalStyles.input, {flex: 1, marginRight: 10}]}
                    placeholder= "Start Date"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                    />

                <TextInput style={[globalStyles.input, {flex: 1, marginLeft: 10}]}
                    placeholder= "End Date"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                    />

            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TextInput style={[globalStyles.input, {flex: 1, marginRight: 10}]}
                    placeholder= "Start Time"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                    />

                <TextInput style={[globalStyles.input, {flex: 1, marginLeft: 10}]}
                    placeholder= "End Time"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                    />

            </View>

            <TextInput
                    style={[globalStyles.input, globalStyles.darkText,{fontFamily: "SFProDisplay-Bold", alignSelf: 'stretch'}]}
                    placeholder= "Location"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                />

            <Text style={[globalStyles.subTitle, globalStyles.darkText, {fontFamily: "SFProDisplay-Bold", fontSize: 20, alignSelf: 'flex-start', marginTop: 20, marginBottom: 5}]}>About..</Text>
            <TextInput multiline = {true}
                    numberOfLines = {6}
                    placeholder= "About..."
                    placeholderTextColor = "#D0D0D0"
                    style={{alignSelf: 'flex-start'}}/>

            <Text style={[globalStyles.subTitle, globalStyles.darkText, {fontFamily: "SFProDisplay-Bold", fontSize: 20, alignSelf: 'flex-start', marginTop: 20, marginBottom: 5}]}>Add Guests</Text>
            <TextInput multiline = {true}
                    numberOfLines = {6}
                    placeholder= "Enter Email"
                    placeholderTextColor = "#D0D0D0"
                    style={{alignSelf: 'flex-start'}}/>

        <RoundButton style={{backgroundColor: '#E4E4E4', marginTop: 230}} text="Create Account" onPress={ () => console.log("Save Event")} />
        <RoundButton style={{backgroundColor: '#FF6961', marginVertical: 15}} text="Cancel" onPress={ () => console.log("Cancel Event")} />
        </View>
    )

};