import React, {useState} from "react";
import { globalStyles } from '../styles/globalStyles'
import {StyleSheet, Text, View} from "react-native";

export default function EventDetails({navigation}) {
    return (
        <View style={[globalStyles.mainBackground, styles.container]}>
            <Text style={[globalStyles.SFProDisplay_Bold, styles.title, globalStyles.darkText]}>Event Title</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine, {marginTop: 0}]} >By User</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>When</Text>
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]} >Fri, 28 September 2020</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>5 PM - 10 PM</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>Where</Text>
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]} >San Diego</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>California, United States</Text>

            <Text style={[globalStyles.SFProDisplay_Medium, styles.redSubTitle]}>About</Text>
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]} >Description:</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>The quick brown fox jumped over the log</Text>

            <View style={{flex: 0, flexDirection: 'row', marginTop: 30}}>
                <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine, {marginTop: 0, marginBottom: 30}]} >Your Reply:</Text>
                <Text style={[styles.RSVP, globalStyles.SFProDisplay_Medium]}> Yes</Text>
            </View>
            
            <Text style={[globalStyles.SFProDisplay_Medium, styles.topLine]} >Guests:</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>    Guest 1</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>    Guest 2</Text>
            <Text style={[globalStyles.SFProText_Regular, styles.bottomLine]}>    Guest 3</Text>


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
        marginTop: 28,
        fontSize: 45,
    },
    redSubTitle: {
        marginTop: 26,
        marginBottom: 5,
        fontSize: 25,
        color: '#FF6961'
    },
    topLine: {
        marginTop: 5,
        fontSize: 20,
        color: '#453F3E'
    },
    bottomLine: {
        marginTop: 5,
        color: '#9e9e9e',
        fontSize: 16,
    },
    RSVP: {
        marginHorizontal: 5,
        color: '#48AA26',
        fontSize: 20,
    }
   
})