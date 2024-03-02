import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Example1 = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const SaveData=async()=>{
        await AsyncStorage.setItem('Email',email);
        await AsyncStorage.setItem('Password',password)
        navigation.navigate('Example2')

        

    }

  return (
    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
<TextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholderTextColor='black' placeholder='ENTER EMAIL' style={{padding:10,borderRadius:10,borderWidth:.5,fontSize:15,color:'black',width:'90%',height:50,backgroundColor:'white'}}/>
<TextInput value={password} onChangeText={(txt)=>setPassword(txt)} placeholderTextColor='black' placeholder='ENTER PASSWORD' style={{padding:10,borderRadius:10,borderWidth:.5,marginTop:30,fontSize:15,color:'black',width:'90%',height:50,backgroundColor:'white'}}/>

<TouchableOpacity onPress={()=>SaveData()}  style={{width:'90%',height:50,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'black',marginTop:'10%'}}>
<Text style={{fontSize:20,fontWeight:'600',color:'white'}}>Login</Text>
</TouchableOpacity>

    </View>
  )
}

export default Example1

const styles = StyleSheet.create({})