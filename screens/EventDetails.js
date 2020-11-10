import React, {useState} from "react";
import { globalStyles } from '../styles/globalStyles'
import {StyleSheet, Text, View} from "react-native";
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let tool = require('../backend_tools.js');
export default function EventDetails({route, navigation}) {
    const data = route.params.item;
    return (
        <View style={[globalStyles.mainBackground, styles.container]}>
            <Text style={[globalStyles.SFProDisplay_Bold, styles.title, globalStyles.darkText]}>{data.raw.name}</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine, {marginTop: 0}]} >By {data.raw.host}</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>When</Text>
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]} >{days[data.day - 1]}, {data.raw.time.start.day} {months[data.raw.time.start.month - 1]} {data.raw.time.start.year}</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>5 PM - 10 PM</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>Where</Text>
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]}>{data.raw.location}</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>About</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>{data.raw.description}</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>Guests</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>{data.raw.guests.toString()}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
        paddingTop: 62,
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 10,
        fontSize: 30,
    },
    redSubTitle: {
        marginTop: 26,
        marginBottom: 5,
        fontSize: 25,
        color: '#FF6961'
    },
    topLine: {
        marginTop: 9,
        fontSize: 20,
        color: '#453F3E'
    },
    bottomLine: {
        marginTop: 5,
        color: '#9e9e9e',
        fontSize: 16,
    },
    description: {
        marginTop: 5,
        color: '#453F3E',
        fontSize: 18,
    },
    RSVP: {
        marginHorizontal: 5,
        color: '#48AA26',
        fontSize: 20,
    }

})
