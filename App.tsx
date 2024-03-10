
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  LogBox

} from 'react-native';
import HomeScreens from "./src/screens/HomeScreens"
import  RootNavigator from ".//src/navigators/RootNavigator"
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler"
import { Provider } from 'react-redux';
import store from './src/redux/store';

LogBox.ignoreAllLogs()
export default function App(){
  return(

    <Provider store={store}>

<NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
 
    </Provider>

  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
  
    marginTop:"15%"
  }
})
