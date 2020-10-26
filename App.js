import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import LogIn from './screens/LogIn'
import JoinEvent from './screens/JoinEvent'
import Home from './screens/Home'
import CreateEvent from './screens/CreateEvent'
import Example from './screens/Example'

export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      'SFProText-Light': require('./assets/fonts/SFProText-Light.otf'),
      'SFProText-Heavy': require('./assets/fonts/SFProText-Heavy.otf'),
      'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
      'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
      'SFProText-Bold': require('./assets/fonts/SFProText-Bold.otf'),
      'SFProText-Regular' : require('./assets/fonts/SFProText-Regular.otf'),
      'SFProDisplay-Medium' : require('./assets/fonts/SFProDisplay-Medium.otf'),
      'PermanentMarker-Regular' : require('./assets/fonts/PermanentMarker-Regular.ttf')
    })
  };


  const[fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      //<LogIn />
      //<JoinEvent />
      //<Home />
      <CreateEvent />
      //<Example />
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
    )
  }
};

