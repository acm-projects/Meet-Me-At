import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles'
import Event from '../components/Event'

export default function Home() {
    return (
        <SafeAreaView style={[styles.localContainer, globalStyles.mainBackground]}>

            
            <Text style={[globalStyles.darkHeader]}>Events</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
                <TouchableOpacity onPress={ () => console.log("Button 1")} delayPressIn={0}>
                    <Text style={{paddingLeft: 4, paddingRight: 8}}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => console.log("Button 2")} delayPressIn={0}>
                    <Text style={{paddingRight: 8}}>Guest</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => console.log("Button 3")} delayPressIn={0}>
                    <Text style={{paddingRight: 4}}>Host</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 5, marginBottom: 10, alignSelf: 'stretch', borderBottomColor: '#000000',
                borderBottomWidth: 1}}>
                <Text style={{padding: 3}}> September</Text>

            </View>
            
            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FF6961'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FF6961'}} onPress={ () => console.log("Join Pressed")} />

            <View style={{marginHorizontal: 5, marginVertical: 10, alignSelf: 'stretch', borderBottomColor: '#000000',
                borderBottomWidth: 1}}>
                <Text style={{padding: 3}}> October</Text>

            </View>

            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    localContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 5
        //justifyContent: 'center',
    }, 
    header: {
        
    }
});