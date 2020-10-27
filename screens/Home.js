import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles'
import Event from '../components/Event'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Home({navigation}) {
    const [events, setEvents] = useState([
        { title: 'event #1', startDate: '10/31/20', endDate: '10/31/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '6', about: 'about', host: 'yes'},
        { title: 'event #2', startDate: '11/15/20', endDate: '11/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '7', about: 'about', host: 'yes'},
        { title: 'event #3', startDate: '11/16/20', endDate: '11/16/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '1', about: 'about', host: 'no'},
        { title: 'event #4', startDate: '12/15/20', endDate: '12/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '2', about: 'about', host: 'yes'},
        { title: 'event #5', startDate: '1/01/20', endDate: '1/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '5', about: 'about', host: 'no'}
    ])

    let monthDisplay = 0;

    const renderItem = ({ item }) => {
        const backgroundColor = item.host === 'yes' ? '#FF6961' : '#FFA49F'
        const json = JSON.stringify(item);
        if (monthDisplay !== parseInt(item.startDate.substr(0,item.startDate.indexOf('/')))) {
             monthDisplay = parseInt(item.startDate.substr(0,item.startDate.indexOf('/')));
             //console.log("month:" + item.startDate.substr(0,item.startDate.indexOf('/')) + "...");
            return (

            <View>
                <View style={{marginHorizontal: 5, marginBottom: 10, alignSelf: 'stretch', borderBottomColor: '#000000',
                    borderBottomWidth: 1}}>
                    <Text style={{padding: 3}}> { months[monthDisplay - 1] }</Text>
                </View>
                <Event style={{backgroundColor}} info = {json} onPress={ () => console.log(json.title)} />
            </View>
            )
        } else {
            return(
                <Event style={{backgroundColor}} info = {json} onPress={ () => console.log("event pressed")} />
            )
        }
      };

    return (
        <SafeAreaView style={[styles.localContainer, globalStyles.mainBackground]}>
            <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#e4e4e4', top:43, right: 15, position: 'absolute', height: 50, width: 50, borderRadius: 10, justifyContent: 'center'}} onPress={ () => navigation.navigate('Profile')} delayPressIn={0}>
                    <Text style={{fontSize: 25}}>P</Text>
            </TouchableOpacity>
            
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

            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 8, marginTop: 8}}>
                <TouchableOpacity onPress={ () => navigation.navigate('CreateEvent')} delayPressIn={0}>
                    <Text style={{backgroundColor: '#FF6961', padding: 5, marginLeft: 4, marginRight: 10, color: '#fff', width: 100, textAlign: 'center'}}>Create Event</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Join')} delayPressIn={0}>
                    <Text style={{backgroundColor: '#FF6961', padding: 5, marginRight: 8, color: '#fff', width: 100, textAlign: 'center'}}>Join Event</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* <View style={{marginHorizontal: 5, marginBottom: 10, alignSelf: 'stretch', borderBottomColor: '#000000',
                borderBottomWidth: 1}}>
                <Text style={{padding: 3}}> September</Text>

            </View> */}
            

            {/* <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FF6961'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FF6961'}} onPress={ () => console.log("Join Pressed")} /> */}

            {/* <View style={{marginHorizontal: 5, marginVertical: 10, alignSelf: 'stretch', borderBottomColor: '#000000',
                borderBottomWidth: 1}}>
                <Text style={{padding: 3}}> October</Text>

            </View> */}

            {/* <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} />
            <Event style={{backgroundColor: '#FFA49F'}} onPress={ () => console.log("Join Pressed")} /> */}

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