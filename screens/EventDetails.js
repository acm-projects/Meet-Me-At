import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import * as Font from 'expo-font';
import {StyleSheet,
	Text,
	SafeAreaView,
	Image,
	Button,
	Dimensions,
	TextInput,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	autoComplete,} from "react-native";
import { AppLoading } from "expo";


export default function App() {
   return(
      <View>
         <Text style={styles.eventDetails} > Event Details </Text>
         <Text style={styles.user} > by User </Text>
         <Text style={styles.when} > When </Text>
         <Text style={styles.date} > Fri, 28 September 2020 </Text>
         <Text style={styles.time} > 5PM - 10PM CST </Text>
         <Text style={styles.addCalendar} > Add to Calendar </Text>
         <Text style={styles.place} > San Diego </Text>
         <Text style={styles.state} > California, United States </Text>
         <Text style={styles.About} > About </Text>
         <Text style={styles.aboutText} > The quick brown fox jumped over the log. This is an example sentence of what you could put in here. It is also scrollable. </Text>
         <Text style={styles.location} > Location </Text>

      </View>

   );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
      backgroundColor: "#FFF",
   },
   eventDetails: {
      position: "absolute",
      width: 385,
      height: 103,
      left: 12,
      top: 40,

      fontFamily: 'SFProDisplay-Regular',
      fontSize: 48,

      color: "#000000"

   },
   user: {
      width: 144,
      height: 19,
      left: 16,
      top: 95,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 20,

      color: "#737373",
   },
   when: {
      width: 277,
      height: 58,
      left: 16,
      top: 150,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 36,

      color: "#000000",
   },
   date: {
      width: 347,
      height: 96,
      left: 16,
      top: 208,

      position: "absolute",
      fontFamily: 'SFProDisplay-Thin',
      fontSize: 22,

      color: "#000000",
   },
   time: {
      width: 347,
      height: 96,
      left: 16,
      top: 235,

      position: "absolute",
      fontFamily: 'sf-pro-display-light',
      fontSize: 18,

      color: "#000000",
   },
   addCalendar: {
      width: 216,
      height: 25,
      left: 16,
      top: 279,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 18,

      color: "#FE5D5D",
   },
   location: {
      width: 277,
      height: 58,
      left: 16,
      top: 348,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 36,

      color: "#000000",
   },
   place: {
      width: 347,
      height: 27,
      left: 16,
      top: 406,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 24,

      color: "#000000",
   },
   state: {
      width: 270,
      height: 26,
      left: 16,
      top: 432,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 24,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 20,

      color: "#737373",

   },
   About : {
      width: 277,
      height: 58,
      left: 16,
      top: 500,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 36,

      color: "#000000",
   },
   aboutText : {
      width: 347,
      height: 131,
      left: 16,
      top: 558,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 22,

      color: "#000000",
   },
})