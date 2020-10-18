import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function InvitationButton({ eventTitle, eventDate, onPress, style }){
    return (
        <TouchableOpacity onPress={onPress} delayPressIn={0}>
            <View style={[styles.button, style]}>
                <Text style={styles.buttonHeader}>{ eventTitle }</Text>
                <Text style= {styles.buttonSubHeading}>{ eventDate }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        // height: 50,
        // width: 50

    },
    buttonHeader: {
        color: '#453F3E',
        fontSize: 22,
        // fontFamily: "SFPro-Display-Medium",
    },
    buttonSubHeading: {
        color: '#d0d0d0',
        fontSize: 16
    }

})