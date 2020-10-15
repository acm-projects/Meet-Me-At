import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function RoundButton({ text, onPress, style }){
    return (
        <TouchableOpacity onPress={onPress} delayPressIn={0}>
            <View style={[styles.button, style]}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 270,
        height: 50,
    },
    buttonText: {
        color: '#453F3E',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        // fontFamily: "SFPro-Display-Medium",
    }
})