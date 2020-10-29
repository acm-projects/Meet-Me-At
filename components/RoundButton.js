import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

export default function RoundButton({ text, onPress, style }){
    return (
        <TouchableOpacity onPress={onPress} delayPressIn={0}>
            <View style={[styles.button, style]}>
                <Text style={[styles.buttonText, globalStyles.SFProDisplay_Bold]}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        // shadowOpacity: 0.1,
        // shadowRadius: 10,
        // shadowOffset: {
        //     width: -5,
        //     height: 10
        //   },
        // shadowColor: '#453F3E'
    },
    buttonText: {
        color: '#453F3E',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        //fontFamily: { globalStyles.},
    }
})