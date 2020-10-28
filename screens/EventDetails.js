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
         <Text style={styles.when} > When </Text>
         <Text style={styles.date} > Fri, 28 September 2020 </Text>
         <Text style={styles.time} > 5PM - 10PM CST </Text>
         <Text style={styles.addCalendar} > Add to Calendar </Text>
         <Text style={styles.place} > San Diego </Text>
         <Text style={styles.location} > Location </Text>
         <Text style={styles.location} > Location </Text>
         <Text style={styles.location} > Location </Text>
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
      width: 270,
      height: 26,
      left: 16,
      top: 432,

      position: "absolute",
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 18,

      color: "#737373",
   },
})