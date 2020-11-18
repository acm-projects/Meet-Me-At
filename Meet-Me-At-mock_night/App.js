import React, { useContext, useState, useMemo } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import LogIn from './screens/LogIn'
import JoinEvent from './screens/JoinEvent'
import Home from './screens/Home'
import CreateEvent from './screens/CreateEvent'
import Profile from './screens/Profile'
import SignUpPage from './screens/SignUpPage'
import LoadingLogIn from './screens/LoadingLogIn'
import EventDetails from './screens/EventDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context'

const LogInStack = createStackNavigator();

const HomeStack = createStackNavigator();

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

  
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => {
      return {
        signIn: () => {
          setUserToken('signed');
        },
        // signUp: () => {

        // },
        signOut: () => {
          setUserToken(null);
        },
      };
    }, []);

    if (fontsLoaded) {
    return (
     <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {!userToken ? ( 
          <LogInStack.Navigator>
            <LogInStack.Screen name="LogIn" component={LogIn} options={{headerTransparent: true, title: ''}}/>
            <LogInStack.Screen name="SignUp" component={SignUpPage} options={{headerTransparent: true, title: ''}}/>
            <LogInStack.Screen name="LoadingLogIn" component={LoadingLogIn} options={{headerTransparent: true, title: ''}} />
          </LogInStack.Navigator>
          ) : (
            <HomeStack.Navigator>
              <HomeStack.Screen name ="Home" component={Home} options={{headerTransparent: true, title: ''}}/>
              <HomeStack.Screen name = "CreateEvent" component={CreateEvent} options={{headerTransparent: true, title: ''}}/>
              <HomeStack.Screen name="EventDetails" component={EventDetails} options={{headerTransparent: true, title: ''}}/>
              <HomeStack.Screen name="Join" component={JoinEvent} options={{headerTransparent: true, title: ''}}/>
              <HomeStack.Screen name="Profile" component={Profile} options={{headerTransparent: true, title: ''}}/>
            </HomeStack.Navigator>
          ) } 
        </NavigationContainer>
       </AuthContext.Provider> 
      //<LogIn />
      //<JoinEvent />
      //<Home />
      //<CreateEvent />
      //<Profile />
      //<EventDetails />
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>
    )
  }
};

