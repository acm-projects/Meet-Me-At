import React, { useState } from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles'
import Event from '../components/Event'
import UserAvatar from 'react-native-user-avatar';

let tool = require('../backend_tools.js');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default function Home({ navigation}) {
    const [allView, setAllView] = useState(true);
    const [guestView, setGuestView] = useState(false);
    const [hostView, setHostView] = useState(false);
    const [initialRender, setRendered] = useState(false);

    const [events, setEvents] = useState([/*
        { title: 'event #4', startDate: '12/15/20', endDate: '12/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '2', about: 'about', host: 'yes'},
        { title: 'event #1', startDate: '10/31/20', endDate: '10/31/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '6', about: 'about', host: 'yes'},
        { title: 'event #2', startDate: '11/15/20', endDate: '11/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '7', about: 'about', host: 'yes'},
        { title: 'event #3', startDate: '11/16/20', endDate: '11/16/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '1', about: 'about', host: 'no'},
        //{ title: 'event #5', startDate: '1/01/20', endDate: '1/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '5', about: 'about', host: 'no'}*/
    ]);
    function reloadEvents() {
        tool.convertEvents(tool.getAccount()).then((res) => setEvents(res));
    }
    function firstRender() {
        if (!initialRender) {
            reloadEvents();
            setRendered(true);
        }
    }
    firstRender();
    let monthDisplay = 0;
    

    const renderItem = ({ item }) => {
        if (!allView) {
            if (guestView && item.host === true) return undefined;
            if (hostView && item.host === false) return undefined;
        }
        const backgroundColor = item.host === true ? '#FF645C' : '#FF7F79' // #FF6961, #FFA49F
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
                    {/* <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('CreateEvent', {json})} /> */}
                    <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('EventDetails', {item})} />
                </View>
                )
            } else {
                return (
                    <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('EventDetails', {item})} />
                )
            }

      };



    return (
        <SafeAreaView style={[styles.localContainer, globalStyles.mainBackground]}>
            <TouchableOpacity style={{ top:55, right: 15, position: 'absolute'}} onPress={ () => navigation.navigate('Profile')} delayPressIn={0}> 
                <UserAvatar size={50} name={tool.getAccount().name}  style={{ height: 40, width: 40, justifyContent: 'center', alignText: 'center'} } />
            </TouchableOpacity>

            <Text style={[globalStyles.darkHeader, {fontSize: 40, marginTop: 5}]}>Events</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginVertical: 5, alignSelf: 'center'}}>
                <TouchableOpacity style={[guestView ? styles.viewButton: styles.offViewButton, {paddingLeft: 13, borderBottomLeftRadius: 10, borderTopLeftRadius: 10}]}
                onPress={ () => {
                    setHostView(false),
                    setAllView(false),
                    setGuestView(true),
                        reloadEvents()
                }}
                delayPressIn={0}>
                    <Text style={{ paddingVertical: 5, paddingRight: 8}}>Guest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[allView ? styles.viewButton: styles.offViewButton]}
                onPress={ () => {
                    setGuestView(false),
                    setHostView(false),
                    setAllView(true),
                        reloadEvents()
                }}
                delayPressIn={0}>
                    <Text style={{paddingLeft: 15, paddingRight: 15, paddingVertical: 5,}}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[hostView ? styles.viewButton: styles.offViewButton, {paddingRight: 13, borderBottomRightRadius: 10, borderTopRightRadius: 10}]}
                onPress={ () => {
                    setGuestView(false),
                    setAllView(false),
                    setHostView(true),
                        reloadEvents()
                }}
                delayPressIn={0}>
                    <Text style={{paddingVertical: 5, paddingLeft: 12}}>Host</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                { events.map((item) => {
                    //console.log(item.title);
                    if (!allView) {
                        if (guestView && item.host === true) return undefined;
                        if (hostView && item.host === false) return undefined;
                    }
                    const backgroundColor = item.host === true ? '#FF645C' : '#FF7F79' // #FF6961, #FFA49F
                    const json = JSON.stringify(item);

                    if (monthDisplay !== parseInt(item.startDate.substr(0,item.startDate.indexOf('/')))) {
                        monthDisplay = parseInt(item.startDate.substr(0,item.startDate.indexOf('/')));
                        //console.log("month:" + item.startDate.substr(0,item.startDate.indexOf('/')) + "...");
                        return (
        
                        <View>
                            <View style={{marginHorizontal: 0, marginTop: 10, marginBottom: 10, alignSelf: 'stretch', borderBottomColor: '#453F3E',
                                borderBottomWidth: 0.75}}>
                                <Text style={[globalStyles.SFProText_Regular, globalStyles.darkText, {fontSize: 14, paddingVertical: 3}]}> { months[monthDisplay - 1] }</Text>
                            </View>
                            {/* <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('CreateEvent', {json})} /> */}
                            <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('EventDetails', {item})} />
                        </View>
                        )
                    } else {
                        return (
                            <Event style={{backgroundColor}} info = {json} onPress={ () => navigation.navigate('EventDetails', {item})} />
                        )
                    }

                    })

                }
            </ScrollView> 
            <TouchableOpacity style={{shadowOffset: {
              width: 6,
              height: 8
            },shadowOpacity: 0.4, shadowRadius: 7, shadowColor: '#000', flex: 1, backgroundColor: '#c4c4c4', position: 'absolute', bottom: 40, right: 25, borderRadius: 60, width: 60, height: 60, padding: 0}}onPress={ () => navigation.navigate('CreateEvent', { undefined })} delayPressIn={0}>
                <Text style={{padding:0, margin:0, color: '#453F3E', bottom: 13, textAlign: 'center', fontSize: 65}}>+</Text>
            </TouchableOpacity>
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
