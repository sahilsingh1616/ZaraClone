import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{useEffect} from 'react'
import Main from './src/Main'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/Store'
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";


// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
  

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     // notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function(err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */
//   requestPermissions: true,
// });
const App = () => {
//   async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
//     if (enabled) {
//       await messaging().registerDeviceForRemoteMessages();
// const token = await messaging().getToken();
//       console.log(token);

//     }
//   }

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  // requestUserPermission()
  //   return unsubscribe;
  // }, [])
  return (

  <Provider store={store}>
  <AppNavigator/> 
  </Provider>
  


  )
}

export default App

const styles = StyleSheet.create({})