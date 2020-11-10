import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import RoundButton from '../components/RoundButton'
import { globalStyles } from '../styles/globalStyles'
import DateTimePickerModal from "react-native-modal-datetime-picker";
let tool = require('../backend_tools.js');
export default function CreateEvent({ route, navigation}) {
    //**** handle start date picker ****//
    //console.log(info);
    //{ title: 'event #4', startDate: '12/15/20', endDate: '12/15/20', startTime: '3:00 PM', endTime:'4:00 PM', day: '2', about: 'about', host: 'yes'}
    //const { json } = route.params;

    //console.log(info);
    let info = {};
    if (route.params.json !== undefined) {
        info = JSON.parse(route.params.json);
        //onChangeStartDate(info.startDate);
    }

    const [title, setEventTitle] = useState("");
    const [about, setAbout] = useState("");
    const [location, setLocation] = useState("");


    const [showStartDatePicker, handleStartDatePicker] = useState(false);
    const [startDate, onChangeStartDate] = useState(info.startDate ? info.startDate : "");

    const openStartDatePicker = () => {
        handleStartDatePicker(true);
    };

    const closeStartDatePicker = () => {
        handleStartDatePicker(false);
    };

    const confirmStartDate = (date) => {
        //console.warn("A date has been picked: ", date);
        onChangeStartDate(date.toLocaleDateString());
        closeStartDatePicker();
    };

    //**** handle end date picker ****//
    const [showEndDatePicker, handleEndDatePicker] = useState(false);
    const [endDate, onChangeEndDate] = useState(info.endDate ? info.endDate : "");

    const openEndDatePicker = () => {
        handleEndDatePicker(true);
    };

    const closeEndDatePicker = () => {
        handleEndDatePicker(false);
    };

    const confirmEndDate = (date) => {
        //console.warn("A date has been picked: ", date);
        console.log(date);
        onChangeEndDate(date.toLocaleDateString());
        closeEndDatePicker();
    };

    //**** handle start time picker ****//
    const [showStartTimePicker, handleStartTimePicker] = useState(false);
    const [startTime, onChangeStartTime] = useState(info.startTime ? info.startTime : "");

    const openStartTimePicker = () => {
        handleStartTimePicker(true);
    };

    const closeStartTimePicker = () => {
        handleStartTimePicker(false);
    };

    const confirmStartTime = (time) => {
        //console.warn("A date has been picked: ", date);
        console.log(time);
        onChangeStartTime(time.toLocaleTimeString(navigator.language, {hour:  "numeric",
        minute: "numeric"}));
        closeStartTimePicker();
    };

    //**** handle end time picker ****//
    const [showEndTimePicker, handleEndTimePicker] = useState(false);
    const [endTime, onChangeEndTime] = useState(info.endTime ? info.endTime : "");
    const [usernames, setUsernames] = useState([]);
    const openEndTimePicker = () => {
        handleEndTimePicker(true);
    };

    const closeEndTimePicker = () => {
        handleEndTimePicker(false);
    };

    const confirmEndTime = (time) => {
        //console.warn("A date has been picked: ", date);
        onChangeEndTime(time.toLocaleTimeString(navigator.language, {hour:  "numeric",
        minute: "numeric"}));
        closeEndTimePicker();
    };

    if (route.params.json === undefined) {
        info = {
            title,
            startDate,
            endDate,
            startTime,
            endTime,
            about,
            location
        };
    }
    // if (info) {
    //     setEventTitle(info.title)
    //     onChangeStartDate(info.startDate);
    //     onChangeEndDate(info.endDate);
    //     onChangeStartTime(info.startTime);
    //     onChangeEndDate(info.endTime);
    //     setAbout(info.about);
    // }
    function save() {
        if (title === "" || startDate === null || endDate === null || startTime === null || endTime === null || location === null || about === "" || usernames === null) {
            Alert.alert("Please enter in the Event Details", "", [{ text: "OK" }], { cancelable: false })
            return;
        }
        let dateStart = startDate.split("/");
        let timeStart = startTime.split(":");
        let dateEnd = endDate.split("/");
        let timeEnd = endTime.split(":");
        let amStart = startTime.endsWith("AM");
        let amEnd = endTime.endsWith("AM");
        let event = tool.toEventData(
            tool.getAccount().username,
            title,
            location,
            tool.toEventTime(
                tool.toTimeInstant(parseInt(dateStart[2]), parseInt(dateStart[0]), parseInt(dateStart[1]), (parseInt(timeStart[0]) + (!amStart) ? 12 : 0) % 24, parseInt(timeStart[1].split(" ")[0])),
                tool.toTimeInstant(parseInt(dateEnd[2]), parseInt(dateEnd[0]), parseInt(dateEnd[1]), (parseInt(timeEnd[0]) + (!amEnd) ? 12 : 0) % 24, parseInt(timeEnd[1].split(" ")[0]))),
            about,
            usernames
        );
        tool.addEvent(event).then(navigation.navigate('Home'));
    }

    return (
        <View style={[globalStyles.mainBackground, {paddingTop: 62, paddingHorizontal: 15, flex: 1, alignItems: 'center', marginTop: 15}]}>
                <TextInput
                    style={[globalStyles.input, globalStyles.darkText,{fontFamily: "SFProDisplay-Bold",fontSize: 32, alignSelf: 'stretch'}]}
                    placeholder= "Event Title"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none'
                    autoCorrect={false}
                    defaultValue={info.title}
                    onChangeText={text => setEventTitle(text)}
                />

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TextInput style={[globalStyles.input, {flex: 1, marginRight: 10}]}
                        placeholder= "Start Date"
                        placeholderTextColor = "#D0D0D0"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        defaultValue = {info.startDate}
                        onFocus={openStartDatePicker}
                        value={startDate}
                    />

                    <DateTimePickerModal
                        isVisible={showStartDatePicker}
                        mode="date"
                        onConfirm={confirmStartDate}
                        onCancel={closeStartDatePicker}
                    />

                    <TextInput style={[globalStyles.input, {flex: 1, marginLeft: 10}]}
                        placeholder= "End Date"
                        placeholderTextColor = "#D0D0D0"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        defaultValue = {info.endDate}
                        onFocus={openEndDatePicker}
                        value={endDate}
                        />

                    <DateTimePickerModal
                        isVisible={showEndDatePicker}
                        mode="date"
                        onConfirm={confirmEndDate}
                        onCancel={closeEndDatePicker}
                    />

                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TextInput style={[globalStyles.input, {flex: 1, marginRight: 10}]}
                        placeholder= "Start Time"
                        placeholderTextColor = "#D0D0D0"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        onFocus={openStartTimePicker}
                        value={startTime}
                        />
                    <DateTimePickerModal
                        isVisible={showStartTimePicker}
                        mode="time"
                        onConfirm={confirmStartTime}
                        onCancel={closeStartTimePicker}
                    />

                    <TextInput style={[globalStyles.input, {flex: 1, marginLeft: 10}]}
                        placeholder= "End Time"
                        placeholderTextColor = "#D0D0D0"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        onFocus={openEndTimePicker}
                        value={endTime}
                        />
                    <DateTimePickerModal
                        isVisible={showEndTimePicker}
                        mode="time"
                        onConfirm={confirmEndTime}
                        onCancel={closeEndTimePicker}
                    />
                </View>

                <TextInput
                        style={[globalStyles.input, globalStyles.darkText,{ alignSelf: 'stretch'}]}
                        placeholder= "Location" onChangeText={(text) => setLocation(text)}
                        placeholderTextColor = "#D0D0D0"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                    />

                <Text style={[globalStyles.subTitle, globalStyles.darkText, {fontFamily: "SFProDisplay-Bold", fontSize: 20, alignSelf: 'flex-start', marginTop: 20, marginBottom: 5}]}>Description</Text>
                <TextInput multiline = {true}
                        numberOfLines = {6}
                        placeholder= "About..." onChangeText={(text) => setAbout(text)}
                        placeholderTextColor = "#D0D0D0"
                        style={{alignSelf: 'flex-start', height: 50}}/>

                <Text style={[globalStyles.subTitle, globalStyles.darkText, {fontFamily: "SFProDisplay-Bold", fontSize: 20, alignSelf: 'flex-start', marginTop: 20, marginBottom: 5}]}>Add Guests</Text>
                <TextInput multiline = {true}
                        numberOfLines = {6}
                        placeholder= "Enter Username" onChangeText={(text) => setUsernames(text.split("\n"))}
                        placeholderTextColor = "#D0D0D0"
                        style={{alignSelf: 'flex-start'}}/>

            <RoundButton style={{backgroundColor: '#E4E4E4', top: 40}} text="Save Event" onPress={ () => save() } />
            {/* <RoundButton style={{backgroundColor: '#FF6961', marginVertical: 15}} text="Cancel" onPress={ () => console.log("Cancel Event")} /> */}
        </View>
    )

};
