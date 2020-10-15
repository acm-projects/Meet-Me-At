import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './screens/LogIn'
import Welcome from './screens/Welcome'
import LogIn2 from './screens/LogIn2'

export default function App() {
  return (
    //<LogIn />
    //<Welcome />
    <LogIn2 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
