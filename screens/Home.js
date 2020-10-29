import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles'
import Event from '../components/Event'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Home({navigation}) {
    const [allView, setAllView] = useState(true);
    const [guestView, setGuestView] = useState(false);
    const [hostView, setHostView] = useState(false);

    const [events, setEvents] = useState([
        { title: 'event #1', startDate: '10/31/20', endDate: '10/31/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '6', about: 'about', host: 'yes'},
        { title: 'event #2', startDate: '11/15/20', endDate: '11/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '7', about: 'about', host: 'yes'},
        { title: 'event #3', startDate: '11/16/20', endDate: '11/16/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '1', about: 'about', host: 'no'},
        { title: 'event #4', startDate: '12/15/20', endDate: '12/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '2', about: 'about', host: 'yes'},
        //{ title: 'event #5', startDate: '1/01/20', endDate: '1/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '5', about: 'about', host: 'no'}
    ])

    let monthDisplay = 0;

    const renderItem = ({ item }) => {
        const backgroundColor = item.host === 'yes' ? '#FF6961' : '#FFA49F'
        const json = JSON.stringify(item);
        //if(!allView ((guestView && json.host === 'no') || hostView && json.host === 'no' )){
            if (monthDisplay !== parseInt(item.startDate.substr(0,item.startDate.indexOf('/')))) {
                monthDisplay = parseInt(item.startDate.substr(0,item.startDate.indexOf('/')));
                //console.log("month:" + item.startDate.substr(0,item.startDate.indexOf('/')) + "...");
                return (

                <View>
                    <View style={{marginHorizontal: 0, marginTop: 10, marginBottom: 10, alignSelf: 'stretch', borderBottomColor: '#453F3E',
                        borderBottomWidth: 0.75}}>
                        <Text style={[globalStyles.SFProText_Regular, globalStyles.darkText, {fontSize: 14, paddingVertical: 3}]}> { months[monthDisplay - 1] }</Text>
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
            
            <Text style={[globalStyles.darkHeader, {marginTop: 5}]}>Events</Text>
            
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10, marginTop: 3}}>
                <TouchableOpacity onPress={ () => navigation.navigate('CreateEvent')} delayPressIn={0}>
                    <Text style={{backgroundColor: '#453F3E', padding: 5, marginLeft: 4, marginRight: 10, color: '#fff', width: 100, textAlign: 'center'}}>Create Event</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Join')} delayPressIn={0}>
                    <Text style={{backgroundColor: '#453F3E', padding: 5, marginRight: 8, color: '#fff', width: 100, textAlign: 'center'}}>Join Event</Text>
                </TouchableOpacity>

            </View>

            <View style={{display: 'flex', flexDirection: 'row', marginVertical: 5, alignSelf: 'center'}}>
                <TouchableOpacity style={[guestView ? styles.viewButton: styles.offViewButton, {paddingLeft: 13, borderBottomLeftRadius: 10, borderTopLeftRadius: 10}]} 
                onPress={ () => {
                    setHostView(false),
                    setAllView(false), 
                    setGuestView(true)
                }}
                delayPressIn={0}>
                    <Text style={{ paddingVertical: 5, paddingRight: 8}}>Guest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[allView ? styles.viewButton: styles.offViewButton]} 
                onPress={ () => {
                    setGuestView(false),
                    setHostView(false),
                    setAllView(true) 
                }}
                delayPressIn={0}>
                    <Text style={{paddingLeft: 15, paddingRight: 15, paddingVertical: 5,}}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[hostView ? styles.viewButton: styles.offViewButton, {paddingRight: 13, borderBottomRightRadius: 10, borderTopRightRadius: 10}]} 
                onPress={ () => {
                    setGuestView(false),
                    setAllView(false),
                    setHostView(true)
                }}
                delayPressIn={0}>
                    <Text style={{paddingVertical: 5, paddingLeft: 12}}>Host</Text>
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
        //padding: 5
        //justifyContent: 'center',
    }, 
    header: {
        
    },
    viewButton: {
        backgroundColor: '#c4c4c4'
    },
    offViewButton: {
        backgroundColor: '#e4e4e4'
    }

});