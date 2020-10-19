import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

export default function Event({onPress, style}){
    return (
        <TouchableOpacity style={[styles.button, styles.container, style]} onPress={onPress} delayPressIn={0}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[globalStyles.SFProText_Heavy, {fontSize: 24, color: '#fff'}]}>26</Text>
                <Text style={[globalStyles.SFProText_Regular, {fontSize: 12, color: '#fff'}]}>Sat</Text>
            </View>

            <View style={{flex: 7, marginHorizontal: 10, justifyContent: 'center'}}>
                <Text style={[globalStyles.SFProDisplay_Bold, {fontSize: 20, marginVertical: 1, color: '#fff'}]}>Event Title</Text>
                <Text style={[globalStyles.SFProText_Light, {fontSize: 14, marginVertical: 1, color: '#fff'}]}>10:30 PM - 11:00 PM</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 340, 
        height: 74,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        marginVertical: 5
    },
    button: {
        //backgroundColor: '#FFA49F',
        borderRadius: 10
        //FFA49F - pink
        //#FF6961 - red
    },
    date: {

    }
});