import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import LogIn from './screens/LogIn'
import Welcome from './screens/Welcome'
import JoinEvent from './screens/JoinEvent'

export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      'SFProText-Bold': require('./assets/fonts/SFProText-Bold.otf'),
      'SFProText-Regular' : require('./assets/fonts/SFProText-Regular.otf'),
      'SFProDisplay-Medium' : require('./assets/fonts/SFProDisplay-Medium.otf'),
      'PermanentMarker-Regular' : require('./assets/fonts/PermanentMarker-Regular.ttf')
    })
  };


  const[fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <LogIn />
      //<Welcome />
       //<JoinEvent />
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
    )
  }
};

