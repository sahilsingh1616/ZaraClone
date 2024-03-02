import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import Splash from './screens/Splash';
import MyAddress from './screens/MyAddress';
import AddAddress from './screens/AddAddress';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Example1 from './screens/Example1';
import Example2 from './screens/Example2';
import Intro from './screens/Intro';
import AddContact from './screens/AddContact';



const Stack=createStackNavigator();

const AppNavigator = () => {
  return (
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}} >

<Stack.Screen name='Splash' component={Splash}/>
{/* <Stack.Screen name='Login' component={Login}/>
<Stack.Screen name='SignUp' component={SignUp}/> */}



<Stack.Screen name='Main' component={Main}/>





<Stack.Screen name='Intro' component={Intro}/>

<Stack.Screen name='Example1' component={Example1}/>

<Stack.Screen name='Example2' component={Example2}/>
<Stack.Screen name='AddContact' component={AddContact}/>

</Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})