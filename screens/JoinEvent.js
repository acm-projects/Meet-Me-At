import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import RoundButton from '../components/RoundButton'
import InvitationButton from '../components/InvitationButton'

export default function JoinEvent() {
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: '#453F3E'}}>Your Invitations</Text>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
            </View>
            <View style={styles.container2}>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: '#453F3E'}}>Join Event</Text>
                <TextInput
                    style={styles.input}
                    placeholder= "code/link"
                    placeholderTextColor = "#D0D0D0"
                    />
                <RoundButton style={{marginTop: 20, backgroundColor: '#FF6961', alignSelf: 'center', marginTop: 35}} text="Join" onPress={ () => console.log("Join Pressed")} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#fcfcfc',
        width: 340,
        height: 450,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        margin: 10
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    container: {
        flex: 1,
        backgroundColor: '#e4e4e4',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container2: {
        backgroundColor: '#fcfcfc',
        width: 340,
        height: 220,
        padding: 15,
        borderRadius: 10,
        margin: 10
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    input: {
        borderBottomColor: '#D0D0D0',
        borderBottomWidth: 1,
        width: 300,
        paddingLeft: 5,
        paddingBottom: 5,
        alignSelf: 'center',
        marginTop: 30
      },
});