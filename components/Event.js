import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Event({ info, onPress, style}){
    const event = JSON.parse(info);

    const day = days[event.day - 1]
    return (
        <TouchableOpacity style={[styles.button, styles.container, style]} onPress={onPress} delayPressIn={0}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={[globalStyles.SFProText_Heavy, {fontSize: 24, color: '#fff'}]}>{event.startDate.substr(event.startDate.indexOf('/') + 1, 2)}</Text>
                <Text style={[globalStyles.SFProText_Regular, {fontSize: 12, color: '#fff'}]}>{ day }</Text>
            </View>

            <View style={{flex: 7, marginHorizontal: 10, justifyContent: 'center'}}>
                <Text style={[globalStyles.SFProDisplay_Bold, {fontSize: 20, marginVertical: 1, color: '#fff'}]}>{ event.title }</Text>
                <Text style={[globalStyles.SFProText_Light, {fontSize: 14, marginVertical: 1, color: '#fff'}]}>{event.startTime} - {event.endTime}</Text>

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