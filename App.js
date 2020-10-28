import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import LogIn from './screens/LogIn'
import JoinEvent from './screens/JoinEvent'
import EventDetails from './screens/EventDetails'
import SignUpV2 from './screens/SignUpV2'

export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
      'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
      'SFProText-Bold': require('./assets/fonts/SFProText-Bold.otf'),
      'SFProText-Regular' : require('./assets/fonts/SFProText-Regular.otf'),
      'SFProDisplay-Medium' : require('./assets/fonts/SFProDisplay-Medium.otf'),
      'PermanentMarker-Regular' : require('./assets/fonts/PermanentMarker-Regular.ttf'),
      'sf-pro-display-semibold' : require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
      'sf-pro-display-light': require('./assets/fonts/SF-Pro-Display-Light.otf'),
      'SFProDisplay-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf')
    })
  };


  const[fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      //<LogIn />
      //<JoinEvent />
      //<EventDetails />
      <SignUpV2 />
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
    )
  }
};

